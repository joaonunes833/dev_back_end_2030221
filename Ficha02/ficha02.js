// Função IMC

function IMC(weight,height){
    var imc = (weight / Math.pow(height,2))
    if (imc < 18.5){
        console.log('Peso: ' + weight + 'kg,' + ' Altura: ' + height + 'm.' + ' O seu IMC é: ' + imc + ' (abaixo do peso)')
    }
    else if (imc >= 18.5 && imc < 25){
        console.log('Peso: ' + weight + 'kg,' + ' Altura: ' + height + 'm.' + ' O seu IMC é: ' + imc + ' (no peso normal)')
    }
    else if (imc >= 25 && imc < 30){
        console.log('Peso: ' + weight + 'kg,' + ' Altura: ' + height + 'm.' + ' O seu IMC é: ' + imc + ' (acima do peso)')
    }
    else {
        console.log('Peso: ' + weight + 'kg,' + ' Altura: ' + height + 'm.' + ' O seu IMC é: ' + imc + ' (obeso)')
    }
}

IMC()

// Função Inverter palavras na frase

function reversedWords(phrase) {
    var reversedWordArray = phrase.split(" ");
    var reversedPhrase = "";
    reversedWordArray.forEach(word => {
        for (let i = word - 1; i >= 0; i--) {
            reversedPhrase += word[i];            
        }
        reversedPhrase += " ";
    });
    
    return reversedPhrase;
  }

console.log(reversedWords('Hoje e Domingo'))

// Função Número de vogais

function numberOfVowels(phrase){
    var vowelNumber = 0
    for(var i = 0; i < phrase.length; i++){
        if (phrase[i] == 'a' || phrase[i] == 'e' || phrase[i] == 'i' || phrase[i] == 'o' || phrase[i] == 'u'){
            vowelNumber += 1
        }
    }
    return vowelNumber
}

console.log(numberOfVowels('Bom Dia'))

// Função Número de vogais

function numberOfTimesPerLetter(phrase,letter){
    var timesPerLetter = 0
    for (var i = 0; i < phrase.length; i++){
        if (phrase[i].toLowerCase() == letter.toLowerCase()){
            timesPerLetter += 1
        }
    }
    return timesPerLetter
}

console.log(numberOfTimesPerLetter('O rato roeu a roupa do rei de Roma','r'))