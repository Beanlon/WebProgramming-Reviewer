# Functions
Functions are blocks of resuable code and are called when needed. This is comparable to methods from other languages.
#### Example
```https
function Greetings() {
      console.log("Good Morning!");
}
Greetings();

//Output: Good Morning!
```
This is an example of a non-parameterized function
## Functions w parameters
Functions with parameters are functions that require parameters to make sure that the function works
#### Example
```https
function Greetings(name, day) {
      console.log("Good Morning ${name}.");
      console.log("Today is {day}.");
}
Greetings(Jeric, Monday);

//Output: Good Morning Jeric.
          Today is Monday.
```
As you can see the Greetings function require two parameters which are `name` and `day` which is used as placeholders inside the statements. And when being called the values being passed unto the parameters are the values `Jeric` and `Monday`, so when the function is called it prints along with their values.

## Function w return statements
Function with return statements usually retrieves specific values/results depending on what was set to be returned.

#### Example
```https
function add(x, y) {
    let sum = x + y;
    return sum;
}

console.log("The sum is " + add(3,5)); //Output: The sum is 8
```
As you can see the console log immediately has the function add with 3 and 5 as the values and now they are going to be added with the variable named sum and then returns meaning that the answer is going to be returned and be displayed immediately. 

## Variable Scope 
This refers to how the variables are being processed by a specific function and how they work within a particular function.

There  are two types of variables:
* `Global variable` - Global variables are accessible to any of the functions when they are called, these variables are outside any variable making them accessible.
#### Example
```https
let x = 3;

function1(); //Output: 3
function2(); //Output: 3

function function1() {
    console.log(x)
}

function function2() {
    console.log(x)
}

```

* `Local variable` - Local variables are only accessible within their particular functions and cannot be accessed outside or from another function.
#### Example
```https
function1(); //Output: 3
function2(); //Output: This will cause an error 

function function1() {
    let x = 3;
    console.log(x)
}

function function2() {
    console.log(x)
}
```

