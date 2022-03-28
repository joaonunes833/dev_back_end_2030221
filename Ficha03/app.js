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
console.log(arrayUtils.numberMax([1,2,3,4]))
console.log(arrayUtils.numberMin([1,2,3,4]))
console.log(arrayUtils.numberAverage([1,2,3,4]))
console.log(arrayUtils.numberIndexOf([1,2,3,4],0))
console.log(arrayUtils.booleanIsSameLength([1,2,3,4],[1,2,3,4]))
console.log(arrayUtils.arrayReverse([1,2,3,4]))
console.log(arrayUtils.arraySwap([1,2,3,4],0,3))
console.log(arrayUtils.booleanContains([1,2,3,4],3))
console.log(arrayUtils.arrayConcatenate([1,2,3,4],[5,6,7,8]))

