// inicializando um array vazioconst myList = [];
/*const myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0])
console.log(myArray[1])*/

/*let fruits = ['apple', 'laranja']; 
fruits.unshift('lemon'); //adiciona um elemento no inicioconsole.log(fruits); // ['lemon', 'apple', 'laranja']"
 console.log(fruits)*/

 let atividadesDiarias = ['trabalhar', 'comer', 'estudar', 'dormir'];
// remover o último elemento
atividadesDiarias.pop();
console.log(atividadesDiarias);
const elementoRemovido = atividadesDiarias.pop();
console.log(elementoRemovido)

// ['trabalhar', 'comer', 'estudar']// remover o último elemento de ['trabalhar', 'comer', 'estudar']const elementoRemovido = atividadesDiarias.pop(); 
// exibir o elemento removidoconsole.log(elementoRemovido); // 'estudar'console.log(atividadesDiarias);  // ['trabalhar', 'comer']