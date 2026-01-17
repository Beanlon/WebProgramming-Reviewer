# CSS Syntax
A CSS rule consists of a selector and a declaration block:
![Syntax](/images/Syntax.jpg)
The selector points to the HTML element you want to style.
The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

#### Example
```https
p {
  color: red;
  text-align: center;
}
```

* `p` is a selector in CSS (it points to the HTML element you want to style: `<p>`).
* `color` is a property, and red is the property value
* `text-align` is a property, and center is the property value

## Syntax CSS Selectors
The `element` selector selects HTML elements based on the element name


#### Example
Here, all <p> elements on the page will be center-aligned, with a red text color: 
```https
p {
  color: red;
  text-align: center;
}
```

## The CSS id Selector
The `id` selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

#### Example
The CSS rule below will be applied to the HTML element with id="para1":  
```https
#para1 {
  text-align: center;
  color: red;
}
```
