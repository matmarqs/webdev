# JavaScript Developer Tools

Overview of topics:

* Change screen size of a website with developer tools.

* View and change the DOM.

* Debug JavaScript.

* Use breakpoints.

* View and edit HTML in the Elements tab.

* View the Resources Panel to check the scripts running on a website.

* Add CSS Pseudostate to a Class.

* View CSS Properties in Alphabetical Order.

* View and edit the Box Model of any element in Chrome DevTools.

* View a page in print mode.

* Enable or disable CSS classes.

* Simulate media queries in Device Mode.

## Assignment

1. Head to the <a href="https://developer.chrome.com/docs/devtools/" target="_blank" rel="noopener noreferrer">Chrome DevTools Documentation</a> by Google. The following subsections cover what you’ll be using the Developer Tools for 95% of the time.  Feel free to skip the elements you are already familiar with, and only read these:
  * CSS
    - <a href="https://developer.chrome.com/docs/devtools/css/" target="_blank" rel="noopener noreferrer">View and change CSS</a> :white_check_mark:
    - <a href="https://developer.chrome.com/docs/devtools/css/reference/" target="_blank" rel="noopener noreferrer">CSS features reference</a> :white_check_mark:
  * <a href="https://developer.chrome.com/docs/devtools/dom/" target="_blank" rel="noopener noreferrer">Get Started With Viewing And Changing The DOM</a> :white_check_mark:
  * Mobile Simulation: <a href="https://developer.chrome.com/docs/devtools/device-mode/" target="_blank" rel="noopener noreferrer">Simulate mobile devices with Device Mode</a> :white_check_mark:
  * JavaScript
    - <a href="https://developer.chrome.com/docs/devtools/javascript/" target="_blank" rel="noopener noreferrer">Debug JavaScript</a> - Warning: In point 4 of step 3 of the tutorial, devtools will pause on the second line (<code>if (inputsAreEmpty()) {</code>) rather than at the declaration of the function. Don’t worry, this is expected. :white_check_mark:
    - <a href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/" target="_blank" rel="noopener noreferrer">Pause your code with breakpoints</a> :white_check_mark:

2. Go through the <a href="https://developer.chrome.com/docs/devtools/console/" target="_blank" rel="noopener noreferrer">Chrome DevTools console overview</a> to familiarize yourself with the console and its usage. :white_check_mark:

## Knowledge check

* <a href="#opening-devtools">How do you open developer tools?</a>

`Ctrl+Shift+c`, `F12`, `Right-click > Inspect`.

* <a href="https://developer.chrome.com/docs/devtools/device-mode/" target="_blank" rel="noopener noreferrer">How do you change screen size of a website using developer tools?</a>

In DevTools, toggle the device toolbar (clicking or with `Ctrl+Shift+m`). Resize by dragging handles, clicking device presets (S Mobile, M Mobile, Tablet, Laptop etc.) or by inserting the width and height.

* <a href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/" target="_blank" rel="noopener noreferrer">What is a breakpoint?</a>

It is a point in the execution of code that is paused. Commonly used for debugging.

* <a href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/#loc" target="_blank" rel="noopener noreferrer">How do you set a breakpoint?</a>

By going to the Sources panel and setting them by some of the various methods, such as Event Listener, Line of Code, DOM etc.
