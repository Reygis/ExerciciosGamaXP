fs = require('fs');

function salvar(v) {
    fs.writeFile('\ resposta.txt', `${v}`, function (err) {
        if (err) return console.log(err);
    });
}
function soma(num1, num2) {
    return new Promise((resolve,reject) => {
        if (typeof num1 === "number" && typeof num2 === "number" ){
            resolve (num1 + num2)
        } 
        else {
            reject ("Não são números")
        }
    }).catch((err)=>err)
}

soma(20, '50').then(salvar)
   