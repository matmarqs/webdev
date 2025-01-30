# Variables and Operators

All notes are on `teste.js` and `index.html`.

## Knowledge check

* What three keywords can you use to declare new variables?

`let`, `const` and `var`.

* Which of the three variable declarations should you avoid and why?

`var`, because it is old and have strange behavior. I think it has something to do with `{ }`.

* What rules should you follow when naming variables?

Not start with digit, not use hyphen.

* What happens when you add numbers and strings together?

The result is a string, and the numbers are treated as strings.

* How does the Modulo (%), or Remainder, operator work?

It performs euclidian devision on an integer, and returns the modulo.

* What’s the difference between == and ===?

`===` is a strict equality, it tests if data types are the same. `==` does not test data types.

* When would you receive a NaN result?

When the result is not a legal number, like when "sin x"/"n".

* How do you increment and decrement a number?

`x += 1`

* What’s the difference between prefixing and postfixing increment/decrement operators?

The increment/decrement is performed before or after the evaluation of the expression.

* What is operator precedence and how is it handled in JS?

Some operators have higher priority, like `*` has priority over `+`.

* How do you access developer tools and the console?

Right-click mouse and Inspect, or `F12`.

* How do you log information to the console?

`console.log()` in javascript.

* What does unary plus operator do to string representations of integers? eg. +”10”

Transform the string to and integer. Like `+"1" + +"1" = 2`, but `"1" + "1" = "11"`.
