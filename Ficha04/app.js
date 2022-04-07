var obj = {name: 'example', age: 0, gender: 'example'};
console.log(JSON.stringify(obj));
var str = '{"name": "example", "age": "0", "gender": "example"}';
console.log(JSON.parse(str));

var Emitter = require("./emitter");
var app = new Emitter();

app.on("LOGIN",function(){
    console.log("Someone has logged in.")
});
app.on("LOGOUT",function(){
    console.log("Someone has logged out.")
});

app.emit("LOGIN");
app.emit("LOGOUT");
