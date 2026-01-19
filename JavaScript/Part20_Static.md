# Static 
Keywords that defines properties or methods that belong to a class itself rather than objects created from the class

Class owns anything static, not the objects

```
class MathUtil{
    static PI = 3.13159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }

    static getDiameter(radius){}

}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MahthUtil.getArea(10));

```
In this case the `static` keyword refers to the methods inside the class and is accessible since we declared `MathUtil`.

Let's have another example

```
class User{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Partick");

console.log(user1.username);
console.log(User.userCount);
```
As you can see we have another example where `userCount` is used by `user` itself not by `user` that's because userCount cannot be accepted by user1 since user1 is just an object however when we call user for userCount then it will respond to the code.

To summarize static variables can only be accessed by its particular class and not the object.


