# CSS Flex Container Properties
The flex container element can have the following properties:

* `display` - Must be set to `flex` or `inline-flex`
* `flex-direction` - Sets the display-direction of flex items
* `flex-wrap` - Specifies whether the flex items should wrap or not
* `flex-flow` - Shorthand property for flex-direction and flex-wrap
* `justify-content` - Aligns the flex items when they do not use all available space on the main-axis (horizontally)
* `align-items` - Aligns the flex items when they do not use all available space on the cross-axis (vertically)
* `align-content` - Aligns the flex lines when there is extra space in the cross axis and flex items wrap
 
### CSS flex-direction Property
The `flex-direction` property specifies the display-direction of flex items in the flex container.

This property can have one of the following values:

* `row` (default)
* `column`
* `row-reverse`
* `column-reverse`

#### Example
The `row` value is the default value, and it displays the flex items horizontally (from left to right):

```https
.flex-container {
  display: flex;
  flex-direction: row;
}
```
#### Example
The `column` value displays the flex items horizontally (from left to right):

```https
.flex-container {
  display: flex;
  flex-direction: column;
}
```
#### Example
The `row-reverse` value displays the flex items horizontally (but from right to left):

```https
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```
#### Example
The `column-reverse` value displays the flex items vertically (but from bottom to top):

```https
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```
## CSS flex-wrap Property
The `flex-wrap` property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

This property can have one of the following values:

* nowrap (default)
* wrap
* wrap-reverse
#### Example
The `nowrap` value specifies that the flex items will not wrap (this is default):
```https
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```
#### Example
The `wrap` value specifies that the flex items will wrap if necessary:
```https
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```
#### Example
The `wrap-reverse`  value specifies that the flex items will wrap if necessary, in reverse order:
```https
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
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
