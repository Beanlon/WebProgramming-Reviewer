# Basic Integration with HTML
Javascript is essential as it is a manipulative programming language used for websites and can be integrated with CSS and HTML

Here are some of the basic keywords for basic functioanilty:

* `document.getElementbyId()` - Used for retrieving a specific element in html
* `.onclick()` - used for specific processes when being interacted

## document.getElementbyID()
When using this property it retrieves the ID of the element being used for which can lead to having functionality and directing it to a specific element

#### Example

```https
<!DOCTYPE html>
<html>
<body>

<h1>My Web Page</h1>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html> 
```

## .onclick()
Onclick is a property that are mostly used on buttons themselves to handle differenet processes based on the function itself.

Using HTML we are going to change a specific text in an element in our `index.html` with the help of our code that we are going to place in `index.js`

#### index.html
```https
<!DOCTYPE html>
<html>
<body>
    <h1 id="myh1">Welcome</h1>
    <label>username: </label>
    <input id="myText"><br><br>
    <button id="mySubmit">submit</button>

    <script src="index.js"></script>
</body>
</html> 
```
#### index.js
```https
let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
```
To explain we retrieve the ID of the button which then follows a process due to the `.onclick` proprety, based on the username entered in the textfield input named `myText` we then proceed retrieve the ID of our `h1` which changes the text from welcom to Hello plus the username entered.


