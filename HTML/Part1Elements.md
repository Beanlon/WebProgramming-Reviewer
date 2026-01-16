
# Part 1 - Elements of HTML

The HTML element is everything from the start tag to the end tag:

##### <tagname>Content goes here...</tagname>


#### Examples of some HTML elements:
```http
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```
### 

| Start Tag | Element Content     | End tag               |
| :-------- | :------- | :------------------------- |
| `h1` | `heading` | `</h1>` |
| `p`  | `paragraph` | `</p>` |
| `br` | `break line` | none |


## h1 (heading)

##### The heading has many different types from h1 to h4 depending on the size of the heading 

# header1
## header 2
### header 3
#### header 4
##### header 5

those are examples of how each heading works

## p (paragraph)
Paragraph elements are how we write small statements inside the html file where we are able to have start and end tags.
#### Example
```http
<p> Hi my name is Jeric B. Mata </p>
```

## br (break line)
Now this is in line and related to paragraphs as it allows you to literally break a line of Paragraph.
#### Example
```http
<p> Hi my name is Jeric B. Mata. <br> I like to play sports.
</p>
```
#### Output
```http
Hi my name is Jeric B. Mata
I like to play sports.
```

#### Note: You don't have to use br, you can just also press enter for evey line you make.

## Nested Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

The following example contains four HTML elements (`<html>`, `<body>`, `<h1>` and `<p>)`:

```http
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

To add to the element `<body>` is where you start placing all of the elements in your website that will be visible  

