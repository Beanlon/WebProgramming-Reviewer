# Callback
A function that is used to pass as an argument to another function

#### index.js 
```https
hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}
function goodbye(){
    console.log("Goodbye");
}
```
#### Output 
```https
Hello
Goodbye
```
In this scenario the callback was used as a parameter to be called within the function hello after the first output was printed which then led to the callback doing its own process. In this case the callback was referring to the function goodbye making it output the text Goodbye.

Ill give you another Example

#### index.js 
```https
sum(displayConsole, 1, 2);

function sum (callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}
//Output: 3
```
According to the code snippet it shows that the callback that is being refered to is the displayConsole function which tends to print out the result after the two values 1 and 2 are added. This is basically a long version of how to output added values
 
## forEach()
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
```
## Map method
The map method accepts a callback and applies a function to each element to an array, however what makes this different is that it **returns a new array**

```
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares); //Output: [1, 4, 9, 16, 25]

function square(element){
    return Math.pow(element, 2);
}
```
What this shows is that the `map()` method is used to check throughout the whole array, it then uses a function as its parameter which is the `square` function that returns each element being squared to itself.

## Filter
It creates a new array by filtering out elements based on the user's specification

```https
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log(evenNums); //Output: [2, 4, 6]

function isEven(element){
    return element % 2 === 0
}
```
According to the code snippet `.filter` is used to add elements particular to the callback function. In this case the callback function checks whether or not the element is even.

## Reduce 
Reduces the elements of an array to a single value 
#### Example
```
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum (accumulator, element) {
    return accumulator + element;
}
```
The `.reduce` is used to remove any other elements, in this case .reduce calls a callback function named `sum` which takes parameters such as `accumulator` and `element` which are added and returned whatever value will be returned will become the new accumulator with the next element to be what comes after. 

#### Example
```
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
```
This code snippet uses `.reduce` to iterate over the entire array using `getMax` as its callback. the function getmax is used to compare whether the accumulator or the element is larger, whatever number is returned will be the new accumulator.

## Function Expresson
These are ways to define functions as values or variables

```https
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2)
});
```
As you can notice a function has been place as a value inside the `.map` method, this make it easier and more efficient as it is only called once. 
