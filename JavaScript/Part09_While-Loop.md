# While Loop

The `while` loop executes a block of code repeatedly as long as a given condition remains true. The condition is checked before each iteration, and if it evaluates to true, the code block is executed. Once the condition becomes false, the loop terminates, and the program continues with the next line of code.

#### Input 
```https
let i = 0;

while (i < 5) {
  // Code to be executed while the condition is true
  console.log("Iteration:", i); 
  i++;
}
```
#### Output 
```https
Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
```

### Controlling a `While` loop with a boolean
The `condition `in a while loop is evaluated as a boolean expression. It can be any expression that results in a boolean value, such as a comparison or a logical operation. By controlling the loop with a boolean condition, you can customize the looping behavior based on your specific requirements.

#### Example
```https
let isRunning = true;

while (isRunning) {
  let userInput = prompt("Enter 'stop' to terminate the loop: ");
  console.log("User input:", userInput);

  if (userInput === "stop") {
	isRunning = false;
  }
}
```
It will keep running as long as the prompt entered is not the word **"stop"**
and it then has the condition that if the userInput is stop, then isRunning will become false which negates the initial boolean of the variable which will then end the loop.
