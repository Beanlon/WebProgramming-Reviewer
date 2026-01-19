# Inheritance
Allows a new class to inherit properties and methods from an existing class **(parent -> child)** which helps with code resuability 

#### Example
```
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

class Fish extends Animal {
    name = "fish";
}

class Hawk extends Animal{
    name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;

console.log(rabbit.alive);
hawk.eat(); //Output: This hawk is eating
hawk.sleep(); //Output: This hawk is sleeping
```
As you can see inheritance uses `extends` as its keyword, in this case each class is a different kind of animal extending to the animal class. All characteristics of an animal is inside the main class `Animal` while each of the different animal classes like `Rabbit`, `Fish` and `Hawk` are subclasses extending to the main class. So for example when we call `hawk.eat()` it shows a string concatenated with the name.
