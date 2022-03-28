var utils = {
    booleanIsEmpty: function(array){
        if (array.length == 0){
            return true;
        }
        else {
            return false;
        }
    },
    numberMax: function(array){
        var arrayMax = array[0];

        for (var i = 0; i < array.length; i++) {

            if (arrayMax < array[i]) {
                arrayMax =  array[i]
            }
        }
        return arrayMax;
    },
    numberMin: function(array){
        var arrayMin = array[0];

        for (var i = 0; i < array.length; i++) {

            if (arrayMin > array[i]) {
                arrayMin = array[i]
            }
        }
        return arrayMin;
    },
    numberMin: function(array){
        var arrayMin = array[0];
    
        for (var i = 0; i < array.length; i++) {
    
            if (arrayMin > array[i]) {
                arrayMin = array[i]
            }
        }
        return arrayMin;
    },
    numberAverage: function(array){
        var arrayAverage = 0
        for (var i = 0; i < array.length; i++){
            arrayAverage += array[i]
        } 
        arrayAverage = arrayAverage / array.length
        return arrayAverage;
    },
    numberIndexOf: function(array,value){
        var result;
        if (value < array.length) {
            return array[value];
        }
        else {
            return "O elemento não existe no array.";
        }
        

    },
    arraySubArray: function(array, startIndex, endIndex){
        var subArray = [];
        for (var i = startIndex; i <= endIndex; i++){
            subArray += array[i]
        }
        return subArray;
    },
    booleanIsSameLength: function(a1,a2){
        if (a1.length == a2.length) {
            return true;
        }
        else {
            return false;
        }
    },
    arrayReverse: function(array){
        reversedArray = [];
        for (var i = 0; i < array.length; i++){
            reversedArray.unshift(array[i])
        }
        // for (var i = array.length - 1; i >= 0; i--){
        //     reversedArray += array[i]
        // }
        return reversedArray;
    },
    arraySwap: function(array,index1,index2){
        var element1 = array[index1];
        var element2 = array[index2];
        array[index1] = element2
        array[index2] = element1
        return array
    },
    booleanContains: function(array,value){
        for (var i = 0;i<array.length;i++){
            if (array[i]==value){
                return true;
            }
        }
    },
    arrayConcatenate: function(a1,a2){
        var concatenatedArray = [];
        for (var i = 0; i < a1; i++){
            concatenatedArray += a1[i]
        }
        for (var i = 0; i < a2; i++){
            concatenatedArray += a2[i]
        }
        return concatenatedArray
    }

}

module.exports = utils
