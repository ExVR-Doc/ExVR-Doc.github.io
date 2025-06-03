// netlify/functions/api.js
const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    // 指向您仓库中的JSON文件
    const rawUrl = 'https://raw.githubusercontent.com/ExVR-Doc/ExVR-Doc.github.io/main/docs/exvr.json';

    const response = await fetch(rawUrl);
    if (!response.ok) throw new Error(`GitHub请求失败: ${response.status}`);
    
    const jsonData = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60' // 设置缓存策略
      },
      body: JSON.stringify(jsonData)
    };
    
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({
        error: '数据加载失败',
        details: err.message
      })
    };
  }
};