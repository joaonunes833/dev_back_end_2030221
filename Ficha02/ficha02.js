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

// Função Desenha quadrado/retângulo

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

// Função Desenha triângulo

function drawTriangle(height){
    var triangleDrawn = '';
    var currentline = 1;
    var iWidth = 0;
    while (iWidth < height) {
        if (iWidth == currentline){
            triangleDrawn = triangleDrawn + '\no'
            iWidth = 1
            currentline ++
        }
        else {
            triangleDrawn = triangleDrawn + 'o'
            iWidth++
        }
    }
    return triangleDrawn
}

console.log(drawTriangle(10)) 

// Função Desenha caixa

function drawBox(size){
    var box = '';
    var currentLine = 1;
    var currentPosition = 1;
    while (currentLine <= size){
        if (currentPosition == size){
            box = box + '*\n'
            currentPosition = 1
            currentLine++
        }
        else if (currentLine > 1 && currentLine < size && currentPosition > 1 && currentPosition < size){
            box = box + ' '
            currentPosition++
        }
        else {
            box = box + '*'
            currentPosition++
        }
    }
    return box
}

console.log(drawBox(10)) 

// Função Processar notas alunos

function processStudentResults(option){
    
    var students = [
        {name:'filipe',score:8},
        {name:'santos',score:16},
        {name:'jose',score:5},
        {name:'jacinta',score:15},
        {name:'duarte',score:4},
        {name:'ana',score:19}
    ];
    
    var listScores = '';
    var maxScore = students[0]['score'];
    var maxStudentScore = students[0]['name'];
    var minScore = students[0]['score'];
    var minStudentScore = students[0]['name'];
    var medScore = 0;
    var positiveGrades = 0;
    var negativeGrades = 0;

    for (var i = 0; i < students.length; i++) {
        listScores = listScores + 'Aluno: ' + String(students[i]['name']) + ', Nota: ' + String(students[i]['score']) + '\n'
    }

    for (var i = 0; i < students.length; i++) {

        if (maxScore < students[i]['score']) {
            maxScore = students[i]['score']
            maxStudentScore = students[i]['name']
        }
        if (minScore > students[i]['score']) {
            minScore = students[i]['score']
            minStudentScore = students[i]['name']
            
        }
        medScore += students[i]['score']
    }
    medScore = medScore / students.length

    for (var i = 0; i < students.length; i++) {

        if (students[i]['score'] < 9.5) {
            negativeGrades++
        }
        else{
            positiveGrades++
        }
    }

    if (option == 1) {
        console.log(listScores)
    }
    else if (option == 2) {
        console.log('A nota máxima é: ' + maxScore + ', Aluno: ' + maxStudentScore)
    } 
    else if (option == 3) {
        console.log('A nota mínima é: ' + minScore + ', Aluno: ' + minStudentScore)
    }
    else if (option == 4) {
        console.log('A nota média é: ' + medScore)
    }
    else if (option == 5) {
        console.log('Notas negativas: ' + negativeGrades)
    }
    else if (option == 6) {
        console.log('Notas positivas: ' + positiveGrades)
    }
    else {
        console.log('Não Introduziu uma opção válida')
    }
}

processStudentResults(1)
// Lista - 1
// Melhor nota – 2
// Pior nota – 3
// Nota média – 4
// Notas Negativas – 5
// Notas Positivas – 6
