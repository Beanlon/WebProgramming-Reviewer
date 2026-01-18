# If-else statements
## Using if elements
The `if` statement is used to perform conditional execution of code. It evaluates a condition and executes the associated code block only if the condition is true. Here's the basic syntax of an `if` statement:

```https
1	if (condition) {
2	  // Code block to be executed if the condition is true
3	}
4	
```
Here's an example of using the `if` statement:
```https
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

## Adding else Statements
We can extend the functionality of if statements by adding an else statement. The else statement allows us to specify a block of code to be executed when the if condition is false. Here's the basic syntax of an if-else statement:
```https
1	if (condition) {
2	  // Code block to be executed if the condition is true
3	} else {
4	  // Code block to be executed if the condition is false
5	}
6	
```
Here's an example of using the if-else statement with user input:
```https
let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
```

## Adding else if Statements
In addition to if and else, we can use else if statements to specify additional conditions to be checked. This allows us to define multiple branches of execution based on different conditions. Here's the basic syntax of an if-else if-else statement:

```https
1	if (condition1) {
2	  // Code block to be executed if condition1 is true
3	} else if (condition2) {
4	  // Code block to be executed if condition2 is true
5	} else {
6	  // Code block to be executed if all other conditions are false
7	}
8	
```
#### Example
```https
let age = prompt("Enter your age:");

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 30) {
  console.log("You are a young adult.");
} else {
  console.log("You are an adult.");
}
```

## Nested if Statements
We can also nest if statements within other if statements to create more complex conditions and execution paths. This allows us to check for multiple conditions in a hierarchical manner. Here's an example of nested if statements:

#### Example
```https
let num = prompt("Enter a number:");

if (num > 0) {
  if (num % 2 === 0) {
	console.log("The number is positive and even.");
  } else {
	console.log("The number is positive but not even.");
  }
} else {
  console.log("The number is not positive.");
}
```

## Working with Strings and Characters
JavaScript provides several methods for working with strings and characters. These methods are essential when you need to compare strings, check their lengths, or manipulate individual characters.

### String Comparisons
String comparisons are commonly used in conditional statements to determine if two strings are equal, or to check if a string contains a certain character or substring.
```https
let str1 = "Hello";
let str2 = "hello";

if (str1 === str2) {
  console.log("The strings are identical.");
} else {
  console.log("The strings are different.");
}
```

### Handling Characters
JavaScript strings are essentially arrays of characters, so you can access individual characters using bracket notation or the charAt method.

```https
let text = "JavaScript";
let firstChar = text[0]; // Accessing first character using bracket notation
let lastChar = text.charAt(text.length - 1); // Accessing last character using charAt

console.log(`First character: ${firstChar}, Last character: ${lastChar}`);
```

In this example, the first and last characters of the string are accessed and displayed.

### String Methods
JavaScript offers a variety of string methods that allow you to manipulate and analyze strings:

* `toUpperCase()`: Converts a string to uppercase letters.
* `toLowerCase()`: Converts a string to lowercase letters.
* `includes()`: Checks if a string contains a specified substring.
* `indexOf()`: Returns the position of the first occurrence of a specified value in a string.
* `substring()`: Extracts a part of a string between two specified indices.
* `charAt()`: Returns the character at a specified index in a string.
* `trim()`: Removes whitespace from both ends of a string.
* `replace()`: Replaces a specified value with another value in a string.
