# Array
The simplest and most common way to create an empty array is using array literal notation. This method involves using a pair of square brackets `[]` with no values inside.
```https
1	let emptyArray = [];
2	
```
In this example, the **emptyArray** variable is initialized with an empty array, which can later be filled with elements as needed.
### Array Constructor
Another way to create an empty array is by using the Array constructor.
```https
1	let emptyArray = new Array();
2	
```
This method achieves the same result as the array literal notation by creating an empty array that can hold elements.

### Declaring and Initializing Arrays with Values
Using Array Literals
You can declare and initialize an array with specific values using array literals, where the values are enclosed in square brackets `[]`.
```https
1	let fruits = ["apple", "banana", "orange"];
2	
```
In the above example, the **fruits** array is initialized with three string elements: "apple," "banana," and "orange."

### Accessing and Manipulating Arrays
Accessing Array Elements
Array elements can be accessed using their index, which starts at 0 for the first element.
```https
1	let firstFruit = fruits[0]; // Accessing the first element, "apple"
2	let secondColor = colors[1]; // Accessing the second element, "green"
3	
```
### Modifying Array Elements
You can modify an array element by assigning a new value to a specific index.
```https
1	fruits[1] = "mango"; // Changing "banana" to "mango"
2	
```
### Array Length
The length property of an array is used to determine the number of elements in the array. This property is especially useful when iterating over arrays or checking if an array is empty.
```https
1	let numberOfFruits = fruits.length; // numberOfFruits will be 3
2	
```
The length property dynamically updates as elements are added to or removed from the array.

### Adding and Removing Elements
You can add elements to the end of an array using the push method and remove elements using the pop method.
```https
1	fruits.push("grape"); // Adds "grape" to the end of the array
2	let lastFruit = fruits.pop(); // Removes and returns the last element, "grape"
3	
```

## Two-Dimensional Arrays (2D Arrays or Matrices)
A two-dimensional array, also known as a matrix, is an array of arrays. It is used to represent grid-like structures or tables where each element is itself an array.

### Creating a 2D Array
You can create a 2D array using nested array literals.
```https
1	let matrix = [
2	  [1, 2, 3],
3	  [4, 5, 6],
4	  [7, 8, 9]
5	];
6	
```

### Iterating Over a 2D Array
You can use nested loops to iterate over each element in a 2D array.
#### index.html
```https
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
	console.log(matrix[i][j]);
  }
}
```

In the above example, matrix is a 3x3 grid where each sub-array represents a row.
