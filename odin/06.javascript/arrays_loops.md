# Arrays and Loops

### JavaScript Array `at()`

ES2022 intoduced the array method `at()`: The `at()` method returns the same as `[]`.

The `at()` method is supported in all modern browsers since March 2022.

Many languages allow negative bracket indexing like `[-1]` to access elements from the end of an object / array / string.

This is not possible in JavaScript, because `[]` is used for accessing both arrays and objects. `obj[-1]` refers to the value of key `-1`, not to the last property of the object.

The `at()` method was introduced in ES2022 to solve this problem.

### How to Recognize an Array

A common question is: How do I know if a variable is an array? The problem is that the JavaScript operator `typeof` returns `object`.

1. To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method `Array.isArray()`:
```js
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits);
```

2. The `instanceof` operator returns true if an object is created by a given constructor:
```js
(fruits instanceof Array);
```




### Which loop type should you use?

`map()` and `filter()` to be an elegant functional programmer (Haskell ftw).
```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = cats.map((cat) => cat.toUpperCase());  // LEOPARD, SERVAL, ...
const filtered = cats.filter((cat) => cat.startsWith("L"));  // Leopard, Lion
```

`for...of` is better when you don't need access to the index.
```js
for (const item of array) {
  // code to run
}
```

`for` when the option above are not good.
```js
for (initializer; condition; final-expression) {
  // code to run
}
```

`while` with a complex condition.
```js
initializer
while (condition) {
  // code to run

  final-expression
}
```

`do...while` when it makes sense, but it is kind of rare.
```js
initializer
do {
  // code to run

  final-expression
} while (condition)
```

### Test Driven Development (TDD)

Test Driven Development (TDD) is a phrase you often hear in the dev world. It refers to the practice of writing automated tests that describe how your code should work before you actually write the code. For example, if you want to write a function that adds a couple of numbers, you would first write a test that uses the function and supplies the expected output. The test will fail before you write your code, and you should be able to know that your code works correctly when the test passes.

Imagine having to do that for complicated functions, like checking whether or not someone has won a game of tic tac toe: `(game_win(["o", null,"x",null,"x",null,"x", "o", "o"]))`. If you didn’t do TDD, then you might actually have to play multiple games against yourself just to test if the function was working correctly!

## Assignment

Go and review the <a href="https://github.com/TheOdinProject/javascript-exercises#readme" target="_blank" rel="noopener noreferrer">README of our `javascript-exercises` repository</a> to set up your local environment. Once you have cloned the repository and installed Jest, review each README file prior to completing the following exercises in order:
1. `01_helloWorld` :white_check_mark:
2. `02_repeatString` :white_check_mark:
3. `03_reverseString` :white_check_mark:
4. `04_removeFromArray` :white_check_mark:
5. `05_sumAll` :white_check_mark:
6. `06_leapYears` :white_check_mark:
7. `07_tempConversion` :white_check_mark:

## Knowledge check

* What is an array?

An object that represents an ordered list of elements.

* What are arrays useful for?

For looping, storing data etc.

* How do you access an array element?

By `array[i]` or `array.at(i)`.

* How do you change an array element?

By `array[i] = new_thing`.

* What are some useful array properties?

`array.length`.

* What are some useful array methods?

`array.toString()`, `array.join()`, `array.pop()`, `array.push()`, `array.shift()`, `array.slice()` etc.

* What are loops useful for?

For repeating tasks.

* What is the break statement?

When you want to get out of a loop.

* What is the continue statement?

When you want to skip an interation for a loop.

* What is the advantage of writing automated tests?

To not having to test the code over and over, you write code to also do that for you.
