# HTML Forms
HTML forms provide a powerful way to gather user input and interact with website visitors. Forms allow users to enter data, make selections, and submit information. In this topic, we will explore the essential HTML tags used to create forms, including `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`, `<option>`, `<label>`, and `<input type="radio">`. Understanding how to create forms is crucial for building interactive and user-friendly web applications.

## Create Forms
To create a form, we use the `<form>` tag. The `<form>` tag acts as a container for all the form elements. You can specify various attributes for the `<form>` tag, such as action (where to send the form data) and method (how to send the data, e.g., GET or POST).

Here's an example of a basic form structure:

```https
1	<form>
2	  <!-- Form elements go here -->
3	</form>
```

## Form Elements
Input fields are used to capture various types of user input, such as text, email, passwords, numbers, and more. They are created using the `<input>` tag. The type attribute of the `<input>` tag determines the kind of input field.

### Text Inputs
The text input field `(<input type="text">)` allows users to enter single-line text.
#### Example
```https
1	<input type="password" placeholder="Enter your password" name="password">
2	
```

### Password Inputs
The password input field `(<input type="password">)` masks the entered text to hide sensitive information.
#### Example
```https
1	<input type="password" placeholder="Enter your password" name="password">
2	
```
### Email Input
The email input field `(<input type="email">)` validates that the entered text is in the format of an email address.
#### Example
```https
1	<input type="email" placeholder="Enter your email" name="email">
2	
```
### Number Input
The number input field `(<input type="number">)` allows users to enter numeric values only.
#### Example
```https
1	<input type="number" placeholder="Enter your age" name="age">
2	
```
### Radio Buttons
Radio buttons `(<input type="radio">)` allow users to select one option from a group of choices. Each radio button within the same group should have the same name attribute value.
#### Example
```https
1	<p>Select your gender:</p>
2	<input type="radio" id="male" name="gender" value="male">
3	<label for="male">Male</label><br>
4	<input type="radio" id="female" name="gender" value="female">
5	<label for="female">Female</label><br>
6	<input type="radio" id="other" name="gender" value="other">
7	<label for="other">Other</label>
8	
```
In this example, users can only select one of the options (Male, Female, Other) because they all share the same **name** attribute.

## Checkboxes
Checkboxes `(<input type="checkbox">)` allow users to select multiple options from a set of choices.

#### Example
```https
1	<p>Select your interests:</p>
2	<input type="checkbox" id="coding" name="interest" value="coding">
3	<label for="coding">Coding</label><br>
4	<input type="checkbox" id="music" name="interest" value="music">
5	<label for="music">Music</label><br>
6	<input type="checkbox" id="sports" name="interest" value="sports">
7	<label for="sports">Sports</label>
```	
Here, users can select more than one interest because each checkbox operates independently.

## Textarea
The `<textarea>` tag is used to create a multi-line text input field. It also supports the placeholder attribute.

#### Example
```https
1	<textarea placeholder="Enter your message" name="message"></textarea>
2	
```	

## Label
The `<label>` tag is used to associate a text label with a form element. This improves accessibility and usability, as clicking on the label focuses the corresponding input field.

#### Example
```https
1	<label for="username">Username:</label>
2	<input type="text" id="username" name="username">
```	
In this example, the label "Username:" is associated with the text input field through the matching id ("username") and for attribute.

## Buttons and Submit Actions
The `<button>` tag is used to create clickable buttons within a form. The type attribute can specify the button's behavior, such as submitting the form `(type="submit")` or resetting the form `(type="reset")`.

#### Example
```https
1	<button type="submit">Submit</button>
2	<button type="reset">Reset</button>
```	

## Diagram
```https
<!DOCTYPE html>
<html>
<head>
  <title>Form Example</title>
</head>
<body>
  <form action="/submit" method="post">
	<label for="name">Name:</label>
	<input type="text" id="name" name="name" placeholder="Enter your name"><br>

	<label for="email">Email:</label>
	<input type="email" id="email" name="email" placeholder="Enter your email"><br>

	<label for="gender">Gender:</label><br>
	<input type="radio" id="male" name="gender" value="male">
	<label for="male">Male</label><br>
	<input type="radio" id="female" name="gender" value="female">
	<label for="female">Female</label><br>
	<input type="radio" id="other" name="gender" value="other">
	<label for="other">Other</label><br>

	<label for="interests">Interests:</label><br>
	<input type="checkbox" id="coding" name="interest" value="coding">
	<label for="coding">Coding</label><br>
	<input type="checkbox" id="music" name="interest" value="music">
	<label for="music">Music</label><br>
	<input type="checkbox" id="sports" name="interest" value="sports">
	<label for="sports">Sports</label><br>

	<label for="message">Message:</label>
	<textarea id="message" name="message" placeholder="Enter your message"></textarea><br>

	<label for="country">Country:</label>
	<select id="country" name="country">
	  <option value="usa">USA</option>
	  <option value="canada">Canada</option>
	  <option value="uk">UK</option>
	</select><br>

	<input type="submit" value="Send Data">
	<button type="reset">Reset</button>
  </form>
</body>
</html>
```
