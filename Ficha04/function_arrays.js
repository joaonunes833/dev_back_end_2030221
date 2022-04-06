function helloWorld(){
    var array = [];
    var arrayMessage = "";
    
    array.push(function (){
        // var text = "Hello world 1,";
        // return text;
        return "Hello world 1,";
    },
    function(){
        // var text = "2,";
        // return text;
        return "2,";
    },
    function(){
        // var text = "3";
        // return text;
        return "3";
    })
    
    // for (var i = 0; i < array.length; i++){
    //     arrayMessage += array[i]();
    // }

    array.forEach(element => {
        arrayMessage += element();
    });
    
    console.log(arrayMessage)
}

helloWorld();