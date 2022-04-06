class Emitter {
    constructor() {
        this.events = {};
    }
}

Emitter.prototype.on = function(type,listener){
    Emitter.events.on = [];
    Emitter.events.on.push(listener);
    Emitter.events.on.push(type);
}

Emitter.prototype.emit = function(type){
    Emitter.events.emit = [];
    Emitter.events.emit.push(type);
    Emitter.events.emit.forEach(element => {
        console.log(element);
    })
}

var emitter = new Emitter();
emitter.emit = "tipo1";
console.log(emitter);