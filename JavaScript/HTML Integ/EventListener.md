# Event Listener
Listen for specific events to create itneractive web pages

We have different events

* `click` - When the element is clicked
* `mouseover` - When the mouse or arrow hovers over the element

## Click event
Using this allows you to change or use callback or anonymous or an arrow function and an event type 


#### index.html
```https
    <div id="myBox">
        Click Me
    </div>
```
#### index.js
```htts
const myBox = document.getElementById("myBox");

function changeColor(event){
  event.target.style.backgroundColor = "tomato"; //Changes color to tomato
  event.target.textContent = "Ouch!"; //Changes the textContent to ouch
}

myBox.addEventListener("click", changeColor); 
```
As you can see after we get the id of the box we then create a function to change the background color and text content. The parameter `event` is an object which is provided automatically by the web browser. Now we use `.event` object then the `.target` which is what was clicked. The element we  We then use the `myBox` element and added a `.addEventListener` method which consists of an event and a callback, in this case we call the `changeColor` function so that when we click that element it changes its content.

Now lets pass in a function in the event listener

```https
myBox.addEventListener("click", function(event){
    event.target.styke.backgroundColor = "tomato";
    event.target.textContent = "Ouch!";
}); 
```
Or we can use arrow functions

```https
myBox.addEventListener("click", event => {
    event.target.styke.backgroundColor = "tomato";
    event.target.textContent = "Ouch!";
}); 
