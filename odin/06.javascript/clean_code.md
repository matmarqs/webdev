# Clean Code

## Lesson overview

* Know how to distinguish hard to read code from easy to read code.
* Use programming principles to make your code cleaner.
* Write good comments.

### What is clean code?

Example A:
```js
const x= function (z){
   const w = "Hello ";
return w +  z

 }

x("John");
```

Example B:
```js
const generateUserGreeting = function (name) {
  const greeting = "Hello ";
  return greeting + name;
};

generateUserGreeting("John");
```

### Naming functions and variables

```js
// Consistent naming
function getPlayerScore();
function getPlayerName();
function getPlayerTag();

// Inconsistent naming
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();
```

Variables should preferably begin with a noun or an adjective (that is, a noun phrase), as they typically represent “things”, whether that thing is a string, a number etc. Functions represent actions so ideally begin with a verb.

```js
// Preferable
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Not preferable (these start with verbs, could be confused for functions)
const getCount = 10;
const showNorseGods = ["Odin", "Thor", "Loki"];

// Preferable
function getCount() {
  return numberOfThings;
}

// Not preferable (myName doesn't represent some kind of action)
function myName() {
  return "Thor";
}
```

### Use searchable and immediately understandable names

```js
// Not preferable
setTimeout(stopTimer, 3600000);
```

```js
// Preferable
const ONE_HOUR = 3600000; // Can even write as 60 * 60 * 1000;

setTimeout(stopTimer, ONE_HOUR);
```

You might wonder why this variable is declared with all caps when we recommended camelCase earlier. This is a convention to be used when the programmer is absolutely sure that the variable is truly a constant, especially if it represents some kind of concept like a specific duration of time.

### Indentation and line length

Now it’s time to head to more “controversial” topics (there’s a joke about the <a href="https://www.reddit.com/r/programming/comments/p1j1c/tabs_vs_spaces_vs_both/" target="_blank" rel="noopener noreferrer">war between coders who indent with spaces versus tabs</a>).

#### Line length

Generally, your code will be easier to read if you manually break lines that are longer than about 80 characters. Many code editors have a line in the display to show when you have crossed this threshold. When manually breaking lines, you should try to break immediately after an operator or comma.
```js
// This line is a bit too long
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// You could format it like this
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Or maybe like this
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                  howManyTacos + oneMoreReallyLongThing;
```

### Semicolons

Semicolons are mostly optional in JavaScript because the JavaScript interpreter will automatically insert them if they are omitted. This functionality can break in certain situations, leading to bugs in your code, so we’d recommend getting used to adding semicolons.

Whether you do or not, again, consistency is the main thing.

### About comments

Comments are a great tool but like any good tool, they can be misused. Especially for someone early in their coding journey, it might be tempting to have comments that explain everything the code is doing. This is generally not a good practice. Let’s look at some common pitfalls when commenting and why they are pitfalls.

#### Don’t comment when you should be using git

It might be tempting to have comments in your code that explain the changes or additions you have made. For example:
```js
/**
 * 2023-01-10: Removed unnecessary code that was causing confusion (RM)
 * 2023-03-05: Simplified the code (JP)
 * 2023-05-15: Removed functions that were causing bugs in production (LI)
 * 2023-06-22: Added a new function to combine values (JR)
 */
```

All this information will be neatly organized in the repository and readily accessible with `git log`.

The same applies to code that is no longer used. If you need it again in the future, just turn to your git commits. Commenting out something while testing something else is, of course, ok, but once a piece of code is not needed, just delete it. Don’t have something like this hanging around in your files:
```js
theFunctionInUse();
// oldFunction();
// evenOlderUselessFunction();
// whyAmIEvenHereImAncient():
```

#### Tell why, not how

Ideally, comments do not provide pseudocode that duplicates your code. Good comments explain the reasons behind a piece of code. Sometimes you won’t even need a comment at all!

```js
// Not preferable
// Function to extract text
function extractText(s) {
  // Return the string starting after the "[" and ending at "]"
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

Slightly more useful comments could explain the reasons behind the code.

```js
// More useful
// Extracts text inside square brackets (excluding the brackets)
function extractText(s) {
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}
```

But often, we can make the code speak for itself without comments.
```js
function extractTextWithinBrackets(text) {
  const bracketTextStart = text.indexOf("[") + 1;
  const bracketTextEnd = text.indexOf("]");
  return text.substring(bracketTextStart, bracketTextEnd);
}
```

This doesn’t mean good code should lack comments. Let’s look at an example where a comment serves a helpful purpose:
```js
function calculateBMI(height, weight) {
  // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

### In conclusion

Don’t try to write perfectly clean code, this will only lead to frustration. Writing “spaghetti” is inevitable; everyone does it sometimes. Just keep these ideas in mind, and with time and patience, your code will start to get cleaner.

## Assignment

* Read <a href="https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/" target="_blank" rel="noopener noreferrer">10 Principles for Keeping Your Programming Code Clean</a> to get some great tips for clean code. :white_check_mark:
* To help better understand good comment practices, read about <a href="https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/" target="_blank" rel="noopener noreferrer">comments telling us why code works</a> as well as how to <a href="https://blog.codinghorror.com/coding-without-comments/" target="_blank" rel="noopener noreferrer">code without comments</a>. :white_check_mark:

## Knowledge check

* Why is it important to write clean code?

Because everybody will have to read code from others at some point in life. Also you will read code from youself.

* What are some good principles for keeping code clean?

Naming variables meaningfully, consistency, good comments, searchable names.

* What is the difference between good comments and bad comments?

Good comments actually serve a purpose to explain why the code is there. If the code is already well written, comments are not essential.
