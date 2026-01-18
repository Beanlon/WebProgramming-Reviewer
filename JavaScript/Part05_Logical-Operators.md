# JavaScript Logical Operator
Logical operators are used in JavaScript to combine conditions and perform logical operations. They allow you to create complex conditions by combining multiple expressions. JavaScript provides three logical operators: && (AND), || (OR), and ! (NOT). Understanding how to use these operators is essential for writing conditional statements and controlling the flow of your code.

## AND Operator (&&)
The AND operator `(&&)` returns `true` if both operands are `true`. Otherwise, it returns `false`. It evaluates the operands from left to right and stops evaluating as soon as it encounters a false value.

#### Example
```https
let num1 = 5;
let num2 = 10;
let result = (num1 < 10 && num2 > 5);
console.log(result); // Output: true
```
In the above example, the expression `(num1 < 10 && num2 > 5)` evaluates to true because both conditions are true: `num1` is less than 10 and `num2` is greater than 5.

## OR (||) Operator
The OR operator `(||)` returns true if at least one of the operands is `true`. If both operands are `false`, it returns `false`. It evaluates the operands from left to right and stops evaluating as soon as it encounters a true value.

#### Example
```https
let num1 = 5;
let num2 = 10;
let result = (num1 > 10 || num2 < 5);
console.log(result); // Output: false
```

In the above example, the expression `(num1 > 10 || num2 < 5)` evaluates to false because both conditions are false: num1 is not greater than 10 and num2 is not less than 5.

## NOT (!) Operator
The NOT operator `(!)` is a unary operator that returns the `opposite` of the operand's boolean value. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

#### Example
```https
let isLogged = false;
let result = !isLogged;
console.log(result); // Output: true
```
In the above example, the expression `!isLogged` returns true because the value of isLogged is false.
