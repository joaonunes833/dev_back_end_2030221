var array = [];
var push1 = function() {
    return "Hello World"
}
var push2 = function() {
    return "1,2"
}
var push3 = function() {
    return ",3"
}
array.push(push1,push2,push3)

console.log(array)