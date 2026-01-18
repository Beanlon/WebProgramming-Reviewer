# String methods
String methods allow you to maniplate strings and texts in different ways

* `charAt()` - identifying the character in that location/index

  ```https
  let username = "Jeric";
  console.log(username.charAt(0)); //Output: J
  ```
* `indexOf()` - returns the index of the particular character
   ```https
  let username = "Jeric";
  console.log(username.indexOf("e")); //Output: 1
  ```
* `lastIndexOf()` - returns the index of that particular character at its last placement
  ```https
  let username = "Jeric";
  console.log(username.lastIndexOf("e")); //Output: 1 - 
  //Since we only have 1 e it will be the last occurence
  ```
* `length` - identifies all the amount of characters
   ```https
  let username = "Jeric";
  console.log(username.length); //Output: 5
  ```
* `trim()` - removes any spacing of the strings
   ```https
  let username = "   Jeric";
  console.log(username.trim()); //Output: 5
  ```
* `toLowerCase()` - turns the character into their lowercase variants
  ```https
  let username = "Jeric";
  console.log(username.toLowerCase()); //Output: jeric
  ```
* `toUpperCase()` - turns the character into their uppercase variants
  ```https
  let username = "Jeric";
  console.log(username.toUpperCase()); //Output: JERIC
  ```
* `repeat()` - repeats the string based on the amoung
  ```https
  let username = "Jeric";
  console.log(username.repeat(3)); //Output: JericJericJeric
  ```
* `startsWith()` - a boolean that identifies if the string starts with that character
  ```https
  let username = "Jeric";
  console.log(username.startsWith("J")); //Output: true
  ```
* `includes()` - a boolean that identifies if the string includes that particular character
  ```https
  let username = "Jeric";
  console.log(username.inclued("r")); //Output: true
  ```

**Note**: Some of these methods do take in epty string meaning white spaces
