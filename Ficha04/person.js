function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + " " + this.lastName + "\nIdade: " + this.age);
}
Person.prototype.age = function() { 
    this.age = 0;
    console.log("Idade: " + this.age);
}

var john = new Person("John", "Doe");
john.age = 23
john.greet();
// john.age(21)

var jane = new Person("Jane", "Doe");
jane.age = 21
jane.greet();
// jane.age(23);

console.log(__proto__);
console.log(__proto__ == jane);
console.log(__proto__ == john);



