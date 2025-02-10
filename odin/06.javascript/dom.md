# DOM Manipulation and Events

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document. There are many types of nodes, most of which are not commonly used. In this lesson we will be focusing on “element” nodes which are primarily used for manipulating the DOM.

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

When working with the DOM, you use “selectors” to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Let’s start with CSS-style selectors. In the above example, you could use the following selectors to refer to `<div class="display"></div>`:
* div.display
* .display
* #container > .display
* div#container > div.display

You can also use relational selectors (i.e., firstElementChild or lastElementChild, etc.) with special properties owned by the nodes.
```js
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>
```

```js
// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display = controls.previousElementSibling;
console.log(display); // <div class="display"></div>
```
So you’re identifying a certain node based on its relationships to the nodes around it.

### DOM Methods

When your HTML code is parsed by a web browser, it is converted to the DOM, as was mentioned above. One of the primary differences is that these nodes are JavaScript objects that have many properties and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript.

Query selectors:

* element.querySelector(selector) - returns a reference to the first match of selector.

* element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.

It’s important to remember that when using `querySelectorAll`, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “NodeList”. The big distinction is that several array methods are missing from NodeLists. One solution, if problems arise, is to convert the NodeList into an array. You can do this with `Array.from()` or the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank" rel="noopener noreferrer">spread operator</a>.

#### Element creation

```js
const div = document.createElement("div");
```

This function does NOT put your new element into the DOM - it creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.

#### Append element

* `parentNode.appendChild(childNode)` - appends `childNode` as the last child of parentNode.

* `parentNode.insertBefore(newNode, referenceNode)` - inserts `newNode` into `parentNode` before `referenceNode`.

#### Remove elements

* `parentNode.removeChild(child)` - removes `child` from `parentNode` on the DOM and returns a reference to `child`.

#### Altering elements

##### Adding inline style

```js
// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");
```

##### Editing attributes

```js
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
```

##### Adding text content

```js
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";
```

##### Adding HTML content

```js
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";
```

Note that using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks. To understand the dangers of using innerHTML, watch this <a href="https://youtube.com/watch?v=ns1LX6mEvyM" target="_blank" rel="noopener noreferrer">video about preventing the most common cross-site scripting attack</a>.

#### Example:

```html
<!-- your HTML file: -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container"></div>
</body>
```

```js
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
```

After the JavaScript code is run, our DOM tree will look like this:
```html
<!-- The DOM -->
<body>
  <h1>THE TITLE OF YOUR WEBPAGE</h1>
  <div id="container">
    <div class="content">This is the glorious text-content!</div>
  </div>
</body>
```

Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

Your JavaScript, for the most part, is run whenever the JS file is run or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run *before* the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

Alternatively, you can link the JavaScript file in the `<head>` of your HTML document. Use the `<script>` tag with the `src` attribute containing the path to the JS file, and include the `defer` keyword to load the file *after* the HTML is parsed, as such:

```js
<head>
  <script src="js-file.js" defer></script>
</head>
```

The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

#### Exercise :white_check_mark:

Copy the example above into files on your own computer. To make it work, you’ll need to supply the rest of the HTML skeleton and either link your JavaScript file or put the JavaScript into a script tag on the page. Make sure everything is working before moving on!

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:


* a `` with red text that says “Hey I’m red!”
* an `<h3>` with blue text that says “I’m a blue h3!”
* a `<div>` with a black border and pink background color with the following elements inside of it:
  - another `<h1>` that says “I’m in a div”
  - a `` that says “ME TOO!”
  - Hint for this one: after creating the `<div>` with createElement, append the `<h1>` and `` to it before adding it to the container.

### Events

Events are actions that occur on your webpage, such as mouse-clicks or key-presses. Using JavaScript, we can make our webpage listen to and react to these events.

There are three primary ways to go about this:

* You can specify function attributes directly on your HTML elements.
* You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
* You can attach event listeners to the DOM nodes in your JavaScript.

We’re going to create three buttons that all alert “Hello World” when clicked.

#### Method 1

```js
<button onclick="alert('Hello World')">Click Me</button>
```
This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.

```html
<!-- the HTML file -->
<button id="btn">Click Me</button>
```

#### Method 2

```js
// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
```
This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have one “onclick” property.

#### Method 3

```html
<!-- the HTML file -->
<button id="btn">Click Me Too</button>
```

```js
// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
```
Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.


With all three methods, we can access more information about the event by passing a parameter to the function that we are calling. Try this out on your own machine:
```js
btn.addEventListener("click", function (e) {
  console.log(e);
});
```

