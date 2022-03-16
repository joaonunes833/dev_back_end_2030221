// function workTime(entryTime,exitTime){
//     var totalWorkTime = exitTime - entryTime
//     return totalWorkTime
// }

// function workTime(timeWorkedSeconds){
//     var timeWorkedMinutes = 0;
//     var timeWorkedHours = 0;
//     while (timeWorkedSeconds >= 60) {
//         if (timeWorkedSeconds >= 3600) {
//             timeWorkedSeconds -= 3600
//             timeWorkedHours++
//         }
//         else {
//             timeWorkedSeconds -= 60
//             timeWorkedMinutes++
//         }
//     }
//     console.log('Trabalhou: ' + timeWorkedHours + ' Horas, ' + timeWorkedMinutes + ' Minutos e ' + timeWorkedSeconds + 'segundos.')
// }
// workTime(36000)

function drawSquare(height,width){
    var squareDrawn = '';
    var pointsInSquare = height * width;
    var iWidth = 0
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