const prompt = require('prompt-sync')
const input = prompt();
let propryCss = [];
const warning = "Para sair digite 'sair'";
let appRuning = true;


while (appRuning) {
    console.log(warning);
    var value = input("Digite uma propriedade css: ");
    if (value == "sair") {
        appRuning = false
    }
    else {
        propryCss.push(value);
        propryCss.sort();
        console.clear()
        console.log("========Propriedades Css==========");
        console.log("----------------------------------");
        propryCss.forEach((prop) => {
            console.log("-" + prop);
        });
        console.log("----------------------------------");
    }

}




