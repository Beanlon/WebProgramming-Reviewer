# Constructor
It is a special method used for defining the properties and methods of objects

Here is an example
```
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make); //Output:Ford
console.log(car1.model); //Output:Mustang
console.log(car1.year); //Output:2024
console.log(car1.color); //Output:red

car1.drive(); //Output: You drive the Mustang
```
As you can see using constructors means creating new objects using the values inside the constructors as parameters which are then being printed out.

And notice that you can also put in methods which shows the printed statement using `this.model` helps to output the model of the car based on the value in the parameter.
