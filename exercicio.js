/* 
Mariana Fernandes de Oliveira 
*/

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO;
// 1 - console.log(10);
// console.log(10, 5);

//2 - console.log(10, 10, 10);

//3 - let horasDeTrabalho;
// let valorPorDia;

// EXERCICIOS DE ESCRITA DE CÓDIGO;
// 1
let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

// d) pq não foi definido um valor;

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual a sua idade?");

console.log(typeof nome);
console.log(typeof idade);

// f) retornou duas strings

console.log("Olá", nome, "Você tem", idade, "anos");

// 2
let primeiraPergunta;
let segundaPergunta;
let terceiraPergunta;

primeiraPergunta = prompt("Você é brasileiro?");
segundaPergunta = prompt("Você já viajou de avião?");
terceiraPergunta = prompt("Você fala inglês?");

console.log("Você é brasileiro?", primeiraPergunta);
console.log("Você já viajou de avião?", segundaPergunta);
console.log("Você fala inglês?", terceiraPergunta);

// 3
let a = 10;
let b = 25;
c = a;
a = b;
b = c;
console.log('O novo valor de a é', a);
console.log('o novo valor de b é', b);
