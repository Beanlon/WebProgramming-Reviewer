# CSS Box Model



#### Content of the Box Model

#### Content
The content is just what you see on the screen - it could be text, images, buttons, etc. We surround this content with padding, border, and margin to control how it looks and where it sits on the webpage.

#### Padding
Padding is like the bubble wrap around an item we're shipping. It's the space between the item (the content) and the walls of the box (the border). Padding makes sure your content doesn't touch the borders directly, giving it some room to breathe.

To add padding to an element, you can use the CSS padding property. Here's an example:

```https
1	.example {
2	  padding: 10px; /* sets equal padding for all sides */
3	  padding-top: 20px; /* sets specific padding for the top side */
4	  padding-left: 15px; /* sets specific padding for the left side */
5	}
6	
```

#### Margin
The margin is like the space around the outside of our shipping box. It's the space between the border and other elements on the page.

To add margin to an element, you can use the CSS margin property. This property allows you to control the spacing around an element by specifying values for different sides or using shorthand notation. Here's an example:


```https
1	.example {
2	  margin: 10px; /* sets equal margin for all sides */
3	  margin-top: 20px; /* sets specific margin for the top side */
4	  margin-right: 15px; /* sets specific margin for the right side */
5	}
6	
```

In addition to the above options, CSS also provides a special value for the **margin** property called **auto**. When you set **margin: auto;** on a block-level element, it automatically calculates and distributes the margins evenly, centering the element horizontally within its parent container. This can be useful for creating centered layouts.

Here's an example of using **margin: auto;:**

#### Index.html
```https
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class="centered-box">This box is centered.</div>
</body>
</html>
```

#### CSS.html
```https
.centered-box {
  width: 200px;
  height: 200px;
  margin: auto;
}
```

### Controlling Weight and height
The width and height properties let you decide how big your box (including content, padding, border, margin) should be. You can set them in absolute values (like pixels) or relative values (like percentages of the size of their parent element).

#### Example
```https
1	.example {
2	  width: 200px; /* sets the width to 200 pixels */
3	  height: 150px; /* sets the height to 150 pixels */
4	  width: 50%; /* sets the width to 50% of the parent element */
5	  height: 25vh; /* sets the height to 25% of the viewport height */
6	  /* viewport height represents the height of the visible portion of the web page */
7	}
8	

```
## CSS Box Model
![Box Model](BoxModel.jpg)

### Margin Collapse
Sometimes, when you have two boxes one below another, the space between them isn't what you'd expect. That's because of margin collapse: the larger margin between them is used, and the smaller one is ignored. Keep this in mind when you're spacing out your elements.

![MarginCollapse](/images/MarginCollapse.jpg)

### Diagram: CSS Box Model
To demonstrate the CSS Box Model, let's create an HTML and a CSS file. Our HTML file will have a simple structure with a div that contains a paragraph.

#### Index.html
```https
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class="box-model">
		<p>This is the content.</p>
	</div>
</body>
</html>
```

#### CSS.html
```https
.box-model {
	width: 200px;
	height: 150px;
	padding: 10px;
	margin: 20px;
	box-sizing: border-box;
}

.box-model p {
  margin: 0;
}
```
