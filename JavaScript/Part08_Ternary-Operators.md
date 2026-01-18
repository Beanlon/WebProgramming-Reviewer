# Ternary Operators
Ternary operators are operators that are jus the shortcut to if-else statements it only requires two symbols which determine the state of a statements.

```https
let var/condition = ? true : false;
```
As you can notice the `?` symbol represents the positive statement meaning if the condition were to followed and `:` if it wasn't.

#### Example
```https
let message = age >= 18? You're in legal age : You're a minor;
```
Based on the condition it shows that if your age is greater or equal to  18 then you are of legal age while you are still a minor if not.

Let's try to write a full code

```https
let isStudent = false;
let message = isStudent ? "You are a student" : "You are not a student";

console.log(message) //Output: You are not a student
```
Since the variable isStudent is false it makes the entire message follow the `:` statement.
