const fs = require('fs')


fs.readFile('01input.txt', 'utf-8', (err, data) => {
    if (err) throw err; // 读取失败err才会有值，否则为null
    console.log(data); // 读取成功直接打印

    const readArr = data.split(',')
    const cleanArr = [];
    readArr.forEach(element => {
        cleanArr.push(element.replace(' ', '').replace('=', ':'))
    });

    fs.writeFile('01output.txt', cleanArr, function(err) {
        if(err) throw err;
        console.log('写入成功!');
    })

});





