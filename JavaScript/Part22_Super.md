# Super
It is a keyword used to access the constructor or access the methods of the parent

```https
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, rundSpeed){
        super();
        this.runSpeed = rundSpeed;
    }

}

const rabbit = new Rabbit("rabbit, 4, 25);

console.log(rabbit.name); //Output: rabbit
console.log(rabbit.age);    //Output: 4
console.log(rabbit.runSpeed);   //Output: 25
```

As you can see `super` was used by the `Rabbit` subclass to access the methods of the constructor of the `Animal` class to access to name and age. when the constructor is made all the parameters are passed properly and when it is time to print then it appears properly.
