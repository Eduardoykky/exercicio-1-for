/*
Faça um algoritmo que receberá 4 palavras diferentes de seu usuário e irá 
concatenar todas elas.
*/

var nome
var palavras = " "

for (var contador = 0; contador < 4; contador++) {
    nome = prompt("Insira uma palavra")
    palavras = palavras + " " + nome
    
}
console.log(palavras)