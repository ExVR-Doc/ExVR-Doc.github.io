const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
 if (event.httpMethod !== 'POST') {
   return {
     statusCode: 405,
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ error: 'Method Not Allowed' })
   };
 }

 try {
   const filePath = path.join(__dirname, 'data.json');
   const data = fs.readFileSync(filePath, 'utf8');
   const jsonData = JSON.parse(data);

   return {
     statusCode: 200,
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     body: JSON.stringify(jsonData)
   };
 } catch (err) {
   return {
     statusCode: 500,
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ error: '读取文件失败', details: err.message })
   };
 }
};