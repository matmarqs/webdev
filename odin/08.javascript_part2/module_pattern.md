# Factory Functions and the Module Pattern

### [Introduction](#introduction)

We have discussed object constructors in the previous lesson. However, they are one of the many ways to organize your code. While they are fairly common and a fundamental building block of the JavaScript language, they have their flaws.

### [Lesson overview](#lesson-overview)

This section contains a general overview of topics that you will learn in this lesson.

*   Describe the scope of a variable.
*   Explore what closures are.
*   Briefly consider the disadvantages of using constructors.
*   Discuss Factory functions with examples.
*   Discuss Private variables and functions concerning factory functions.
*   Showcase object inheritance with the help of factory functions.
*   Describe what module pattern and IIFEs are.
*   Discuss encapsulation and how the module pattern helps with namespacing.

### [Scoopfuls of scopes](#scoopfuls-of-scopes)

The word “scoping” essentially asks, “Where is a certain variable available to me?” - it indicates the current context of a variable. When a variable is not declared within **any** functions, existing outside any `{ curly braces }`, they are said to be in the **global scope**, meaning that they are available everywhere. If they are within a function or `{ curly braces }`, they are known to be **locally scoped**.

Before ECMAScript 6, JavaScript had a single keyword to declare a variable, `var`. These variables can be redefined and updated, and are said to be defined within the **function scope**, meaning, they are only available within the function they are declared in.

In ECMAScript 6, the keywords `let` and `const` were introduced. While `var` variables were function scoped, these allow you to define variables that are **block scoped** - basically, scoping the variable to only be available within the closest set of `{ curly braces }` in which it was defined. These braces can be those of a `for` loop, `if-else` condition, or any other similar construct, and are called, a block. Let’s see an example to sum this all up.

```js
let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge (age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);
```

Take a while to brew on that example. In the end, it’s not some mind-blowing concept but there’s a whole bunch of terms in there - it’ll all help us understand the next mammoth - closures.

### [Closures aren’t scary](#closures-arent-scary)

The best way to approach this would be to start with an example - take a look at this piece of code below.

```js
function makeAdding (firstNumber) {
  // "first" is scoped within the makeAdding function
  const first = firstNumber;
  return function resulting (secondNumber) {
    // "second" is scoped within the resulting function
    const second = secondNumber;
    return first + second;
  }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7
```

A lot going on, so let’s break it down:

1.  The `makeAdding` function takes an argument, `firstNumber`, declares a constant `first` with the value of `firstNumber`, and returns another **function**.
2.  When an argument is passed to the returned function, which we have assigned to **add5**, it returns the result of adding up the number passed earlier to the number passed now (`first` to `second`).

Now, while it may sound good at first glance, you may already be raising your eyebrows at the second statement. As we’ve learned, the `first` variable is scoped within the `makeAdding` function. When we declare and use `add5`, however, we’re **outside** the `makeAdding` function. How does the `first` variable still exist, ready to be added when we pass an argument to the `add5` function? This is where we encounter the concept of closures.

Functions in JavaScript form closures. A closure refers to the combination of a function and the **surrounding state** in which the function was declared. This surrounding state, also called its **lexical environment**, consists of any local variables that were in scope at the time the closure was made. Here, `add5` is a reference to the `resulting` function, created when the `makeAdding` function is executed, thus it has access to the lexical environment of the `resulting` function, which contains the `first` variable, making it available for use.

This is a **crucial** behavior of functions - allowing us to associate data with functions and manipulate that data anywhere outside of the enclosing function. If you’re still confused, read the [MDN documentation on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure), but only the sections “Lexical scoping”, “Closure” and “Practical closures”. The other sections refer to concepts that will be discussed later in this lesson.

### [So, what’s wrong with constructors?](#so-whats-wrong-with-constructors)

The biggest problem with constructors is that they don’t provide automatic safeguards that prevent from using them wrong.

One of the key arguments is how they _look_ like regular JavaScript functions, even though they do not _behave_ like regular functions. As we warned in the object constructors lesson, if you try to use a constructor function without the `new` keyword, and you didn’t include additional safeguards in the constructor not only does your program fail to work, but it also produces error messages that are hard to track down and understand.

Yet another issue stems from misusing `instanceof`. In other programming languages, the keyword is a reliable way to know the code with which an object was made; but in JavaScript, it checks the presence of a constructor’s prototype in an object’s _entire_ prototype chain - which does nothing to confirm if an object was made with that constructor since the constructor’s prototype can even be reassigned after the creation of an object.

Because of that, constructors have become unpopular in favor of a pattern that is similar but addresses a ton of these problems by not relying on those troublesome features: Factory Functions.

### [Factory functions 🏭](#factory-functions)

These fancy-sounding functions work very similar to how constructors did, but with one key difference - they levy the power of closures. Instead of using the `new` keyword to create an object, factory functions set up and return the new object when you call the function. They do not use the prototype, which incurs a performance penalty - but as a general rule, this penalty isn’t significant unless you’re creating thousands of objects. Let’s take a basic example to compare them to constructor functions.

```js
const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword
```

### [Private variables and functions](#private-variables-and-functions)

Now you may be thinking - where does closure come into all of this? Factories seem to be returning an object. This is where we can extend our `User` factory to add a few more variables and introduce “private” ones. Take a look at this, now:

```js
function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }
```

We’ve introduced a new metric for a new user - a reputation. Notice that the object we return in the factory function does not contain the `reputation` variable itself, nor any copy of its value. Instead, the returned object contains two functions - one that reads the value of the `reputation` variable, and another that increases its value by one. The `reputation` variable is what we call a “private” variable, since we cannot access the variable directly in the object instance - it can only be accessed via the closures we defined.

