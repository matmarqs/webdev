# Objects and Object Constructors

## Objects as a design pattern

One of the simplest ways you can begin to organize your code is by grouping things into objects. Take these examples from a ‘tic tac toe’ game:
```js
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};
```

At first glance, the first doesn’t seem so bad… and it actually takes fewer lines to write than the example using objects, but the benefits of the second approach are huge! Let me demonstrate:
```js
function printName(player) {
  console.log(player.name);
}
```

This is something that you just could NOT do with the example one setup. Instead, every time you wanted to print a specific player’s name, you would have to remember the correct variable name and then manually `console.log` it:
```js
console.log(playerOneName);
console.log(playerTwoName);
```

Again, this isn’t that bad… but what if you don’t know which player’s name you want to print?
```js
function gameOver(winningPlayer){
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner!");
}
```

Or, what if we aren’t making a 2 player game, but something more complicated such as an online shopping site with a large inventory? In that case, using objects to keep track of an item’s name, price, description and other things is the only way to go. Unfortunately, in that type of situation, manually typing out the contents of our objects is not feasible either. We need a cleaner way to create our objects, which brings us to…

## Object constructors

When you have a specific type of object that you need to duplicate like our player or inventory items, a better way to create them is using an object constructor, which is a function that looks like this:
```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
```

and which you use by calling the function with the keyword `new`.
```js
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
```

Just like with objects created using the Object Literal method, you can add functions to the object:
```js
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```

## The prototype

All objects in JavaScript have a `prototype`. The `prototype` is another object that the original object inherits from, which is to say, the original object has access to all of its `prototype`’s methods and properties.

1. All objects in JavaScript have a prototype

Pretty straightforward sentence here! Every object in JavaScript has a prototype. So for example, the `player1` and `player2` objects from before, (created with the `Player(name, marker)` object constructor) also have a `prototype`. Now, what does having a `prototype` mean? What even is a `prototype` of an object?

2. The prototype is another object

This sentence also seems pretty straightforward! The `prototype` is just another object - again, like the `player1` and the `player2` objects. The `prototype` object can have properties and functions, just as these `Player` objects have properties like `.name`, `.marker`, and functions like `.sayName()` attached to them.

3. …that the original object inherits from, and has access to all of its prototype’s methods and properties

Here, the “original object” refers to an object like `player1` or `player2`. These objects are said to “inherit”, or in other words, these objects have access to the `prototype`’s properties or functions, if they have been defined. For example, if there was a `.sayHello()` function defined on the `prototype`, `player1` can access the function just as if it was its own function - `player1.sayHello()`. But it’s not just `player1` who can call the `.sayHello()` function, even `player2` can call it, since it’s defined on the `prototype`! Read on to know the details of how it works and how you could do this yourself!

### Accessing an object’s prototype

Conceptually, you now might feel like you know, or at least have an idea of what a `prototype` of an object is. But how do you know or actually see what the prototype of an object is? Let’s find out. You can try running the following code in the developer console of your browser. (Make sure you’ve created the `player1` and `player2` objects from before!)
```js
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
```

1. **All objects in JavaScript have a `prototype`**:

    - You can check the object’s `prototype` by using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" target="_blank" rel="noopener noreferrer">`Object.getPrototypeOf()`</a> function on the object, like `Object.getPrototypeOf(player1)`.
    - The return value (result) of this function refers to the `.prototype` property of the Object Constructor (i.e., `Player(name, marker)`) - `Object.getPrototypeOf(player1) === Player.prototype`.


2. **The prototype is another object…**

    - The *value* of the Object Constructor’s `.prototype` property (i.e., `Player.prototype`) contains the `prototype` object.
        The *reference* to this value of `Player.prototype` is stored in every `Player` object, every time a `Player` object is created.
    - Hence, you get a `true` value returned when you check the Objects prototype - `Object.getPrototypeOf(player1) === Player.prototype`.


3. **…that the original object *inherits* from, and has access to all of its prototype’s methods and properties**:

    - As said in the earlier point, every `Player` object has a value which refers to `Player.prototype`. So: `Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2)` (returns `true`).
    - So, any properties or methods defined on `Player.prototype` will be available to the created `Player` objects!

The last sub-item needs a little more explanation. What does defining ‘on the `prototype`’ mean? Consider the following code:
```js
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
```

Here, we defined the `.sayHello` function ‘on’ the `Player.prototype` object. It then became available for the `player1` and the `player2` objects to use! Similarly, you can attach other properties or functions you want to use on all `Player` objects by defining them on the objects’ prototype (`Player.prototype`).

### `Object.getPrototypeOf()` vs. `.__proto__` vs. `[[Prototype]]`

