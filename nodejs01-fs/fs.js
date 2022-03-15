const fs = require('fs')
fs.readFile('print.txt', 'utf-8', (err, data) => {
    if (err) throw err; // 读取失败err才会有值，否则为null
    console.log(data); // 读取成功直接打印
});

fs.writeFile('write.txt', 'write infomation', function(err){
    if(err) throw err;
    console.log("write success");
});