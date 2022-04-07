var obj = {name: 'example', age: 0, gender: 'example'};
console.log(JSON.stringify(obj));
var str = '{"name": "example", "age": "0", "gender": "example"}';
console.log(JSON.parse(str));

var Emitter = require("./emitter");
var app = new Emitter();
var eventConstants = require("./configs")

app.on(eventConstants.events.LOGIN,function(){
    console.log("Someone has logged in.")
});
app.on(eventConstants.events.LOGOUT,function(){
    console.log("Someone has logged out.")
});
app.on(eventConstants.events.NovoEvento, function(){
    console.log("Um novo evento foi criado.")
});

app.emit(eventConstants.events.LOGIN,);
app.emit(eventConstants.events.LOGOUT);
app.emit(eventConstants.events.NovoEvento);



