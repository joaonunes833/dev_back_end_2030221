var utils = {
    booleanIsEmpty: function (array) {
        if (array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    numberMax: function (array) {
        if (array.length != 0) {
            var arrayMax = array[0];
            for (var i = 0; i < array.length; i++) {

                if (arrayMax < array[i]) {
                    arrayMax = array[i]
                }
            }
            return arrayMax;
        }
        else {
            return 'Array is empty'
        }
    },
    numberMin: function (array) {
        if (array.length != 0) {
            var arrayMin = array[0];
            for (var i = 0; i < array.length; i++) {

                if (arrayMin > array[i]) {
                    arrayMin = array[i]
                }
            }
            return arrayMin;
        }
        else {
            return 'Array is empty'
        }
    },
    numberAverage: function (array) {
        if (array != 0) {
            var arrayAverage = 0
            for (var i = 0; i < array.length; i++) {
                arrayAverage += array[i]
            }
            arrayAverage = arrayAverage / array.length
            return arrayAverage;
        }
        else {
            return 'Array is empty'
        }
    },
    numberIndexOf: function (array, value) {
        if (array != 0) {
            var valueIndexPosition = '';
            for (var i = 0; i < array.length; i++) {
                if (array[i] == value) {
                    valueIndexPosition += String(i) + ','
                }
            }
            if (valueIndexPosition.length == 0) {
                valueIndexPosition = '-1'
                return valueIndexPosition;
            }
            else {
                return 'O valor foi encontrado nos índices: ' + valueIndexPosition
            }
        }
        else {
            return 'Array is empty'
        }



    },
    arraySubArray: function (array, startIndex, endIndex) {
        if (array != 0) {
            var subArray = [];
            for (var i = startIndex; i <= endIndex; i++) {
                subArray += array[i]
            }
            return subArray;
        }
        else {
            return 'Array is empty'
        }

    },
    booleanIsSameLength: function (a1, a2) {
        if (a1 != 0 || a2 != 0) {
            return a1.length == a2.length
        }
        else {
            return 'Both arrays are empty'
        }

    },
    arrayReverse: function (array) {
        if (array != 0) {
            reversedArray = [];
            for (var i = 0; i < array.length; i++) {
                reversedArray.unshift(array[i])
            }
            // for (var i = array.length - 1; i >= 0; i--){
            //     reversedArray += array[i]
            // }
            return reversedArray;
        }
        else {
            return 'Array is empty'
        }

    },
    arraySwap: function (array, index1, index2) {
        if (array != 0) {
            var element1 = array[index1];
            var element2 = array[index2];
            array[index1] = element2
            array[index2] = element1
            return array
        }
        else {
            return 'Array is empty'
        }

    },
    booleanContains: function (array, value) {
        if (array != 0) {
            var valueExists = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i] == value) {
                    valueExists = true;
                }
            }
            return valueExists;
        }
        else {
            return 'Array is empty'
        }

    },
    arrayConcatenate: function (a1, a2) {
        if (a1 != 0 || a2 != 0) {
            var concatenatedArray = [];
            for (var i = 0; i < a1.length; i++) {
                concatenatedArray += a1[i]
            }
            for (var i = 0; i < a2.length; i++) {
                concatenatedArray += a2[i]
            }
            return concatenatedArray
        }
        else {
            return 'Both arrays are empty'
        }

    }

}

module.exports = utils