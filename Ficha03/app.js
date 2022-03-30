var arrayUtils = require('./ArrayUtils');

// Função Download

function started(){
    console.log("Started Download\n")
}

function update(progress){
    console.log(progress + '% of Download')
}

function completed(){
    console.log('\nCompleted Download')
}

function performDownload(started_fn,update_fn,completed_fn){
    started_fn();

    for (var i = 0; i <= 100; i++){
        update_fn(i)
    }
    completed_fn()
}

performDownload(started,update,completed)

// Funções no ficheiro ArrayUtils.js

console.log(arrayUtils.booleanIsEmpty([]))
console.log(arrayUtils.numberMax([]))
console.log(arrayUtils.numberMin([]))
console.log(arrayUtils.numberAverage([]))
console.log(arrayUtils.numberIndexOf([]))
console.log(arrayUtils.arraySubArray([]))
console.log(arrayUtils.booleanIsSameLength([1],[]))
console.log(arrayUtils.arrayReverse([4,3,2,1]))
console.log(arrayUtils.arraySwap([]))
console.log(arrayUtils.booleanContains([],0))
console.log(arrayUtils.arrayConcatenate([],[]))

