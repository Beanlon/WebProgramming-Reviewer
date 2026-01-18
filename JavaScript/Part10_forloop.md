# For Loop
A basic for loop consists of three parts: the **initialization**, the **condition**, and the **increment/decrement**. All these parts are enclosed within the parentheses after the for keyword, followed by a block of code inside curly braces {}.

#### Example
```https
1	for (initialization; condition; increment/decrement) {
2	    // Code to be executed
3	}
4	
```

1. **Initialization**: This part runs once at the beginning of the loop and is typically used to define and initialize a counter variable `(e.g., let i = 0)`.
2. **Condition**: This part is checked before every iteration. The loop will continue to run as long as this condition evaluates to true.
3. **Increment/Decrement**: This part is executed at the end of every iteration, usually used to update the counter variable `(e.g., i++ or i--)`.

### Example: Counting from 0 to 9
```https
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```
Explanation:

* **Initialization**: `let i = 0` initializes the counter variable i to 0.
* **Condition**: `i < 10` checks if i is less than 10. If true, the loop runs.
* **Increment**: `i++` increments the counter by 1 after every iteration.
* The loop runs until i reaches 10, at which point the condition `i < 10` becomes false, and the loop stops.
#### Output:

```https
0
1
2
3
4
5
6
7
8
9
```

## Variation of `for` loops
### 1. Reverse for Loop
You can use a `for` loop to iterate in **reverse** order by starting from a larger number and decrementing the counter variable.

#### Example: Counting from 10 to 0
```https
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
```
#### Output:
```https
10
9
8
7
6
5
4
3
2
1
```

### 2. Skipping Iterations
You can use the `continue` statement inside a `for` loop to skip specific iterations. This is useful when you want to avoid executing the loop for certain conditions.

#### Example: Skipping even numbers
```https
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue;  // Skip this iteration if the number is even
	}
	console.log(i);
}
```
#### Output:
```https
1
3
5
7
9
```
### 3. Breaking Out of a for Loop
You can use the `break` statement to exit the loop prematurely when a certain condition is met.

#### Example: Stopping the loop when a specific value is reached
```https
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break;  // Stop the loop when i equals 5
	}
	console.log(i);
}
```
#### Output
```https
0
1
2
3
4
```

### Iterating Over Arrays with for Loops
Arrays are a fundamental part of JavaScript, and for loops are often used to iterate through array elements.

#### Example: Printing array elements
```https
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
```
#### Explanation:

The loop runs from `i = 0` to `i < fruits.length`, which ensures it covers all elements of the array.
The loop prints each element by accessing `fruits[i]`.

#### Output:
```https
1	Apple
2	Banana
3	Orange
4	Mango
```

### Nested for Loops
You can place one for loop inside another, called a nested loop. Nested loops are often used to work with multi-dimensional arrays (matrices) or to perform operations where each iteration of the outer loop triggers multiple iterations of the inner loop.

#### Example: Multiplication table using nested loops
```https
for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= 5; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}
```
#### Output
```https
1	1 * 1 = 1
2	1 * 2 = 2
3	1 * 3 = 3
4	1 * 4 = 4
5	1 * 5 = 5
6	2 * 1 = 2
7	...
8	5 * 4 = 20
9	5 * 5 = 25
10	
```

### Iterating Over Arrays with for...of Loops
The `for...of` loop is designed specifically for iterating over iterable objects like arrays, strings, maps, and sets. It simplifies iterating over arrays compared to a standard `for` loop.

#### Example: Using for...of to iterate over an array
```https
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

for (let fruit of fruits) {
	console.log(fruit);
}
```
#### Output
```https
1	Apple
2	Banana
3	Orange
4	Mango
5	
```
