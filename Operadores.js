// = Atribuir valor
const number = 5;
const word = "5";

// == comparar o valor
console.log(number == word);

// === comprar o valor e o tipo
console.log(number === word);

//Operador Ternário
console.log(number == word ? "se Sim" : "Se Não");
console.log(word === number ? "Se Sim" : "Se Não");

//Template Literal
const MyName = "Mouise";
const five = "cinco";
const phrase = `olá meu nome é ${MyName} tenho ${five} anos, se pronuncia ${five};`
const idade = 16;
const podeBeber = idade >= 18;

console.log(phrase);
console.log(`Atualmente tenho ${idade} anos, logo eu ${podeBeber ? "Posso Beber!" : "Não posso beber..."}`);