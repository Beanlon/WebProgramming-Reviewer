# forEach()
It is a method used to iterate over the elements of an array and apply a specified function (callback) to each elements, the `element`, `index`, `array` are provided

It's format looks like this
```https
array.forEach(callback);
```
Let me give you another example.
#### index.js
```https
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double (element, index, array){
    array[index] = element * 2;
}

function display (element) {
    console.log(element);
}
```
#### Output
```https 
2, 4, 6, 8, 10

