const fs = require('fs');
const path = require('path');

// 缓存数据以提高性能
let cachedData = null;
let lastFetch = null;

exports.handler = async (event) => {
  // 只处理 POST 请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: '只支持 POST 请求' })
    }
  }
  
  try {
    // 解析 POST 请求体
    const requestData = JSON.parse(event.body || '{}');
    
    // 获取文件路径
    const dataPath = path.join(__dirname, 'data.json');
    
    // 使用缓存（每5分钟刷新一次）
    const now = Date.now();
    if (!cachedData || !lastFetch || (now - lastFetch) > 300000) {
      // 读取 JSON 文件
      const rawData = fs.readFileSync(dataPath, 'utf8');
      cachedData = JSON.parse(rawData);
      lastFetch = now;
      
      console.log('从文件加载数据');
    } else {
      console.log('使用缓存数据');
    }
    
    // 根据请求参数处理数据
    let responseData = { ...cachedData };
    
    // 示例：根据ID过滤产品
    if (requestData.productId) {
      responseData.products = responseData.products.filter(
        product => product.id === requestData.productId
      );
    }
    
    // 示例：根据类别过滤产品
    if (requestData.category) {
      responseData.products = responseData.products.filter(
        product => product.category === requestData.category
      );
    }
    
    // 更新统计信息
    responseData.stats = {
      ...responseData.stats,
      returnedProducts: responseData.products.length,
      requestTime: new Date().toISOString()
    };
    
    // 返回 JSON 响应
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60' // 客户端缓存60秒
      },
      body: JSON.stringify(responseData)
    };
    
  } catch (err) {
    console.error('处理请求时出错:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: '服务器错误', 
        details: err.message 
      })
    }
  }
};