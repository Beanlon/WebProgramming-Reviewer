# Comparison Operators
Comparison operators are used in JavaScript to compare values and determine their relationship. They allow us to compare variables, constants, or expressions to make decisions based on the result of the comparison.

## Equality Operators
The equality operators are used to compare two values for equality. There are two types of equality operators in JavaScript:

* `Strict Equality Operator (===)`: This operator checks if the values being compared are of the same type and have the same value.

#### Example
```https
let num1 = 5;
let num2 = "5";
let comparison = (num1 === num2);
console.log(comparison); // Output: false
```

In the above example, the strict equality operator (===) compares the value 5 in num1 with the string "5" in num2. Since the types are different, the result is false.

* `Loose Equality Operator (==)`: This operator performs type coercion, meaning it converts the values being compared to a common type before making the comparison.

#### Example
```https
let num1 = 5;
let num2 = "5";
let comparison = (num1 == num2);
console.log(comparison); // Output: true
```
In the above example, the loose equality operator (==) converts the string "5" in num2 to a number before making the comparison. The result is true because both operands have the same numeric value.

It's generally recommended to use the strict equality operator (===) to avoid unexpected results due to type coercion.

## Inequality Operators
The inequality operators are used to compare two values for inequality. There are two types of inequality operators in JavaScript:

* `Strict Inequality Operator (!==)`: This operator checks if the values being compared are of different types or have different values.


#### Example
```https
let num1 = 5;
let num2 = "5";
let comparison = (num1 !== num2);
console.log(comparison); // Output: true
```
In the above example, the strict inequality operator (!==) compares the value 5 in num1 with the string "5" in num2. Since the types are different, the result is true.

* `Loose Inequality Operator (!=)`: This operator performs type coercion, meaning it converts the values being compared to a common type before making the comparison.


#### Example
```https
let num1 = 5;
let num2 = "5";
let comparison = (num1 != num2);
console.log(comparison); // Output: false
```

In the above example, the loose inequality operator (!=) converts the string "5" in num2 to a number before making the comparison. The result is false because both operands have the same numeric value.

Just like with equality operators, it's generally recommended to use the strict inequality operator (!==) to avoid unexpected results due to type coercion.


## Other Comparison Operators
JavaScript also provides other comparison operators to compare values based on their relationship:

* `Greater Than Operator (>) and Greater Than or Equal Operator (>=)`: These operators compare whether one value is greater than or greater than or equal to another value.
#### Example
```https
let num1 = 10;
let num2 = 5;
let firstComparison = (num1 > num2);
let secondComparison = (num1 >= num2);
console.log(firstComparison); // Output: true
console.log(secondComparison); // Output: true
```
* `Less Than Operator (<) and Less Than or Equal Operator (<=)`: These operators compare whether one value is less than or less than or equal to another value.
```https
let num1 = 10;
let num2 = 5;
let firstComparison = (num1 < num2);
let secondComparison = (num1 <= num2);
console.log(firstComparison); // Output: false
console.log(secondComparison); // Output: false
```
