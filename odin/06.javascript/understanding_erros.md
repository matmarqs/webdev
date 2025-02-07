# Understanding Errors

### Common types of errors

#### Syntax error

```js
function helloWorld() {
  console.log "Hello World!"
}
```
```js
Uncaught SyntaxError: Invalid or unexpected token
```

#### Reference error

A `ReferenceError` is thrown when one refers to a variable that is not declared and/or initialized within the current scope.

```js
const a = "Hello";
const b = "World";

console.log(c);
```
```js
Uncaught ReferenceError: c is not defined
    at script.js:4
```

#### Type error

A `TypeError` may be thrown when:
* an operand or argument passed to a function is incompatible with the type expected by that operator or function;
* or when attempting to modify a value that cannot be changed;
* or when attempting to use a value in an inappropriate way.

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```
```js
Uncaught TypeError: str1.push is not a function
    at script.js:3:22
```

## Assignment

1. Now, it’s time to go through the documentation! Learn more about the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" target="_blank" rel="noopener noreferrer">ReferenceError</a>, the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" target="_blank" rel="noopener noreferrer">SyntaxError</a> and the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" target="_blank" rel="noopener noreferrer">TypeError</a> from the MDN Docs. Don’t worry about fully understanding all the documentation right now; the goal is to familiarize yourself with the concepts. The examples use “try…catch” statements, which execute the code within the “try” block. If an error occurs, it is automatically caught by the “catch” block. This allows you to tackle errors before they terminate the script, allowing you to handle them appropriately within the “catch” block. For now, just remember that “try…catch” statements exist and that they will become useful as you progress through the curriculum. :white_check_mark:

2. Work through <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong" target="_blank" rel="noopener noreferrer">“What went wrong? Troubleshooting JavaScript”</a>. Be sure to download their starter code that has intentional errors. :white_check_mark:

## Knowledge check

* What are three reasons why you may see a TypeError?

Argument of function with incompatible type, modify a value that cannot be changed, attempting to use a value in an inappropriate way.

* What is the key difference between an error and a warning?

Errors stop the execution of code, warnings are informational.

* What is one method you can use to resolve an error?

Using the console to print variable contents.

## Additional resources

* Read the W3schools article to find additional <a href="https://www.w3schools.com/jsref/obj_console.asp" target="_blank" rel="noopener noreferrer">window console object methods</a>.
