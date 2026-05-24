const path = require('path')

// Path Absoluto
console.log(path.resolve('arquivo.txt'))

//Formar um path
const midFolder = "relatorios"
const fileName = "text.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)