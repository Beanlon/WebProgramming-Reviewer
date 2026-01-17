# CSS Fonts

Web fonts refer to custom fonts that are not commonly found on all devices or operating systems. By default, web browsers only display fonts that are installed on the user's device. However, using CSS, you can specify the fonts you want to use on your website, regardless of whether they are available on the user's device or not.

## Default fonts
Web-safe fonts are fonts that are commonly found on most devices and operating systems. These fonts ensure consistent rendering across different platforms, providing a reliable fallback option if custom fonts cannot be loaded. Here are some examples of web-safe fonts:

* Arial
* Helvetica
* Times New Roman
* Georgia
* Courier New

To use the default fonts use `font-family` and dictate the fonts used

#### Examples
```https
1	body {
2	  font-family: Arial, sans-serif;
3	}
4	
```

## Downloading Fonts
If you want to use custom fonts on your website, you can import them using the @font-face rule in CSS. This allows you to load font files from your server and use them in your CSS rules.

To use downloaded custom fonts, follow these steps:

	1. Go to a website that offers free fonts (e.g., Google Fonts or a font repository 	like Font Squirrel).

	2. Choose and download the font you like, which typically comes in formats like .ttf, .otf, .woff, or .woff2.

	3. Unzip the downloaded file and save the font file in your project's folder.
To import a custom font, you need to have the font files in different formats (e.g., .woff, .woff2, .ttf) and add the following CSS code to your stylesheet:

```https
1	@font-face {
2	  font-family: 'CustomFont';
3	  src: url('fonts/CustomFont-Regular.woff2') format('woff2'),
4	       url('fonts/CustomFont-Regular.woff') format('woff'),
5	       url('fonts/CustomFont-Regular.ttf') format('truetype');
6	}
7	
```
In this code, CustomFont is the name you assign to the font, and path/to/font represents the file path to the font files on your server.

Once the font is imported, you can use it in your CSS rules by specifying the font-family property with the name you assigned:
```https
1	h1 {
2	  font-family: 'CustomFont', Arial, sans-serif;
3	}
4	
```
In this example, the font CustomFont will be used for the h1 element, and if it's not available, the browser will fall back to Arial and then a sans-serif font.

## Importing Google Fonts
Google Fonts is a popular web font service that provides a wide range of free and open-source fonts for use on websites. It offers an extensive collection of fonts that you can easily incorporate into your CSS.

To use Google Fonts, follow these steps:

	1. Visit the Google Fonts website.
	2. Browse the available fonts and select the ones you want to use.
	3. Click on the "+ Select this style" button for each font style you want to include.
	4. Once you've made your selections, click on the "Family Selected" bar at the bottom of the screen.
	5. In the "Embed" tab, you will find the HTML and CSS code snippets to include in your website.
 You can import Google Fonts into your CSS using the @import rule or by linking them directly in the HTML `<head>` section. Here’s how to do both:

#### Using @import in CSS:
```https
1	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
2	
3	body {
4	  font-family: 'Roboto', sans-serif;
5	}
6	
```
**Note**: You can use this import in the css file itself.
