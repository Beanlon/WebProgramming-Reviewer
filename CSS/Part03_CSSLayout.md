# CSS Layouts
Layout is a fundamental aspect of web design. By understanding CSS layout principles and using appropriate display properties, you can design visually pleasing and user-friendly web pages.

## Creating Layouts with CSS
CSS provides several methods for creating layouts. The common techniques include:

### Flex
Flexbox is a robust CSS layout model offering flexible layout options. It easily arranges elements in a row or column, controls their alignment, and manages wrapping and spacing.

![Flexbox](/images/Flex.jpg)

#### index.html
```https
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class="flex-container">
	  <div class="flex-child">Box 1</div>
	  <div class="flex-child">Box 2</div>
	</div>
</body>
</html>
```
#### styles.css
```https
/*
This part of the CSS file is styling the .flex-container class. 
It sets the width and height of the container to 200 pixels and 
surrounds it with a border that is 1 pixel wide and solid.
*/

.flex-container {
  display: flex;
  width: 200px;
  height: 200px;
  border: 1px solid;
}
```

### CSS Grid
CSS Grid is a two-dimensional layout system for creating complex grid-based layouts. It defines both rows and columns, controls their sizes, and positions elements within the grid cells.

![Grid](/images/Gridbox.jpg)

#### index.html
```https
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<div class="grid-container">
	  <div class="grid-child">Box 1</div>
	  <div class="grid-child">Box 2</div>
	</div>
</body>
</html>
```
#### styles.css
```https
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  width: 200px;
  height: 200px;
  border: 1px solid;
}
```



