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
