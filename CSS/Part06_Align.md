# CSS Align
With CSS, you can center elements (horizontally, vertically, or both) with several methods, depending on the type of element.

### Center Align Block elements
Use `margin: auto;`, to horizontally center a block-level element (like <div>).

Also specify a `width` for the element, to prevent it from stretching out to the edges of its container.

**Note**: Center aligning has no effect on block-level elements if the `width` property is not set (or set to 100%).

Below, the <div> element is centered and has a width of 50% (and the remaining space will be split equally between the left and right margins):

#### Example
```https
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
```

### Center Align Text
To center the text inside a block-level element, use `text-align: center;.`

#### Example
```https
p {
  text-align: center;
}
```

### Center Align an Image
To center an image, set `margin-left` and `margin-right` to auto, and also turn the image into a block element:

#### Example
```https
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
```
