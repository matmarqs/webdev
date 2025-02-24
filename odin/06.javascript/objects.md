# Object Basics

1. This JavaScript.info <a href="https://javascript.info/object" target="_blank" rel="noopener noreferrer">article on objects</a> is the best place to get started. <++> :rocket:
2. The <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics" target="_blank" rel="noopener noreferrer">MDN tutorial on objects</a> isn’t bad either, so check it out if you need another take on the subject. <++> :rocket:

## Objects

An empty object can be created using one of two syntaxes:
```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

We can immediately put some properties into `{...}` as “key: value” pairs:
```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

```js
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
```

The value can be of any type. Let’s add a boolean one:
```js
user.isAdmin = true;
```

To remove a property, we can use the `delete` operator:
```js
delete user.age;
```

We can also use multiword property names, but then they must be quoted:
```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```

The last property in the list may end with a comma:
```js
let user = {
  name: "John",
  age: 30,
}
```

For multiword properties, the dot access doesn’t work:
```js
// this would give a syntax error
user.likes birds = true
```

There’s an alternative “square bracket notation” that works with any string:
```js
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.
```js
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
```

The dot notation cannot be used in a similar way.

### Computed properties

We can use square brackets in an object literal, when creating an object. That’s called computed properties.
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

Essentially, that works the same as:
```js
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

We can use more complex expressions inside square brackets:
```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

### Property value shorthand

In real code, we often use existing variables as values for property names.
```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special *property value shorthand* to make it shorter.

Instead of `name:name` we can just write `name`, like this:
```js
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
```

We can use both normal properties and shorthands in the same object:
```js
let user = {
  name,  // same as name:name
  age: 30
};
```

### Property names limitations

As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:
```js
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```

In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

Other types are automatically converted to strings.

For instance, a number `0` becomes a string `"0"` when used as a property key:
```js
let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)
```

There’s a minor gotcha with a special property named `__proto__`. We can’t set it to a non-object value:
```js
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object]
// the value is an object, didn't work as intended
```

As we see from the code, the assignment to a primitive `5` is ignored.

We’ll cover the special nature of `__proto__` in subsequent chapters, and suggest the ways to fix such behavior.

### Property existence test, “in” operator

A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns `undefined`. So we can easily test whether the property exists:
```js
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

There’s also a special operator `"in"` for that.

The syntax is:
```js
"key" in object
```

For instance:
```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

Why does the in operator exist? Isn’t it enough to compare against `undefined`?

Well, most of the time the comparison with `undefined` works fine. But there’s a special case when it fails, but `"in"` works correctly.

It’s when an object property exists, but stores `undefined`:
```js
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```

Situations like this happen very rarely, because `undefined` should not be explicitly assigned. We mostly use `null` for “unknown” or “empty” values. So the `in` operator is an exotic guest in the code.

### The "for..in" loop

The syntax:
```js
for (key in object) {
  // executes the body for each key among object properties
}
```

Note that all “for” constructs allow us to declare the looping variable inside the loop, like `let key` here.

Also, we could use another variable name here instead of `key`. For instance, `"for (let prop in obj)"` is also widely used.

### Ordered like an object

Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes:
```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

The phone codes go in the ascending sorted order, because they are integers. So we see `1, 41, 44, 49`.

…On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
```js
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus `"+"` sign before each code is enough.
```js
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

## MDN Object Basics


```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

When the object's members are functions there's a simpler syntax. Instead of `bio: function ()` we can write `bio()`. Like this:
```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

### What is "this"?

You are probably wondering what "this" is. The `this` keyword typically refers to the current object the code is being executed in. In the context of an object method, `this` refers to the object that the method was called on.

This isn't hugely useful when you are writing out object literals by hand, as using the object's name leads to the exact same result, but it will be essential when we start using constructors to create more than one object from a single object definition.

### Introducing constructors

Using object literals is fine when you only need to create one object, but if you have to create more than one, as in the previous section, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object -- like adding a `height` property -- then we have to remember to update every object.

We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

The first version of this is just a function:
```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```
This function creates and returns a new object each time we call it.

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the `new` keyword. When you call a constructor, it will:
* create a new object
* bind `this` to the new object, so you can refer to `this` in your constructor code
* run the code in the constructor
* return the new object.

Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this:
```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

To call `Person()` as a constructor, we use `new`:
```js
const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## `map`, `filter` and `reduce`

`map`:
```js
let numbers = [1,2,3,4,5]
let squaredNumbers = numbers.map((x) => x*x) // [1,4,9,16,25]
```

`filter`:
```js
let numbers = [1,2,3,4,5]
let oddNumbers = numbers.filter((x) => x % 2 == 1) // [1,3,5]
```

`reduce`:
```js
let numbers = [1,2,3,4,5]
// arr.reduce(callback(accumulator, currentValue), initialValueOfAccumulator)
// initialValueOfAccumulator is optional
// when not set it will be accumulator starts as arr[0]
let sumOfNumbers = numbers.reduce((t,x) => t+x) // 10
let a = numbers.reduce((t,x) => t+x, 10) // sumOfNumbers + 10 = 20
let multipliedNumber = numbers.reduce((t,x) => t*x) // 120
```

## Assignment

1. Read through the <a href="https://javascript.info/array-methods" target="_blank" rel="noopener noreferrer">array method guide</a> for a comprehensive overview of array methods in JavaScript. Complete the exercises at the end, except for “Create an extendable calculator,” as it involves more advanced concepts that we have not yet covered. :white_check_mark:
2. Follow up by watching <a href="https://www.youtube.com/watch?v=HB1ZC7czKRs" target="_blank" rel="noopener noreferrer">JavaScript Array Cardio Practice - Day 1</a> by Wes Bos. To follow along, fork and clone the <a href="https://github.com/wesbos/JavaScript30" target="_blank" rel="noopener noreferrer">JavaScript30 repository</a>. :white_check_mark:
3. Watch and code along with <a href="https://www.youtube.com/watch?v=QNmRfyNg1lw" target="_blank" rel="noopener noreferrer">Array Cardio Day 2</a>. :white_check_mark:
4. At this point you just need a little more practice! Go back to the <a href="https://github.com/TheOdinProject/javascript-exercises" target="_blank" rel="noopener noreferrer">JavaScript exercises repository</a> that we introduced in the <a href="https://www.theodinproject.com/lessons/foundations-arrays-and-loops" target="_blank" rel="noopener noreferrer">Arrays and Loops</a> assignment. Review each README file prior to completing the following exercises in order: :white_check_mark:
    - `08_calculator`
    - `09_palindromes`
    - `10_fibonacci`
    - `11_getTheTitles`
    - `12_findTheOldest`

## Knowledge check

* What is the difference between objects and arrays

Arrays are objects, but have a specific constructor `Array()` and have their methods.

* How do you access object properties

`obj.property` or `obj["property"]`.

* How do primitives and object types differ when you assign them to other variables, or pass them into functions

Primitive values are copied, and objects are just passed by reference.

* What is `Array.prototype.map()` useful for

To transform each element of the array.

* What is `Array.prototype.filter()` useful for

To filter elements of the array.

* What is `Array.prototype.reduce()` useful for

To perform a cumulative calculation on the array.

