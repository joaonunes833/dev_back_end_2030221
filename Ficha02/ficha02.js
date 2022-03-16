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
    var vowelNumber = 0;
    for(var i = 0; i < phrase.length; i++){
        if (phrase[i] == 'a' || phrase[i] == 'e' || phrase[i] == 'i' || phrase[i] == 'o' || phrase[i] == 'u'){
            vowelNumber++;        
        }
    }
    return vowelNumber;
}

console.log(numberOfVowels('Bom Dia'))

// Função Vezes por letra

function numberOfTimesPerLetter(phrase,letter){
    var timesPerLetter = 0;
    for (var i = 0; i < phrase.length; i++){
        if (phrase[i].toLowerCase() == letter.toLowerCase()){
            timesPerLetter ++
        }
    }
    return timesPerLetter;
}

console.log(numberOfTimesPerLetter('O rato roeu a roupa do rei de Roma','r'))

// Função Tempo de trabalho

function workTime(entryTimeHour,entryTimeMinutes,entryTimeSeconds,exitTimeHour,exitTimeMinutes,exitTimeSeconds) {
    var totalWorkTimeHours = 0;
    var totalWorkTimeMinutes = 0;
    while (entryTimeHour>0) {
        entryTimeHour --
        entryTimeSeconds += 3600
    }
    while (entryTimeMinutes>0) {
        entryTimeMinutes --
        entryTimeSeconds += 60
    }
    while (exitTimeHour>0) {
        exitTimeHour--
        exitTimeSeconds+=3600
    }
    while (exitTimeMinutes>0){
        exitTimeMinutes--
        exitTimeSeconds+=60
    }

    var totalWorkTimeSeconds = exitTimeSeconds - entryTimeSeconds;

    while (totalWorkTimeSeconds>=60){
        if (totalWorkTimeSeconds>=3600){
            totalWorkTimeSeconds-=3600
            totalWorkTimeHours++
        }
        else{
            totalWorkTimeMinutes++
            totalWorkTimeSeconds-=60
        }
    }
    console.log('Trabalhou: ' + totalWorkTimeHours + ' Horas, ' + totalWorkTimeMinutes + ' Minutos e ' + totalWorkTimeSeconds + ' segundos.')
}

workTime(10,0,0,18,0,0)

// Função Desenha quadrado

function drawSquare(height,width){
    var squareDrawn = '';
    var pointsInSquare = height * width;
    var iWidth = 0;
    for (var i = 1; i <= pointsInSquare; i++){
        if (iWidth == width){
            squareDrawn = squareDrawn + '\no'
            iWidth = 1
        }
        else {
            squareDrawn = squareDrawn + 'o'
            iWidth++
        }
    }
    return squareDrawn
}

console.log(drawSquare(20,10)) 