Unlike what we have done so far using `Object.getPrototypeOf()` to access an object’s `prototype`, the same thing can also be done using the `.__proto__` property of the object. However, this is a non-standard way of doing so, and **deprecated**. Hence, it is not recommended to access an object’s `prototype` by using this property. However, the same code can thus be rewritten to become:
```js
// Don't do this!
player1.__proto__ === Player.prototype; // returns true
player2.__proto__ === Player.prototype; // returns true
```

In some places, like legacy code, you might also come across `[[Prototype]]`, which is just another way of talking about the `.__proto__` property of an object, like `player1.[[Prototype]]`.

### Prototypal inheritance

Now, you may also have a question - what use is an object’s `prototype`? What is the purpose of defining properties and functions on the `prototype`?

We can narrow it down to two reasons:
1. We can define properties and functions common among all objects on the `prototype` to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
2. The second reason is the name of this section, **Prototypal Inheritance**, which we’ve referred to in passing earlier, in the introduction to the Prototype. In recap, we can say that the `player1` and `player2` objects *inherit* from the `Player.prototype` object, which allows them to access functions like `.sayHello`.

Let’s now try to do the following:
```js
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
```

What’s this `.valueOf` function, and where did it come from if we did not define it? It comes as a result of `Object.getPrototypeOf(Player.prototype)` having the value of `Object.prototype`! This means that `Player.prototype` is inheriting from `Object.prototype`. This `.valueOf` function is defined on `Object.prototype` just like `.sayHello` is defined on `Player.prototype`.

How do we know that this `.valueOf` function is defined on `Object.prototype`? We make use of another function called `.hasOwnProperty`:
```js
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```

Now where did this `.hasOwnProperty` function come from? A quick check helps:
```js
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
```

Essentially, this is how JavaScript makes use of `prototype` - by having the objects contain a value - to point to `prototype`s and inheriting from those prototypes, and thus forming a chain. This kind of inheritance using prototypes is hence named as Prototypal inheritance. JavaScript figures out which properties exist (or do not exist) on the object and starts traversing the chain to find the property or function.

However, this chain does not go on forever, and if you have already tried logging the value of `Object.getPrototypeOf(Object.prototype)`, you would find that it is `null`, which indicates the end of the chain. And it is at the end of this chain that if the specific property or function is not found, `undefined` is returned.

### Recommended method for prototypal inheritance

Now, how do you utilize Prototypal Inheritance? What do you need to do to use it? Just as we use `Object.getPrototypeOf()` to ‘get’ or view the `prototype` of an object, we can use `Object.setPrototypeOf()` to ‘set’ or mutate it. Let’s see how it works by adding a `Person` Object Constructor to the `Player` example, and making `Player` inherit from `Person`!
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
```

Though it seems to be an easy way to set up Prototypal Inheritance using `Object.setPrototypeOf()`, the prototype chain has to be set up using this function **before** creating any objects. Using `setPrototypeOf()` after objects have already been created can result in performance issues.

A warning… this doesn’t work:
```js
Player.prototype = Person.prototype;
```

because it will set `Player.prototype` to directly refer to `Person.prototype` (i.e. not a copy), which could cause problems if you want to edit something in the future. Consider one more example:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Don't do this!
// Use Object.setPrototypeOf(Player.prototype, Person.prototype)
Player.prototype = Person.prototype;

function Enemy(name) {
  this.name = name;
  this.marker = '^';
}

// Not again!
// Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
Enemy.prototype = Person.prototype;

Enemy.prototype.sayName = function() {
  console.log('HAHAHAHAHAHA');
};

const carl = new Player('carl', 'X');
carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
```

If we had used `Object.setPrototypeOf()` in this example, then we could safely edit the `Enemy.prototype.sayName` function without changing the function for `Player` as well.

### Constructors

```js
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}
```

This is good, but now we want to create character classes for the heroes to use. It wouldn’t make sense to put all the abilities for every class into the `Hero` constructor, because different classes will have different abilities. We want to create new constructor functions, but we also want them to be connected to the original `Hero`.

We can use the `call()` method to copy over properties from one constructor into another constructor. Let’s create a Warrior and a Healer constructor.
```js
...
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}
```

But what happens if we try to use methods further down the prototype chain?
```js
hero1.greet();
```
```txt
Uncaught TypeError: hero1.greet is not a function
```

Prototype properties and methods are not automatically linked when you use `call()` to chain constructors. We will use `Object.setPropertyOf()` to link the properties in the `Hero` constructor to the `Warrior` and `Healer` constructors, making sure to put it before any additional methods.
```js
...
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below
...
```

