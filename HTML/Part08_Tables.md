# HTML Tables
HTML tables provide a structured way to present tabular data on a webpage. Tables are commonly used for displaying data in rows and columns, making them an essential component in web development. In this topic, we will explore how to create tables using HTML tags such as `<table>`, `<tr>`, `<td>`, `<th>`, `<thead>`, and `<tbody>`. We will also delve into table attributes like colspan and rowspan that allow for more complex table structures.

## Creating Tables
To create a basic table structure, we use the following HTML tags:

* `<table>`: Represents the entire table.
* `<tr>`: Defines a table row.
* `<td>`: Defines a table cell (data cell).
* `<th>`: Defines a table header cell.

Here's an example of a simple table with two rows and two columns:

```https
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

The `<th>` tag is used for header cells, while the `<td>` tag is used for data cells. The `<tr>` tag defines table rows that contain cells.

## Understanding Table Sections
HTML tables can be organized into different sections using `<thead>`, `<tbody>`, and `<tfoot>` tags to separate the header, body, and footer of the table.

## <thead>: Table Header
The `<thead>` tag is used to group the header content of the table. It is typically used with the `<th>` tags.

#### Example
```https
<table>
  <thead>
	<tr>
	  <th>Header 1</th>
	  <th>Header 2</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td>Data 1</td>
	  <td>Data 2</td>
	</tr>
  </tbody>
</table>
```

## Understanding Table Attributes

#### Colspan Attributes
The `colspan` attribute allows a cell to span across multiple columns. It is useful when you want to merge cells horizontally. Here's an example:

#### Example
```https
<table>
  <tr>
	<th colspan="2">Header</th>
  </tr>
  <tr>
	<td colspan="2">Merged Cell</td>
  </tr>
  <tr>
	<td>Data 1</td>
	<td>Data 2</td>
  </tr>
</table>
```
In this example, the header cell spans across two columns, and the merged cell also spans across two columns.

### rowspan Attribute
The `rowspan` attribute allows a cell to span across multiple rows. It is helpful when you want to merge cells vertically. Here's an example:

#### Example
```https
<table>
  <tr>
	<th rowspan="2">Header</th>
	<td>Data 1</td>
  </tr>
  <tr>
	<td>Data 2</td>
  </tr>
</table>
```
### Diagram: Table Structure
Here is a diagram illustrating the structure of an HTML table:

#### Example
```https
<!DOCTYPE html>
<html>
  <head>
	<title>Tables with Rowspan and Colspan</title>
  </head>
  <body>
	<h3>Simple Table:</h3>
	<table>
	  <thead>
		<tr>
		  <th>Header 1</th>
		  <th>Header 2</th>
		  <th>Header 3</th>
		</tr>
	  </thead>
	  <tbody>
		<tr>
		  <td>Cell 1</td>
		  <td>Cell 2</td>
		  <td>Cell 3</td>
		</tr>
		<tr>
		  <td>Cell 4</td>
		  <td>Cell 5</td>
		  <td>Cell 6</td>
		</tr>
	  </tbody>
	</table>
	
	<h3>Table with Rowspan and Colspan:</h3>
	<table>
	  <tr>
		<th>Header 1</th>
		<th colspan="2">Header 2</th>
	  </tr>
	  <tr>
		<td rowspan="2">Cell 1</td>
		<td>Cell 2</td>
		<td>Cell 3</td>
	  </tr>
	  <tr>
		<td colspan="2">Cell 4</td>
	  </tr>
	</table>
  </body>
</html>
```
