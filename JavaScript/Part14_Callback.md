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
 