The `e` parameter in that callback function contains an object that references the **event** itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s **target** - the DOM node that was clicked. JavaScript knows the parameter is an event because an event listener callback takes an `Event` object by definition. When the callback is run, the event handler passes in its own reference to the event. You can read more about the event objects on <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects" target="_blank" rel="noopener noreferrer">MDN’s introduction to events</a>.

#### Attaching listeners to groups of nodes

We learned above that we can get a NodeList of all of the items matching a specific selector with `querySelectorAll('selector')`. In order to add a listener to each of them, we need to iterate through the whole list, like so:
```html
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div>
```

```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
```

## Assignment

Manipulating web pages is the primary benefit of the JavaScript language! These techniques are things that you are likely to be messing with <em>every day</em> as a front-end developer, so let’s practice!


1. Complete <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation" target="_blank" rel="noopener noreferrer">MDN’s Active Learning sections on DOM manipulation</a> to test your skills! :rocket: I am doing this on `~/Workspace/dom_manipulation`. <++>

2. Read the following sections from JavaScript Tutorial’s series on the DOM to get a broader idea of how events can be used in your pages. Note that some of the methods like `getElementById` are older and see less use today.

As you read, remember that the general ideas can be applied to any event, not only the ones used in examples - but information specific to a certain event type can always be found by checking documentation.
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-events/" target="_blank" rel="noopener noreferrer">JavaScript events</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/" target="_blank" rel="noopener noreferrer">Page load events</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/" target="_blank" rel="noopener noreferrer">Mouse events</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/" target="_blank" rel="noopener noreferrer">Keyboard events</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/" target="_blank" rel="noopener noreferrer">Event delegation</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/" target="_blank" rel="noopener noreferrer">The dispatchEvent method</a>
* <a href="https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/" target="_blank" rel="noopener noreferrer">Custom events</a>

## Knowledge check

* What is the DOM?



* How do you target the nodes you want to work with?



* How do you create an element in the DOM?



* How do you add an element to the DOM?



* How do you remove an element from the DOM?



* How can you alter an element in the DOM?



* When adding text to a DOM element, should you use textContent or innerHTML? Why?



* Where should you include your JavaScript tag in your HTML file when working with DOM nodes?



* How do “events” and “listeners” work?



* What are three ways to use events in your code?



* Why are event listeners the preferred way to handle events?



* What are the benefits of using named functions in your listeners?



* How do you attach listeners to groups of nodes?



* What is the difference between the return values of querySelector and querySelectorAll?



* What does a “NodeList” contain?



* Explain the difference between “capture” and “bubbling”.



## Additional resources

* <a href="http://eloquentjavascript.net/13_dom.html" target="_blank" rel="noopener noreferrer">Eloquent JS - DOM</a>
* <a href="http://eloquentjavascript.net/14_event.html" target="_blank" rel="noopener noreferrer">Eloquent JS - Handling Events</a>
* <a href="https://plainjs.com/javascript/" target="_blank" rel="noopener noreferrer">Plain JavaScript</a> is a reference of JavaScript code snippets and explanations involving the DOM, as well as other aspects of JS. If you’ve already learned jQuery, it will help you figure out how to do things without it.
* This <a href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank" rel="noopener noreferrer">W3Schools</a> article offers easy-to-understand lessons on the DOM.
* <a href="https://www.youtube.com/watch?v=0ik6X4DJKCc&amp;list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s" target="_blank" rel="noopener noreferrer">JS DOM Crash Course</a> is an extensive and well explained 4 part video series on the DOM by Traversy Media.
* <a href="https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model" target="_blank" rel="noopener noreferrer">Understanding The Dom</a> is an aptly named article-based tutorial series by DigitalOcean.
* <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" target="_blank" rel="noopener noreferrer">Introduction to events</a> by MDN covers the same topics you learned in this lesson on events.
* <a href="https://www.youtube.com/watch?v=VuN8qwZoego" target="_blank" rel="noopener noreferrer">Wes Bos’s Drumkit</a> JavaScript30 program reinforces the content covered in the assignment. In the video you will notice that a deprecated <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode" target="_blank" rel="noopener noreferrer">keycode</a> keyboard event is used, replace it with the recommended <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code" target="_blank" rel="noopener noreferrer">code</a> keyboard event and replace the `data-key` tags accordingly.
* <a href="https://www.youtube.com/watch?v=F1anRyL37lE" target="_blank" rel="noopener noreferrer">Event Capture, Propagation and Bubbling video</a> from Wes Bos’s JavaScript30 program.
* <a href="https://dev.to/i3uckwheat/understanding-callbacks-2o9e" target="_blank" rel="noopener noreferrer">Understanding Callbacks in JavaScript</a> for a more in-depth understanding of callbacks.
