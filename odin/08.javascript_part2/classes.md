# Classes

### [Introduction](#introduction)

JavaScript does _not_ have classes in the same sense as other object-oriented languages like Java or Ruby. ES6, however, _did_ introduce a syntax for object creation that uses the `class` keyword. It is basically a new syntax that does the _exact_ same thing as the object constructors and prototypes we learned about in the constructor lesson.

Historically, especially when ES6 was released, there was some controversy with class syntax precisely because it looks like classes from languages like Java, but in reality is only syntactic sugar over constructors and prototypes. The underlying mechanisms have not changed despite the different syntax (no classical inheritance going on) but often trips people up since the syntax isn’t as explicit about what’s _really_ going on with these objects.

Plenty of time has passed though and class syntax now exists in many code bases. There aren’t many new mechanisms to learn here, mainly just new syntax for mostly familiar concepts.

### [Lesson overview](#lesson-overview)

This section contains a general overview of topics that you will learn in this lesson.

*   Explain the differences between an object constructor and a class.
*   Explain what getters and setters are.
*   Describe basic class syntax.
*   Use inheritance with classes.
*   Explain how to implement private class fields and methods.
*   Explain what static properties and methods are.

### [Assignment](#assignment)

1.  Read about [getters and setters](https://javascript.info/property-accessors) (don’t worry about the “accessor descriptors” section as we have not covered them before). While the article doesn’t show classes yet, classes can use getters and setters via the same syntax (without `Object.defineProperty`). :white_check_mark:
2.  Read JavaScript.info’s [primer on class syntax](https://javascript.info/class) for an overview of class syntax. :white_check_mark:
3.  [MDN’s docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are, as usual, a great resource for going a little deeper. There are lots of individual syntax features but these can be explored over time. As usual, you’re not required to memorize anything just from reading docs here and now. Some good features to have a little look at include: :white_check_mark:
    *   [Extending classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) (like having a Player class that extends a Person class, adding `Person.prototype` to the prototype chain). :white_check_mark:
    *   [Private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), allowing you to have properties or methods that are not accessible outside of the class, like with private variables in factory functions. :white_check_mark:
    *   [Static properties and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) which are properties and methods (public or private) that are accessed on the class itself and not on the instance of a class. This is similar to how some string methods are accessed on the instance of a string itself e.g. `someString.slice(0, 5)` whereas some methods are called on the String constructor directly e.g. `String.fromCharCode(79, 100, 105, 110)`. :white_check_mark:

#### [Practice](#practice)

Go back to your [Library project](https://www.theodinproject.com/lessons/node-path-javascript-library) and refactor it to use `class` instead of plain constructors. Don’t forget to use the git branch workflow you learned in [Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors) to work on a new feature. You should get used to working like this! :white_check_mark:

### [Knowledge check](#knowledge-check)

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

*   [What differences are there between object constructors and classes?](https://javascript.info/class#not-just-a-syntactic-sugar)

Roughly, classes are a syntactic sugar for constructors. But a key difference is that different constructor methods are created for every instatiated object (wasting memory), while classes automatically bind them to the prototype.

*   [What are getters and setters?](https://javascript.info/property-accessors)

They are functions to set and get the variables. They are useful when you want to make some variables private, and set/get are the ways to access them for read/write.

*   [How is inheritance used with classes?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#inheritance)

With the `extends` keyword and by using `super()`. It is used to extend a class to another, such as `Animal -> Dog`.

*   [What are some private class features?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

They are private variables, declared with a `#` symbol, like `this.#value`.

*   [What are static properties?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)

They are properties or methods that belong to the class itself, not to an instantiated object of the class. Such an example is the static method `Math.sin()`.

### [Additional resources](#additional-resources)

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

*   Stephen Mayeux has a [Youtube playlist on ES6 classes](https://www.youtube.com/playlist?list=PLtwj5TTsiP7uTKfTQbcmb59mWXosLP_7S) and some of their methods with easy to follow examples.
*   [w3resource](https://www.w3resource.com/javascript-exercises/oop/index.php) provides a comprehensive collection of exercises on classes.