Now we can successfully use prototype methods from `Hero` on an instance of a `Warrior` or `Healer`.
```js
hero1.greet();
```
```txt
"Bjorn says hello."
```

Here is the full code for our character creation page.
```js
// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
```

### `this` keyword

#### Global context

In the global context, the `this` references the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/), which is the `window` object on the web browser or `global` object on Node.js.

This behavior is consistent in both strict and non-strict modes. Here’s the output on the web browser:

```js
console.log(this === window); // true
```

If you assign a property to `this` object in the global context, JavaScript will add the property to the global object as shown in the following example:

```js
this.color= 'Red';
console.log(window.color); // 'Red'
```

#### Function context

In JavaScript, you can call a [function](https://www.javascripttutorial.net/javascript-function/) in the following ways:

*   Function invocation
*   Method invocation
*   Constructor invocation
*   Indirect invocation

Each function invocation defines its own context. Therefore, the `this` behaves differently.

#### 1) Simple function invocation

In the non-strict mode, the `this` references the global object when the function is called as follows:

```js
function show() {
  console.log(this === window); // true
}
show();
```

When you call the `show()` function, the `this` references the [global object](https://www.javascripttutorial.net/es-next/javascript-globalthis/), which is the `window` on the web browser and `global` on Node.js.

Calling the `show()` function is the same as:

```js
window.show();
```

In the strict mode, JavaScript sets the `this` inside a function to `undefined`. For example:

```js
"use strict";
function show() {
  console.log(this === undefined);
}
show();`
```

To enable the strict mode, you use the directive `"use strict"` at the beginning of the JavaScript file. If you want to apply the strict mode to a specific function only, you place it at the top of the function body.

Note that the strict mode has been available since ECMAScript 5.1. The `strict` mode applies to both function and nested functions. For example:

```js
"use strict";

function show() {
    console.log(this === undefined);
}

show();
```

Output:

```js
true
true
```

In the `display()` inner function, the `this` also set to `undefined` as shown in the console.

### 2) Method invocation

When you call a method of an object, JavaScript sets `this` to the object that owns the method. See the following `car` object:
```js
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda
```

In this example, the `this` object in the `getBrand()` method references the `car` object.

Since a method is a property of an object which is a value, you can store it in a variable.

```js
let brand = car.getBrand;
```

And then call the method via the variable

```js
console.log(brand()); // undefined
```

You get `undefined` instead of `"Honda"` because when you call a method without specifying its object, JavaScript sets `this` to the global object in non-strict mode and `undefined` in the strict mode.

To fix this issue, you use the `[bind()](https://www.javascripttutorial.net/javascript-bind/)` method of the `Function.prototype` object. The `bind()` method creates a new function whose the `this` keyword is set to a specified value.

```js
let brand = car.getBrand.bind(car);
console.log(brand()); // Honda
```


In this example, when you call the `brand()` method, the `this` keyword is bound to the `car` object. For example:

```js
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

let brand = car.getBrand.bind(bike);
console.log(brand());
```

Output:

`Harley Davidson`

In this example, the `bind()` method sets the `this` to the `bike` object, therefore, you see the value of the `brand` property of the `bike` object on the console.

### 3) Constructor invocation

When you use the `new` keyword to create an instance of a function object, you use the function as a constructor.

The following example declares a `Car` function, and then invokes it as a constructor:

```js
function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());
```

The expression `new Car('Honda')` is a constructor invocation of the `Car` function.

JavaScript creates a new object and sets `this` to the newly created object. This pattern works great with only one potential problem.

Now, you can invoke the `Car()` as a function or as a constructor. If you omit the `new` keyword as follows:

```js
var bmw = Car('BMW');
console.log(bmw.brand);
// => TypeError: Cannot read property 'brand' of undefined
```

Since the `this` value in the `Car()` sets to the global object, the `bmw.brand` returns `undefined`.

To make sure that the `Car()` function is always invoked using constructor invocation, you add a check at the beginning of the `Car()` function as follows:

```js
function Car(brand) {
    if (!(this instanceof Car)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
```

ES6 introduced a meta-property named [`new.target`](https://www.javascripttutorial.net/es6/javascript-new-target/) that allows you to detect whether a function is invoked as a simple invocation or as a constructor.

You can modify the `Car()` function that uses the `new.target` metaproperty as follows:

```js
function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
```

### 4) Indirect Invocation

In JavaScript, [functions are first-class citizens](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/). In other words, functions are objects, which are instances of the [Function type](https://www.javascripttutorial.net/javascript-function-type/).

The `Function` type has two methods: `[call()](https://www.javascripttutorial.net/javascript-call-function/)` and `[apply()](https://www.javascripttutorial.net/javascript-apply-method/)` . These methods allow you to set the `this` value when calling a function. For example:

```js
function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");
```

Output:

```txt
It's a Honda
It's an Audi
```

In this example, we called the `getBrand()` function indirectly using the `call()` method of the `getBrand` function. We passed `honda` and  `audi` object as the first argument of the `call()` method, therefore, we got the corresponding brand in each call.

The `apply()` method is similar to the `call()` method except that its second argument is an array of arguments.

```js
getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"
```

#### Arrow functions

[ES6](https://www.javascripttutorial.net/es6/) introduced a new concept called the [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/). In arrow functions, JavaScript sets the `this` lexically.

It means the arrow function does not create its own [execution context](https://www.javascripttutorial.net/javascript-execution-context/) but inherits the `this` from the outer function where the arrow function is defined. See the following example:

```js
let getThis = () => this;
console.log(getThis() === window); // true
```

In this example, the `this` value is set to the global object i.e., `window` in the web browser.

Since an arrow function does not create its own execution context, defining a method using an arrow function will cause an issue. For example:

```js
function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

var car = new Car();
console.log(car.getSpeed()); // 👉 undefined
```
`function Car() {   this.speed = 120; }  Car.prototype.getSpeed = () => {   return this.speed; };  var car = new Car(); console.log(car.getSpeed()); // 👉 undefined`

Inside the `getSpeed()` method, the `this` value reference the global object, not the `Car` object but the global object doesn’t have a property called speed. Therefore, the `this.speed` in the `getSpeed()` method returns `undefined`.

## Assignment

1. Read up on the concept of the prototype from the articles below. :white_check_mark:
    - Read the article <a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" target="_blank" rel="noopener noreferrer">Understanding Prototypes and Inheritance in JavaScript</a> from Digital Ocean. This is a good review of prototype inheritance and constructor functions, featuring some examples. :white_check_mark:
    - To go a bit deeper into both the chain and inheritance, spend some time with <a href="http://javascript.info/prototype-inheritance" target="_blank" rel="noopener noreferrer">JavaScript.Info’s article on Prototypal Inheritance</a>. As usual, doing the exercises at the end will help cement this knowledge in your mind. Don’t skip them! Important note: This article makes heavy use of `__proto__` which is not generally recommended. The concepts here are what we’re looking for at the moment. We will soon learn another method or two for setting the prototype. :white_check_mark:

2. You might have noticed us using the `this` keyword in object constructors and prototype methods in the examples above. :white_check_mark:
    - <a href="https://www.javascripttutorial.net/javascript-this/" target="_blank" rel="noopener noreferrer">JavaScript Tutorial’s article on the `this` keyword</a> covers how `this` changes in various situations. Pay special attention to the pitfalls mentioned in each section. :white_check_mark: Muito bom!

3. Read the article <a href="https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8" target="_blank" rel="noopener noreferrer">[[Prototype]] vs **proto** vs .prototype in Javascript</a> :white_check_mark: Muito bom!

## Knowledge check

* How do you write an object constructor and instantiate the object?

```js
function ObjConstructor() {
  this.name = "Slim Shady";
  this.info = function () {
    return `My name is ${this.name}`;
  }
}

let eminem = new ObjConstructor();
```

* What is a prototype and how can it be used?

The `[[Prototype]]` is a hidden property of every object that points to another object that the first one inherits from.

* What is prototypal inheritance?

Is the phenomenon of recursively inherinting the methods and properties of its prototype.

* What are the basic do’s and don’t’s of prototypal inheritance?

It is not recommended to use `.__proto__` as it's deprecated. Do not set
```js
Player.prototype = Person.prototype;
```
because it could cause problems. It is recommended to:
```js
Object.setPrototypeOf(Player.prototype, Person.prototype)
```

Also, using `setPrototypeOf()` after objects have already been created can result in performance issues.

* How does this behave in different situations?



## Additional resources

*   This [`Object.create` method video by techsith](https://www.youtube.com/watch?v=MACDGu96wrA) provides another point of view on how to use `Object.create` to extend objects by setting the prototype.
*   The first answer on this StackOverflow question regarding [defining methods via the prototype vs in the constructor](https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864) helps explain when you might want to use one over the other.
*   [Interactive Scrim on objects and object constructors.](https://scrimba.com/scrim/co2624f87981575448091d5a2)
*   Check out this video explanation on the [`this` keyword from DevSage](https://www.youtube.com/watch?v=cwChC4BQF0Q) that gives a different perspective on how its context changes, as well as scenarios in which `this` behaves unexpectedly.
