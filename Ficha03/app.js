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

console.log(arrayUtils.arrayConcatenate([1,2,3,4],[5,6,7,8]))

