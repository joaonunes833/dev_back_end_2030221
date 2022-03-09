function maxMinMed(array) {
    var max = array[0]
    var min = array[0]
    var med = 0


    for (var i = 1; i < array.length; i++) {
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