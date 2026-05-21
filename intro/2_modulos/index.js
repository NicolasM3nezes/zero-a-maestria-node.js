const fs = require('fs'); //file system

fs.readFile('text.txt', 'utf8', (jogo, data) => {

    if(jogo) {
        console.log("Erro no sistema");
        return
    }
    console.log(data);
})
