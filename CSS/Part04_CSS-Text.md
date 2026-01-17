# CSS Fonts 
Text styling is an important aspect of web design. CSS offers a wide range of properties and values to control the appearance of text, allowing you to customize sizes, weights, colors, alignments, and more. By using these properties, you can create visually appealing and engaging text content on your web pages.

## Font Styles
The **font-size** property is used to specify the size of the text. You can use different units of measurement such as pixels, percentages, or ems. Here's an example:
```https
1	p {
2	  font-size: 24px; /* Size in pixels */
3	  font-size: 100%; /* Size as a percentage */
4	  font-size: 2em;  /* Size relative to the parent element's font size */
5	}
6	
```
The above example sets the font size of `<p>` elements to the specified size.

## Font Weight
The **font-weight** property allows you to specify the thickness or boldness of the text. You can use values like normal, bold, or numeric values such as 200 or 700, with a minimum value of 100 and a maximum value of 900. The default value of font-weight is 400 for normal text. Here's an example:
```https
1	p {
2	  font-weight: bold; /* Bold text */
3	}
4	
5	/* or */
6	
7	p {
8	  font-weight: 300; /* Lighter text */
9	}
10	
```
The first example above sets the font weight of `<p>` elements to bold, while the second example sets the font weight to a lighter value.

## Text Color
The **color** property is used to specify the color of the text. You can use color names, hexadecimal values, or RGB values. Here's an example:

```https
1	p {
2	  color: #FF0000; /* Hexadecimal color */
3	}
4	
5	/* or */
6	
7	p {
8	  color: red; /* Named color */
9	}
10	
```
The above example sets the text color of `<p>` elements to red.

## Text Alignment
The **text-align property** is used to specify the horizontal alignment of the text within its container. You can use values like left, right, center, or justify. Here's an example:
```https
1	p {
2	  text-align: center;
3	}
4	
```
The above example centers the text within `<p>` elements.

## Text Decoration
The **text-decoration** property is used to add decorative styling to text, such as underlines, overlines, or line-through. Here's an example:
```https
1	a {
2	  text-decoration: underline;
3	}
4	
```
The above example adds underlines to all anchor `<a>` elements.

## Text Transformation
The **text-transform** property is used to control the capitalization of text. You can use values like uppercase, lowercase, or capitalize. Here's an example:
```https
1	p {
2	  text-transform: uppercase;
3	}
4	
```
The above example converts all text within `<p>` elements to uppercase letters.

## Diagram

#### index.tml
```https
<!DOCTYPE html>
<html>
<head>
  <title>CSS Text Styling Properties</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Some paragraph text.</p>
</body>
</html>
```
#### styles.css
```https
p {
  font-size: 24px;
  font-weight: bold;
  color: #FF0000;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```
