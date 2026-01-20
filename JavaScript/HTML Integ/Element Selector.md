# Element selectors
These are methods used to target and manipulate HTML elements. They allow you to select one or mulitple HTML elements from the DOM (Document Object Model);

Here we have the different syntax

|     Element Selectors   | Target Elements |
|-------------------|---------------------|
| `document.getElementByID()` | Element or Null |
| `document.getElementClassName()` | HTML Collection |
| `document.getElementsByTagName()` | HTML Collection |
| `document.querySelector()` | Element or Null |
| `document.querySelectorAll()` | Nodelist |

## document.getElementByID
It targets the specific element and manipulate it by defining the id of the element

#### Example
```https
const myHeading = document.getElementByID("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

//As you can see the styling when being accessed through 
the DOM uses camel case while accessing it in css uses a 
hyphenated case (e.g. background-color: )

console.log(myHeading); //It displays the html element with the css styles.

//If we remove the style code lines then the value will become null on the console.
```

## document.getElementsbyClass
This method is used to return an html collection meaning it could be a set of elements. It is somewhat similar to an array but not close to it.

#### index.html
```https
<div class="fruits">Apple</div>
<div class="fruits">Orange</div>
<div class="fruits">Banana</div>
```

#### index.js
```https
const fruits = document.getElementsbyClass(fruits);

console.log(fruits); //It outputs the properties of the div along with each of the content

fruits[0].style.backgroundColor = "yellow"; //changes the background of apple to yellow

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}
//Uses a for each loop to let all of the fruits from the class change the backgroundColor
to yellow

//Since we cannot use a forEach() method methodNow let's try This

Array.from(fruits).forEach( fruit => {
    fruit.style.backgroundColor = "yellow";
})
//creates a new array out of the the class fruits then uses forEach 
with a parameter of fruit. Using the arrow function each fruit will 
change the background color to yellow
```

As you can see asides from the comments mentioned we cannot use `forEach` for the class since it is not an array however we can declare it as a new array by calling the method `Array` then placing the fruits class along with its content typecasting the class.

## document.getElementsByTagName
This targets an HTML collection using a elements but instead of using Id's or tags we will then take in tags of those elements.

#### index.html
```https
<h1 id="my-heading">Food R Us</h1>

<div class="fruits">Apple</div>
<div class="fruits">Orange</div>
<div class="fruits">Banana</div>

<h4>Root Vegetables</h4>
<ul>
  <li>Beets</li>
  <li>Carrots</li>
  <li>Potatoes</li>
</ul>

<h4>Non-Root Vegetables</h4>
<ul>
  <li>Broccoli</li>
  <li>Celery</li>
  <li>Onions</li>
</ul>
```

#### index.js
```https
    const h4Elements = document.getElementByTagName("h4");
    const liElements = document.getElementByTagName("li);

for (let h4Element of h4Elements){
    h4Element.style.backgroundColor = "Yellow"; //Changes the backgroundColor of h4 to yellow
}

for (let liElement of liElements){
    liElements.style.backgroundColor = "lightgreen"; //Changes the backgroundColor of h4 to light green
}
```

**Note**: You can also use the constants to create new new arrays just ike the last example.

## document.querySelector
When used it wil only show and use the first element detected

Reference this example to the `document.getElementByID()` version of the HTML file

```https
const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow" //Changes the backgroundColor of apple
```
The reason why only apple was selected was because the querySelector only chose the first element with the corresponding element/class/id. If there is no element corresponding to the value then it will null

## document.querySelectorAll
This selector is similar to the previous one except this one allows you to choose the element based on the index 

Reference this to the second example

```https
const fruits = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "yellow"; //changes apple backgroundColor to yellow

const foods = document.query.querySelectorAll("li");
foods[1].style.backgroundColor = "yellow"; //changes carrots backgroundColor to yellow
```



