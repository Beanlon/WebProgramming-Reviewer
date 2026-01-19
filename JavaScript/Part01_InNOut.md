# Input & Output
The input and output are done using the keyword `prompt` or just `readLine` for allowing input in the program

#### Input
```https
let name = readLine("Please enter your name:");
```
#### Output
```https
Please enter your name: Jeric
```


## Handling Numerical Values
When handling numbers in Javascript make sure to always add the keyword `Number` on it before typing in the prompt

#### Input
```https
let age = readLine("Please enter your age:");
```
#### Output
```https
Please enter your age: 19
```

But when handling `float` make sure to use `parseFloat` instead

#### Example
```https
let weight = parseFloat(readLine("Please enter your weight:"));
```
#### Output
```https
Please enter your weight: 65.50
```

## Outputting 
When outputting values make sure to use `console.log`.
#### Input
```https
let output = console.log("Hello my name is Jeric");
```
#### Output
```https
Hello my name is Jeric
```
## Outputting with Values
When outputting values make sure to use `${}` when you already have your input and need it to be displayed
#### Input
```https
let output = console.log(`Hi ${name}`);
```
#### Output
```https
Hi Jeric
```
If your output is a numerical value with decimals make sure to add a fixed decimal place and use `.toFixed`
#### Input
```https
let output = console.log(`The price is ${price.toFixed(2)} pesos.`);
```
#### Output
```https
The price is 100.00 pesos.
```
