const fs = require('fs')
const path = require('path')

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '/tmpFile.html'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    resolveJs(data);
    resolveHtml(data);
    });

function resolveJs(data) {
    const rawJs = regScript.exec(data)
    const newJs = rawJs[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname,  '/jsFile.js'), newJs, function(err) {
        if(err) throw err;
        console.log('写入js脚本成功！');
    })
}

function resolveHtml(data) {

}