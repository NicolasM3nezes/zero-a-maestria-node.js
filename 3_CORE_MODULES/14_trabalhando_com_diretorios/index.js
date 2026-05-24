const fs = require("fs")

// Se não te a pasta Ele vai criar
if(!fs.existsSync('./minhapasta')){
    console.log("Pasta não existe")
    fs.mkdirSync('minhapasta')

}

// Se tiver a pasta ele existe
if(fs.existsSync('./minhapasta')){
    console.log("Pasta existe")
    
    
}