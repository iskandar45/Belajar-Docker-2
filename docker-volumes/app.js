const fs = require('fs');
const filePath = './data/hello.txt';

// Pastikan folder data ada
if (!fs.existsSync('./data')) fs.mkdirSync('./data');

// Tulis data ke file
fs.writeFileSync(filePath, `Hello from Docker! ${new Date().toLocaleString()}`);

console.log('✅ File berhasil dibuat di folder data!');
