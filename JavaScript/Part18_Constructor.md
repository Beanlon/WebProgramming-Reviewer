#Constructors
These are special methods for defining the properties and methods of objects
#### Example
```
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make); //Output: Ford
console.log(car1.model); //Output: Mustang
console.log(car1.year); //Output: 2024
console.log(car1.color); //Output: red
car1.drive(); //Output: You drive the Mustang
```
As you can see the constructor uses the `Car` function and passes on values unto the parameters. After that using the constructor it calls the different values and methods inside to be displayed on the console.
