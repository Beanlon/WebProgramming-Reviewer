# Map method
The map method accepts a callback and applies a function to each element to an array, however what makes this different is that it returns a new array

```
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares); //Output: [1, 4, 9, 16, 25]

function square(element){
    return Math.pow(element, 2);
}
```
What this shows is that the `map()` method is used to check throughout the whole array, it then uses a function as its parameter which is the `square` function that returns each element being squared to itself.
