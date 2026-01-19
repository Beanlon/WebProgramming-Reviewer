# This
It references to the object where `.this` is used (the object depends on the immediate context)

Here is the format
```https
person.name = this.name
```

#### Example
```https
const person1 = {
    name: "Spongebob";
    favFood: "hamburgers";
    sayHello: function(){console.log(`Hi I am ${this.name}`)};
    east: function() {console.log(`${this.name} is eating ${this.favFood}`)};
}

person.eat();//Output: Spongebob is eating hamburgeers
```
As you can notice using this references to the particular attribute or value that is assigned to that
variable, in this case `this.name` refers to the name Spongebon and `this.favFood refers to the hamburgers.
