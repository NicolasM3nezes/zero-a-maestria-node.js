const fs = require('fs')

fs.stat('arquivo.txt', (err, stat) => {
if (err) {
    console.log(err)
    return
}
console.log(stat.isFile)
console.log(stat.atime)
console.log(stat.isDirectory)
})