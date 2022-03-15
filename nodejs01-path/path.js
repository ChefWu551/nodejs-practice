const path = require('path')

// '../' 会删除一层目录
console.log(path.join('/ab/aaa', '../', '/c'))
console.log(path.join(__dirname, '/c'))

console.log(path.basename('/a/b/c.html'))

console.log(path.basename('/a/b/c.html', '.html'))

console.log(path.extname('/a/b/c.html'))