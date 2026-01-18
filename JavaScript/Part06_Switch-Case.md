# Switch Statements
The switch statement starts with the keyword `switch` followed by an expression in parentheses. This expression is evaluated, and its value is compared against multiple case values inside the switch statement. If a match is found, the corresponding code block is executed.

#### Example
```https
1	switch (expression) {
2	    //code blocks
3	}
4	
```

### Adding Case Statements
The case statements inside the switch statement represent the different possible values that the expression can have. When a case value matches the expression value, the corresponding code block is executed. Each case block is followed by the break statement, which is used to exit the switch statement and prevent execution of the subsequent case blocks.

#### Example
```https
let day = "Wednesday";

switch (day) {
  case "Monday":
	console.log("It's Monday!");
	break;
  case "Tuesday":
	console.log("It's Tuesday!");
	break;
  case "Wednesday":
	console.log("It's Wednesday!");
	break;
}
```

### Using Default Case
The default case in a switch statement is optional but useful when we want to handle situations when none of the cases match the expression value. If none of the cases match, the code block inside the default case will be executed. It provides a fallback option when there is no specific match found.

#### Example
```https
let fruit = prompt("Enter a fruit:");
switch (fruit) {
  case "apple":
	console.log("It's an apple!");
	break;
  case "orange":
	console.log("It's an orange!");
	break;
  default:
	console.log("It's an unknown fruit!");
	break;
}
```
