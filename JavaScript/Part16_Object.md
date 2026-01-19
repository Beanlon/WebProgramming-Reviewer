# Objects
A collection of related properties and/or methods. It can represent real world objects (people, products, places) 

The format looks like this
```https
object = {key:value, function()}
```
#### Example
```https
const person = {
    firstName: "Spongebob";
    lastName: "Squarepants";
    age: 30
    siEmployed: true;
    sayHello: function(){console.log("Hi! I am Spongbob!")};
}

console.log(person.firstName); //Output: Spongebob
console.log(person.lastName); //Output: Squarepants
console.log(person.age); //Output: 30
console.log(person.isEmployed); //Output: true;
person.sayHello();//Output: "Hi! I am Spongbob!"
```
As you can see we declare an object as a `const` named person, it hase attributes such as `firstName` and `lastName` as well as  `age` and and a boolean named `isEmployed`, there are also functions inside the object such as `sayHello` which prints out a string which is called out later.



