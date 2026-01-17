# Attributes
HTML attributes provide additional information about HTML elements.

* All HTML elements can have **attributes**
* Attributes provide **additional information** about elements
* Attributes are always specified in the **start tag**
* Attributes usually come in name/value pairs like: **name="value"**

## The href attribute / LINK
The `<a>` tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

#### Example
```https
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

## The src attribute / image
The `<img>` tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

#### Example
```https
<img src="img_girl.jpg">
```

## Alt attribute
The required alt attribute for the `<img>` tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.

#### Example
```https
<img src="img_girl.jpg" alt="Girl with a jacket">
```

## The class attribute 
The `class` attribute is often used to point to a class name in a style sheet. It can also be used by JavaScript to access and manipulate elements with the specific class name.

In the following example we have three `<div>` elements with a class attribute with the value of "city". All of the three `<div>` elements will be styled equally according to the `.city` style definition in the head section:

#### Example
```https
<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>
```

## Id attribute
The HTML `id` attribute is used to specify a unique id for an HTML element.
You cannot have more than one element with the same id in an HTML document.

The `id` attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.

In the following example we have an `<h1>` element that points to the id name `"myHeader".` This `<h1>` element will be styled according to the #myHeader style definition in the head section:

#### Example
```https
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
```

## Difference Between Class and ID
A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:

### Example
```https
<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
```
