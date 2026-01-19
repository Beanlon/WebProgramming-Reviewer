# Arrow Function 
A concise way to write function expressions good for simple functions that you use only once 

The format looks like this
`(parameters) => code`

#### Example
```https 
const hello = function(){
  console.log("Hello");
}

//Now let's turn it like this

const hello = (name, age) => {console.log(`Hello${name}`)
                              console.log(`You aer ${age} years old`)};
hello("Bro", 25);

//Output: Hello Bro
          You are 25 years old
```
As you can see the Arrow functions are used by declaring the parameters along with the arrow leading to the function itself

Here's another Example
```https
setTimeout(hello, 3000);

function hello (){
    console.log("Hello);
}
```
Now let's turn this into a function expression
```https
setTimeout(function hello (){
    console.log("Hello);
},3000);

```

**Or** we can use the arrow functions
```https
setTimeout( () => console.log("Hello"), 3000);
```

Now let's use arrow functions with `map` and `reduce`
```https
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => element % 2 == 0);
const total = number.reduce((accumulator, element) => accumulator + element);

console.log(squares); //Output: 1, 4, 9, 16, 25, 36
console.log(cubes); //Output: 1, 8, 27, 64, 125, 216
console.log(even); //Output: 2, 4, 6
console.log(total) //Output: 21
```

**Note**: Use `()` when you have zero or two or more parameters and for the body but you can also put one, if you have only olne variable use `{}` whe you have two or more statements as shown in the first example or when you are explicitely using `return` statements. 
