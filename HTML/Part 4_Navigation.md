# HTML Navigation

In HTML, you can create navigation menus to help users navigate through different sections or pages of a website. Navigation menus play a crucial role in providing a clear and organized structure to your web content. In this topic, we will explore how to create navigation menus using lists and anchor tags.

## Introduction
Navigation menus are essential for improving the usability and user experience of a website. They allow users to navigate through different sections, pages, or categories of content. HTML provides a simple yet effective way to create navigation menus using lists and anchor tags. By structuring your navigation menus with HTML, you can create intuitive and accessible navigation systems for your web pages.

## Creation of navigation
To create a navigation menu, we can utilize HTML lists and anchor tags. Here's an example of a basic navigation menu structure:

```https
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

In the diagram above the `<nav>` element represents the navigation section of a website, we used an unordered list `<ul>` to create the menu items. Each represented with `<li>` and the text of the menu was wrapped around the `<a>` tag. The href attribute is used to redirect links when clicking the items.


#### Here is how it looks like as a whole:

```https
<!DOCTYPE html>
<html>
  <head>
	<title>Anchor Tag</title>
  </head>
  <body>
	<nav>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	  
	<h2 id="home">Home</h2>
	<h2 id="about">About</h2>
	<h2 id="services">Services</h2>
	<h2 id="contact">Contact</h2>
  </body>
</html>
```
