const fs = require('fs')

// 使用__dirname 获取流程变量
fs.readFile(__dirname + '/data/data01.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });