const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const filePath = path.join(__dirname, 'exvrserverdata.json');
    // console.log('当前文件所在目录:', __dirname);
    // console.log('尝试读取的文件路径:', filePath);

    const files = fs.readdirSync(__dirname);
    // console.log('当前目录下的文件:', files);

    const rawData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {data:JSON.stringify(jsonData),file: String(files.join(', '))}060
    };
  } catch (err) {
    console.error('读取文件失败:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: '读取文件失败',
        details: err.message,
        path: __dirname,
        files: fs.readdirSync(__dirname) // 再次列出文件，确保我们看到当前目录内容
      })
    };
  }
};