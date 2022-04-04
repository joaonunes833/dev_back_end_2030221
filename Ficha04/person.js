function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function (age) {
    this.age = age;
    console.log("Hello " + this.firstName + " " + this.lastName + "\nIdade: " + this.age);
}
// Person.prototype.age = function(age) { 
//     this.age = age;
//     console.log("Idade: " + this.age);
// }

var john = new Person("John", "Doe");
john.greet(21);
// john.age(21)

var jane = new Person("Jane", "Doe");
jane.greet(23);
// jane.age(23);

console.log(__proto__ == jane);
console.log(__proto__ == john);



