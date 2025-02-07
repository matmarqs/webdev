# Function Basics

## Assignment

* This <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions" target="_blank" rel="noopener noreferrer">MDN article on functions</a> is a good place to start. Don’t worry as there may be some functions that can be beyond the reach of this particular lesson, but do pay special attention to the sections on ‘Function Scope’. Scope is a topic that commonly trips up both beginner and intermediate coders, so it pays to spend some time with it upfront. :white_check_mark:

* Read this article about <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values" target="_blank" rel="noopener noreferrer">return values</a>. :white_check_mark:

* Next, read the <a href="http://javascript.info/function-basics" target="_blank" rel="noopener noreferrer">function basics</a> article from JavaScript.info. We’ve mentioned this before, but JavaScript has changed a bit over the years and functions have recently received some innovation. This article covers one of the more useful new abilities: ‘default parameters’. (NOTE: The “Functions == Comments” section, as well as the last “task” at the end of this lesson uses loops, which you will learn about in the next lesson.  Don’t worry about them.) :white_check_mark:

* Now, read the <a href="http://javascript.info/function-expressions" target="_blank" rel="noopener noreferrer">function expressions</a> article about functions in JavaScript to give you a little more context, and read the article on <a href="http://javascript.info/arrow-functions-basics" target="_blank" rel="noopener noreferrer">arrow functions</a> for an introduction to arrow functions. Arrow functions are useful but not crucial, so don’t worry about them too much just yet. We include them here because you are likely to encounter them as you move forward, and it’s better that you have at least <em>some</em> idea of what you’re looking at whenever they crop up. :white_check_mark:

* Finally, learn about the <a href="https://www.javascripttutorial.net/javascript-call-stack/" target="_blank" rel="noopener noreferrer">JavaScript Call Stack</a>. The article goes in-depth about call stacks and how <code>return</code> works in the context of chained function calls. Don’t worry if you don’t fully understand this yet, but it’s important to keep in mind where your <code>return</code>ed values are going. This doubles as a bit of early computer science as well. :white_check_mark:

## Learning notes

### Optional parameters

To support optional parameters, you can specify default values like this:
```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.
```js
function showMessage(text) {
  // ...
  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }
  alert(text);
}
showMessage(); // empty message
```

…Or we could use the `||` operator:
```js
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
```

Modern JavaScript engines support the nullish coalescing operator `??`, it’s better when most falsy values, such as `0`, should be considered "normal":
```js
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

The operator `??` is equal to:
```js
result_1 = (a !== null && a !== undefined) ? a : b;
result_2 = a ?? b;
console.log(result_1 === result_2)  // true
```


### Anonymous function

Anonymous function:
```js
(function () {
  alert("hello");
});
```

You can pass an anonymous function into `addEventListener()`:
```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of `function(event)`, you write `(event) =>`:
```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

If the function only takes one parameter, you can omit the parentheses around the parameter:
```js
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword and implicitly return the expression. In the following example, we're using the map() method of Array to double every value in the original array:
```js
const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled); // [2, 4, 6]
```

### `return undefined`

A function with an empty `return` or without it returns `undefined`.

### Function declarations

Functions are values. They can be assigned, copied or declared in any place of the code.

Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

A Function Declaration can be called earlier than it is defined. This works:
```js
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

...If it were a Function Expression, then it wouldn’t work:
```js
sayHi("John"); // error!

let sayHi = function(name) {
  alert( `Hello, ${name}` );
};
```
Function Expressions are created when the execution reaches them.

Example using Function Expressions:
```js
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello child!"); } :
  function() { alert("Greetings sir!"); };

// or, with arrow functions:

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome(); // ok now
```

### Arrow functions

Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).
```js
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```

## Knowledge check

* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions" target="_blank" rel="noopener noreferrer">What are functions useful for?</a>

Making code cleaner, better abstraction, and not repeating code.

* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions" target="_blank" rel="noopener noreferrer">How do you invoke a function?</a>

`functionName();`

* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions" target="_blank" rel="noopener noreferrer">What are anonymous functions?</a>

Functions that do not have a name. They can be declared without a name and passed as an expression, or they can be arrow functions.

* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts" target="_blank" rel="noopener noreferrer">What is function scope?</a>

It is the variables that they see, and outside of their code the variables also can't be accessed.

* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values#what_are_return_values" target="_blank" rel="noopener noreferrer">What are return values?</a>

The values returned by the functions.

* <a href="https://javascript.info/arrow-functions-basics" target="_blank" rel="noopener noreferrer">What are arrow functions?</a>

Anonymous functions declared in a functional (Haskell) style.

* <a href="https://javascript.info/function-expressions#function-expression-vs-function-declaration" target="_blank" rel="noopener noreferrer">What is the difference between a function declaration and a function expression?</a>

The syntax, and the way they are executed. Function Declarations are initialized first and visible in their own block, and Function Expressions only when their line of code is reached.

## Additional resources

* <a href="https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope)" target="_blank" rel="noopener noreferrer">What’s the difference between using “let” and “var”? - stackoverflow</a> :white_check_mark:
