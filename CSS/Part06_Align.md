# CSS Alignment and Formatting
With CSS, you can center elements (horizontally, vertically, or both) with several methods, depending on the type of element.

### Text Alignment
The `text-align` property is used to set the horizontal alignment of a text

This property can have one of the following values"
  * `left` - Aligns text to the left
  * `right` - Aligns text to the right
  * `center` - Aligns text to the center
  * `justify` -  Stretches the lines so that each line has equal width

#### Example
```https
p {
  text-align: center;
}
```
### Justify Content
The `justify-content` property aligns the flexible container's items when the items do not use all available space on the main-axis `(horizontally)`.

**Tip**: Use the `align-items` property to align the items vertically.

**Note**: The `justify-content` property can also be used on a grid container to align grid items in the inline direction. For pages in English, inline direction is left to right and block direction is downward.

This property can have one of the following values"
  * `flex-start` - Aligns text to the left/start
  * `flex-end` - Aligns text to the right/end
  * `center` - Aligns text to the center
  * `space-between` -  Creates a space between the two elements

#### Example
```https
nav {
  justify-content: space-between;
}
```

### Align Items
The align-items property specifies the default alignment for items inside a flexbox or grid container.

* In a flexbox container, the flexbox items are aligned on the cross axis, which is vertical by default (opposite of flex-direction).
* In a grid container, the grid items are aligned in the block direction. For pages in English, block direction is downward and inline direction is left to right.

This property can have one of the following values"
  * `flex-start` - Aligns text to the left/start
  * `flex-end` - Aligns text to the right/end
  * `center` - Aligns text to the center
  * `stretch` -  Occupies the entire block or div

#### Example
```https
nav {
  align-items: center;
}
```
