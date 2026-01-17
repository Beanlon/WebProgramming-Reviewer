# Lists
Lists are also essential in HTML strucutre as it allows us to show a list of content usful for our websites

## Ordered Lists
Ordered lists are lists in html that shows an order of numbers along with their conents it uses `<ol>` and `</ol>` as their tags  the list.

**Note**: All of the types of list uses `<li>` and `</li>` on each of the content inside the list

#### Example 

```https
<ol>
    <li><p>First part</p></li>
    <li><p>Second part</p></li>
    <li><p>Third part</p></li>
</ol>
```
#### Output
```https
1. First part
2. Second part
3. Third Part
```

## Unordered Lists
Ordered lists are lists in html that shows an order of numbers along with their conents it uses `<ol>` and `</ol>` as their tags per content on the list

#### Example 

```https
<ul>
    <li><p>First part</p></li>
    <li><p>Second part</p></li>
    <li><p>Third part</p></li>
</ul>
```
#### Output

```text
• First part
• Second part
• Third part
```

## Nested Lists
Nested lists are lists that are usually more indented and more detailed with bullets that are also inside bullets and so on.

```https
<ol>
  <li>First item</li>
  <li>Second item
    <ul>
        <li>Nested item 1</li>
        <li>Nested item 2</li>
    </ul>
   </li>
  <li>Third item</li>
</ol>
```

#### Output
```text
1. First item
2. Second item
   • Nested item 1
   • Nested item 2
3. Third item
```
