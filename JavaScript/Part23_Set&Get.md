# Setters and Getters
Setters and getters are methdos used to maken properties or attributes readable writable

* `Setters` - Uses `set` keyword to place the value of the object inside the class

* `Getters` - Uses `get` keyword to take the value of the object from the class and use it 

#### Example
```https
class Rectangle {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // setter
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be greater than 0");
    }
  }

  // getter
  get width() {
    return this._width;
  }

  // setter
  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("Height must be greater than 0");
    }
  }

  // getter
  get height() {
    return this._height;
  }

  // getter (computed)
  get area() {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 5);

console.log(rect.width);   // 10
console.log(rect.height);  // 5
console.log(rect.area);    // 50


```
As you can see, we start by creating the class `Rectangle`. When we create an object named `rect`, we pass the width and height values to the constructor. Inside the constructor, the values are assigned using `this.width` and `this.height`, which triggers the setters. The setters validate the values and store them in `_width` and `_height`.

When we later access `rect.width` and `rect.height`, the getters are called, which return the stored values from `_width` and `_height`. These returned values are then displayed. The area is computed using a getter that multiplies the width and height.

