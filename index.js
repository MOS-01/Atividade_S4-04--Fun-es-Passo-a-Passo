//Exercício 1 -S4-05
/*function somarDoisValores (valor1,valor2){
    return(valor1+valor2)
}
console.log(somarDoisValores(15, 876))*/

//Exercício 2
/*function tipo (io){
    return (typeof(io))
}

console.log(tipo(true))*/

//Exercício 3

/*function somarNotas(nota1,nota2,nota3,nota4){
    if(typeof(nota1)!= )
    return (typeof(nota1+nota2+nota3+nota4))
}

console.log(somarNotas(8,'6',9,3))*/

//Exercício 1 S4-06

/*function soma(nota1, nota2, nota3, nota4){
    return(nota1+nota2+nota3+nota4)
  }
  
  function media(somaNotas){
    return(somaNotas/4)
  }

  let somaDasNotas = soma(10, 9, 8, 10)

console.log(`Média do aluno Theo: ${media(soma(10, 9, 8, 10))}`)*/

//Exercício 2 

//usuário quer converter 28ºF para Celsius

function convertToFahrenheit(currentType, currentValue) {
    if (currentType == 'Celsius') {
        return ((currentValue*1.8)+32)
    
        //retorne o resultado da conversão de Celsius para Fahrenheit
    }
    if (currentType == 'Kelvin') {
        return (((currentValue-273)*1.8)+32)
         //retorne o resultado da conversão de Kelvin para Fahrenheit
    }
  }
  
let graus = convertToFahrenheit('Celsius',28)
console.log(`Está ${graus}°F`)

function convertToCelsius(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return ((currentValue-32)/1.8)
    
        //retorne o resultado da conversão de Celsius para Fahrenheit
    }
    if (currentType == 'Kelvin') {
        return (currentValue-273)
         //retorne o resultado da conversão de Kelvin para Fahrenheit
    }
  }

let graus1 = convertToFahrenheit('Kelvin',28)
console.log(`Está ${graus1}°C`)


function convertToKelvin(currentType, currentValue) {
    if (currentType == 'Celsius') {
        return (currentValue+273)
    
        //retorne o resultado da conversão de Celsius para Fahrenheit
    }
    if (currentType == 'Fahrenheit') {
        return (((currentValue-32)*(5/9))+32)
         //retorne o resultado da conversão de Kelvin para Fahrenheit
    }
  }
  
let graus2 = convertToKelvin('Celsius',28)
console.log(`Está ${graus2}°K`)

  
