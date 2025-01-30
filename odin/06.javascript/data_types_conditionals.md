# Data types and conditionals


* Read through this <a href="http://javascript.info/types" target="_blank" rel="noopener noreferrer">overview of the most common data types in JavaScript</a>. :white_check_mark:

* Read and code along with this <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings" target="_blank" rel="noopener noreferrer">MDN tutorial on strings in JavaScript</a>. Skip the <code>Concatenation in context</code> section, as it covers concepts we will cover in a later lesson on DOM Manipulation. :white_check_mark:

* Go through <a href="https://www.w3schools.com/js/js_string_methods.asp" target="_blank" rel="noopener noreferrer">the W3Schools lesson on string methods</a> to learn a bit more about what you can do with strings. Also, be sure to take a peek at <a href="https://www.w3schools.com/jsref/jsref_obj_string.asp" target="_blank" rel="noopener noreferrer">the String Reference page</a> near the bottom, and do the exercises in the assignment section <a href="#assignment">below</a>! :white_check_mark:

* Vocabulary time: a <strong>method</strong> is a bit of functionality built into the language or specific data types. In <a href="https://www.w3schools.com/js/js_string_methods.asp" target="_blank" rel="noopener noreferrer">the W3Schools lesson on string methods</a>, you’ve learned about a few methods that can be used on strings, such as <code>replace</code> and <code>slice</code>. There are still many more built-in string methods which <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">the MDN documentation for strings provides an exhaustive reference</a>. You are not expected to memorize these but the documentation will be a very useful reference to revisit, so bookmark it! :white_check_mark:

* Step one in learning about conditionals is making sure you have a good grasp on <a href="http://javascript.info/comparison" target="_blank" rel="noopener noreferrer">comparisons</a>. :white_check_mark:

* W3Schools also has a <a href="https://www.w3schools.com/js/js_if_else.asp" target="_blank" rel="noopener noreferrer">lesson on conditionals in JavaScript</a>. :white_check_mark:

* JavaScript.info has a <a href="http://javascript.info/logical-operators" target="_blank" rel="noopener noreferrer">good tutorial on logical operators</a>. A little heads up regarding this reading’s tasks: there will be questions where you see <code>alert()</code> with a number or string inside the parenthesis. What’s happening here will be discussed later in the curriculum. Some of the answers may not make sense now, but they are accurate, and you will understand them as you progress in the curriculum. Don’t worry too much about it now! :white_check_mark:

* The <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" target="_blank" rel="noopener noreferrer">MDN article on conditionals</a> reinforces the concept and provides several interesting examples of how you could use it building websites. :white_check_mark:

* JavaScript.info’s <a href="http://javascript.info/ifelse" target="_blank" rel="noopener noreferrer">lesson on <code>if/else</code></a> covers the same basic concept (read through it as a review!) and - more importantly - offers the usual ‘tasks’ at the bottom of the page! :white_check_mark:

* <a href="https://javascript.info/switch" target="_blank" rel="noopener noreferrer">Learn about the <code>switch</code> statement</a>, which is handy when you have multiple conditions. :white_check_mark:

## Assignment

* <a href="https://replit.com/@OdinProject/troubleshooting#troubleshooting.js" target="_blank" rel="noopener noreferrer">Exercise 1</a> :white_check_mark:
  - In this exercise, you will be working out of the file called <code>troubleshooting.js</code>.

* <a href="https://replit.com/@OdinProject/enter-a-number#script.js" target="_blank" rel="noopener noreferrer">Exercise 2</a> :white_check_mark:
  - You will be working out of <code>script.js</code>, and you will use the console in the ‘webview’ pane to check your work. To access the console, click the wrench icon, which is located on the right side of the address bar within the ‘webview’ pane.

* <a href="https://replit.com/@OdinProject/lets-do-some-math#math.js" target="_blank" rel="noopener noreferrer">Exercise 3</a> :white_check_mark:
  - You will be working out of <code>math.js</code>.

* <a href="https://replit.com/@OdinProject/direction-follow#follow.js" target="_blank" rel="noopener noreferrer">Exercise 4</a> :white_check_mark:
  - You will be working out of <code>follow.js</code>.

## Knowledge check

* What are the eight data types in JavaScript?

`number`, `bigint`, `string`, `boolean`, `undefined`, `null`, `symbol`, and `object`.

* Which data type is NOT primitive?

`object`.

* What is the relationship between null and undefined?

They belong to different data types, each one only containing themselves. They both evaluate to `0`. But `null` is
commonly used for empty data, and `undefined` is used when variables are not assigned.

* What is the difference between single, double, and backtick quotes for strings?

Single and double quotes are identical. Backticks allows the usage of string templates, like:
```js
console.log(`My name is ${name}.`);
```

* What is the term for joining strings together?

Concatenation.

* Which type of quote lets you embed variables/expressions in a string?

Backticks quote.

* How do you embed variables/expressions in a string?

With `${}`.

* How do you use escape characters in a string?

With backslash `\`.

* What is the difference between the slice/substring string methods?

`slice` can use negative numbers. In `substring`, negative numbers are truncated to `0`.

* What are the three logical operators, and what do they stand for?

OR `||`, AND `&&`, NOT `!`.

* What are the comparison operators?

`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`.

* What are truthy and falsy values?

Are values that follow or not the `if` condition. Falsy values evaluate to `0`, and truthy values evalue to `!= 0`.
For example `''`, `alert(1)`, `null` are falsy values, they evaluate to `0`.
`"0"`, `undefined == null`, `undefined === alert(1)` are truthy values, they evaluate to `!= 0`.

* What are the falsy values in JavaScript?

The ones that evaluate to `0`.

* What are conditionals?

The keywords that execute the flow of the code, based on boolean expressions, like `if`, `else`, `switch`, `case`, `while`.

* What is the syntax for an if/else conditional?

```js
if (condition1) {
    ...
}
else if (condition2) {
    ...
}
else {
    ...
}
```

* What is the syntax for a switch statement?

```js
switch (x) {
    case 1:
        ...
        break;
    case 2:
    case 3:
        ...
        break;
    case 4:
        ...
        break;
    default:
        ...
}
```

* What is the syntax for a ternary operator?

```js
x_equals_2 = (x == 2) ? true : false;
```

* What is nesting?

Putting things inside other things inside other things, like:
```js
if (condition1) {
    if (condition2) {
        if (condition3) {
            ...
        }
        else if (condition4) {
            ...
        }
    }
    else if (condition5) {
        ...
    }
}
else {
    ...
}
```

## Additional resources

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank" rel="noopener noreferrer">Regular expressions</a>, commonly known as regex, is a tool that matches or locates patterns in strings for string validation. However, it’s important to know <a href="https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions" target="_blank" rel="noopener noreferrer">when you shouldn’t use regular expressions</a>. There are other various methods to process strings, and regex can be slower in comparison.

* <a href="https://www.youtube.com/watch?v=rhzKDrUiJVk" target="_blank" rel="noopener noreferrer">Web Dev Simplified’s Regular Expressions In 20 Minutes</a>