Concerning factory functions, a private variable or function uses closures to create smaller, dedicated variables and functions within a factory function itself - things that we do not _need_ to return in the object itself. This way we can create neater code, without polluting the returned object with unnecessary variables that we create while creating the object itself. Often, you do not need every single function within a factory to be returned with the object, or expose an internal variable. You can use them privately since the property of closures allows you to do so.

In this case, we did not need control of the `reputation` variable itself. To avoid foot guns, like accidentally setting the reputation to `-18000`, we expose the necessary details in the form of `getReputation` and `giveReputation`.

#### [Constructors and closure](#constructors-and-closure)

Note that you could technically also use closure in constructors, by defining the methods to access a “private property” inside the constructor, instead of on the prototype. But that would make them non-inheritable, which defies the purpose of constructors.

### [Prototypal inheritance with factories](#prototypal-inheritance-with-factories)

In the lesson with constructors, we looked deeply into the concept of prototype and inheritance, and how to give our objects access to the properties of another. With factory functions too, there are easy ways to do that. Take another hypothetical scenario into consideration. We need to extend the `User` factory into a `Player` factory that needs to control some more metrics - there are some ways to do that:

```js
function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}
```

And there you go! You can create your User, extract what you need from it, and re-return whatever you want to - hiding the rest as some private variables or functions! In case you want to extend it, you can also use the [`Object.assign` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to add on the properties you want!

```js
function createPlayer (name, level) {
  const user = createUser(name);

  const increaseLevel = () => level++;
  return Object.assign({}, user, { increaseLevel });
}
```

### [The module pattern: IIFEs](#the-module-pattern-iifes)

ECMAScript 6 introduced a new JavaScript feature called “modules” - which are a set of syntax for importing and exporting code between different JavaScript files. While they are important and powerful, they are covered a bit later in the curriculum. We are not talking about them in this section.

Oftentimes, you do not need a factory to produce multiple objects - instead, you are using it to wrap sections of code together, hiding the variables and functions that you do not need elsewhere as private. This is easily achievable by wrapping your factory function in parentheses and immediately calling (invoking) it. This immediate function call is commonly referred to as an Immediately Invoked Function Expression (duh) or IIFE in short. This pattern of wrapping a factory function inside an IIFE is called the module pattern.

```js
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
```

In this example, we have a factory function creating some basic operations that we need only once. We can wrap it in parentheses and immediately call it by adding `()` - returning the result object that we store in `calculator`. In this way we can write code, wrapping away things that we do not need as private variables and functions inside our factory function and while they are tucked inside of our module, we can use the returned variables and functions outside the factory, as necessary.

#### [Encapsulating with the module pattern](#encapsulating-with-the-module-pattern)

At first glance, this does not seem particularly useful. If we have some code that we use only once, why not write it in the main section of our JavaScript file itself? After all, the power of factory functions lies in being, well, a factory to make multiple objects, right?

This is where we encounter the word **encapsulation** - bundling data, code, or something into a single unit, with selective access to the things inside that unit itself. While it sounds general, this is what happens when we wrap, or encapsulate our code into modules - we don’t expose everything to the body of our program itself. This encapsulation leads to an effect called **namespacing**. Namespacing is a technique that is used to avoid naming collisions in our programs.

Take the calculator example into consideration. It’s very easy to imagine a scenario where you can accidentally create multiple functions with the name `add`. What does `add` do - does it add two numbers? Strings? Does it take its input directly from the DOM and display the result? What would you name the functions that do these things? Instead, we can easily encapsulate them inside a module called `calculator` which generates an object with that name, allowing us to explicitly call `calculator.add(a, b)` or `calculator.sub(a, b)`.

### [Assignment](#assignment)

1.  WesBos has a beautiful and in-depth section on scopes and closures. Please check out these sections under “Module 3 - The Tricky Bits”:
    *   [The article on scope](https://wesbos.com/javascript/03-the-tricky-bits/scope) :white_check_mark:
    *   [The article on closures](https://wesbos.com/javascript/03-the-tricky-bits/closures) :white_check_mark:
2.  Read this article on [module pattern in JavaScript](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm) by Tomek Buszewski. :white_check_mark:
3.  As an optional alternative, in case you prefer video lessons, this [YouTube series on module pattern](https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f) covers most of the content that we have discussed. Note that the videos include jQuery, but you don’t need to understand the jQuery syntax since the focus is on the module pattern concept. :white_check_mark:

### [Knowledge check](#knowledge-check)

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

*   [How does scope work in JavaScript?](#scoopfuls-of-scopes)
*   [What are closures and how do they help in creating private variables?](#closures-arent-scary)
*   [What common issues can you face when working with constructors?](#so-whats-wrong-with-constructors)
*   [What are private variables in factory functions and how can they be useful?](#private-variables-and-functions)
*   [How can we implement prototypal inheritance with factory functions?](#prototypal-inheritance-with-factories)
*   [How does the module pattern work?](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)
*   [What does IIFE stand for and what are they?](#the-module-pattern-iifes)
*   [What is the concept of namespacing and how do factory functions help with encapsulation?](#encapsulating-with-the-module-pattern)

### [Additional resources](#additional-resources)

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

*   This video explains [a good example of closures](https://www.youtube.com/watch?v=80O6L2Ez3GM).
*   Here is an [interactive scrim on factory functions](https://v1.scrimba.com/scrim/c2aaKzcV).
*   This article discusses [three different kinds of prototypal inheritance](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9) with some good examples.
*   [Learning JavaScript Design Patterns by Addy Osmani and Lydia Hallie](https://www.patterns.dev/)
