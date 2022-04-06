//Tipos Primitivos
//Tipo número: int, float...
const valor01 = 3;
const valor02 = 1.4;

console.log(valor01 + valor02);

//Tipo texto: Strings...
const texto01 = "Hello word!";
const texto02 = "1.4"
console.log(texto01);

//Tipos sim/não: Boolean
const igual = texto01 === valor01;
const desigual = texto02 == valor02;
console.log(igual);
console.log(desigual);

//Testes

const numText = valor01 + texto02; //concatenação
const numText01 = valor01 - texto02; //operação matemátiva
const numText02 = valor01 * texto02; //operação matemátiva
const numText03 = valor01 / texto02; //operação matemátiva

const numText04 = valor01 - texto01; //operação matemátiva


console.log(numText);
console.log(numText01);
console.log(numText02);
console.log(numText03);
console.log(numText04);