# Semantics
HTML semantics refers to the practice of using appropriate HTML tags to accurately represent the meaning and structure of the content within a webpage. By using semantic tags, you provide context and clarity to both human readers and search engines. This helps improve the overall user experience, supports better indexing and ranking in search results, and ensures accessibility for individuals using assistive technologies.

#### Here's each of the semantic tags that will be explained

| Semantics |  Semantic Tags |
|-----------|----------------|
|  header   |  `<header>`    |
|  main     |  `<main>`      |
|  section  |  `<section>`   |
|  article  |  `<article>`   |
|  aside    |  `<aside>`     |
|  footer   |  `<footer>`    |

## header
The `<header>` tag represents the introductory content or a container for the navigational elements of a webpage. It typically includes the site logo, page title, and primary navigation.

```https
<header>
  <h1>Website Title</h1>
  <nav>
    <!-- Navigation links here -->
  </nav>
</header>
```	

## main
The `<main>` tag represents the main content area of a webpage. It should contain the primary content unique to that page.

```https
<main>
    <!-- Main Conent here -->
</main>
```	
## section
The `<section>` tag is used to group related content within a webpage. It helps organize the content into meaningful sections.

```https
<section>
    <!-- Content related to a specific topic or theme -->
</section>
```	
## article
The `<article>` tag represents a self-contained composition within a webpage. It encapsulates content that can be distributed or independently syndicated.

```https
<article>
    <!-- Standalone content, such as blog posts or news articles -->
</article>
```
## article
The `<footer>` tag represents the footer section of a webpage. It typically contains information about the author, copyright notices, and links to related documents.

```https
<footer>
    <!-- Footer content here -->
</footer>
```

#### Example Diagram
```https
<!DOCTYPE html>
<html>
<head>
  <title>Using Semantic Tags Example</title>
</head>
<body>
  <header>
	<h1>Your Website Title</h1>
	<nav>
	  <ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About Us</a></li>
	  </ul>
	</nav>
  </header>

  <main>
	<section>
	  <h2>About Us</h2>
	  <p>Some information.</p>
	</section>

	<article>
	  <h2>Latest News</h2>
	  <p>Read the latest news article here.</p>
	</article>

	<aside>
	  <h3>Related Links</h3>
	  <ul>
		<li><a href="#">Link 1</a></li>
		<li><a href="#">Link 2</a></li>
	  </ul>
	</aside>
  </main>

  <footer>
	<p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
</body>
</html>
```
