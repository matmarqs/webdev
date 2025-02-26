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

## Assignment

1. Read up on the concept of the prototype from the articles below. <++> :rocket:
    - Read the article <a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" target="_blank" rel="noopener noreferrer">Understanding Prototypes and Inheritance in JavaScript</a> from Digital Ocean. This is a good review of prototype inheritance and constructor functions, featuring some examples.
    - To go a bit deeper into both the chain and inheritance, spend some time with <a href="http://javascript.info/prototype-inheritance" target="_blank" rel="noopener noreferrer">JavaScript.Info’s article on Prototypal Inheritance</a>. As usual, doing the exercises at the end will help cement this knowledge in your mind. Don’t skip them! Important note: This article makes heavy use of `__proto__` which is not generally recommended. The concepts here are what we’re looking for at the moment. We will soon learn another method or two for setting the prototype.

2. You might have noticed us using the `this` keyword in object constructors and prototype methods in the examples above.
    - <a href="https://www.javascripttutorial.net/javascript-this/" target="_blank" rel="noopener noreferrer">JavaScript Tutorial’s article on the `this` keyword</a> covers how `this` changes in various situations. Pay special attention to the pitfalls mentioned in each section.
    - Read the article <a href="https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8" target="_blank" rel="noopener noreferrer">[[Prototype]] vs **proto** vs .prototype in Javascript</a>

## Knowledge check

* How do you write an object constructor and instantiate the object?



* What is a prototype and how can it be used?



* What is prototypal inheritance?



* What are the basic do’s and don’t’s of prototypal inheritance?



* How does this behave in different situations?



## Additional resources

*   This [`Object.create` method video by techsith](https://www.youtube.com/watch?v=MACDGu96wrA) provides another point of view on how to use `Object.create` to extend objects by setting the prototype.
*   The first answer on this StackOverflow question regarding [defining methods via the prototype vs in the constructor](https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864) helps explain when you might want to use one over the other.
*   [Interactive Scrim on objects and object constructors.](https://scrimba.com/scrim/co2624f87981575448091d5a2)
*   Check out this video explanation on the [`this` keyword from DevSage](https://www.youtube.com/watch?v=cwChC4BQF0Q) that gives a different perspective on how its context changes, as well as scenarios in which `this` behaves unexpectedly.
