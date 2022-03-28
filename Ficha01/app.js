// exemplo hello world
var x = 0;

console.log('HELLO WORLD');

//////////// função Nota Final ------------------------------------------------------------

function finalgrade(gradeP, gradeT) {
    var grade = gradeP * 0.7 + gradeT * 0.3;

    console.log('A sua nota foi:' + grade);

    if (grade < 9.5) {
        console.log('Reprovado');
    } else {
        console.log('Aprovado');
    }
}

finalgrade(9, 9);

//////////// função Mês do ano ---------------------------------------------------------

function Month(monthnumber) {
    
    if (monthnumber == 1) {
        console.log('O mês que introduziu foi Janeiro');
    } else if (monthnumber == 2) {
        console.log('O mês que introduziu foi Fevereiro');
    } else if (monthnumber == 3) {
        console.log('O mês que introduziu foi Março');
    } else if (monthnumber == 4) {
        console.log('O mês que introduziu foi Abril');
    } else if (monthnumber == 5) {
        console.log('O mês que introduziu foi Maio');
    } else if (monthnumber == 6) {
        console.log('O mês que introduziu foi Junho');
    } else if (monthnumber == 7) {
        console.log('O mês que introduziu foi Julho');
    } else if (monthnumber == 8) {
        console.log('O mês que introduziu foi Agosto');
    } else if (monthnumber == 9) {
        console.log('O mês que introduziu foi Setembro');
    } else if (monthnumber == 10) {
        console.log('O mês que introduziu foi Outubro');
    } else if (monthnumber == 11) {
        console.log('O mês que introduziu foi Novembro');
    } else if (monthnumber == 12) {
        console.log('O mês que introduziu foi Dezembro');
    } else {
        console.log('Número Inválido');
    }
}

Month(1);

//////////// função Operador Aritmético

function operation(number1, number2, operator) {
    
    if (operator=='+'){
        console.log('O resultado da soma é:' + (number1 + number2))
    } else if (operator=='-') {
        console.log('O resultado da subtração é:' + (number1 - number2))
    } else if (operator=='*') {
        console.log('O resultado da multiplicação é:' + (number1 * number2))
    } else if (operator=='/') {
        console.log('O resultado da divisão é:' + (number1 / number2))
    } else if (operator=='^') {
        console.log('O resultado da potenciação é:' + (number1 ** number2))
    } else {
        console.log('Não introduziu um operador válido')
    }
}

operation(2,2,'+')
operation(2,2,'-')
operation(2,2,'*')
operation(2,2,'/')
operation(2,2,'^')

//////////// função multiplos de 5

function multiples(){

    var multiples = [];

for (var i = 0; i < 20; i++) {   
    var multiple = 5 * i
  if (multiple < 20){
    multiples.push(multiple)
  }
}

console.log(multiples);

}

multiples()

//////////// função Soma dos primeiros 100 números inteiros

function sumIntNumbers(){
    var sum = 0;

    for (var i = 0; i < 101; i++){
        sum += i;
    }
    
    console.log('O resultado será: ' + sum)
}

sumIntNumbers()

//////////// função Fatorial do número

function factorial(number) {
    var numberLog = number
    var fatorial = 1

    for (number; number > 0; number--) {
        fatorial *= number;
    }

    console.log('O fatorial de ' + numberLog + ' é ' + fatorial)
}

factorial(7)

//////////// função Máximo, Mínimo e média de um array

function maxMinMed(array) {
    var max = array[0]
    var min = array[0]
    var med = 0


    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
        if (min > array[i]) {
            min = array[i]
        }
        med += array[i]
    }
    med = med / array.length
    console.log('O máximo é: ' + max + ', o mínimo é: ' + min + ' e a média é: ' + med)
}

maxMinMed([1, 2, 3, 4, 5, 6, 7])