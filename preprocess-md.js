const fs = require('fs');
const path = require('path');

// 处理单个文件
const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split(/\r?\n/); 
  let inCodeBlock = false;
  let modified = false;

  lines = lines.map(line => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('```') || trimmedLine.startsWith('~~~')) {
      inCodeBlock = !inCodeBlock;
      return line; 
    }

    if (inCodeBlock) return line;

    // 修改以匹配不同目录
    const isHeader = /^#+\s/.test(trimmedLine);
    const hasIgnoreTag = line.includes('{docsify-ignore}');

    if (isHeader && !hasIgnoreTag) {
      modified = true;
      return line.replace(/(^#+.*?)(\s*)$/, '$1 {docsify-ignore}$2');
    }

    return line;
  });

  if (modified) {
    const newContent = lines.join('\n').replace(/\n$/, ''); 
    fs.writeFileSync(filePath, newContent);
    console.log(`已修复: ${filePath}`);
  }
};

const traverseDir = (dirPath) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      traverseDir(fullPath); 
    } else if (entry.isFile() && path.extname(entry.name) === '.md') {
      processFile(fullPath);
    }
  }
};

const docsDir = path.join(__dirname, 'docs');
if (fs.existsSync(docsDir)) {
  traverseDir(docsDir);
} else {
  console.error('目录不存在:', docsDir);
}