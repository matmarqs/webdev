# CSS Functions

### [What is a function and how are they used in CSS?](#what-is-a-function-and-how-are-they-used-in-css)

Similar to programming languages, functions in CSS are reusable pieces of code which perform specific tasks. Functions are passed “arguments” between parentheses, each of which is used by the function in a specific way. Some common examples are:

```css
color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);
```

Here, the value of `color` is the function `rgb()`, which accepts arguments in the form of numbers. It processes those numbers to calculate the rgb color corresponding to the three values given. Similarly, the `background` property has a value of `linear-gradient(90deg, blue, red)`. `linear-gradient` generates a gradient image using the parameters it’s been given. It needs at least two color arguments: colors to transition between. Additionally, you can set the angle of direction of the gradient line (like we’ve done in the example), add more color values, etc.

Unlike programming languages you’ll use in TOP, CSS does not allow us to create our own functions. Instead, the language comes bundled with a list of premade functions that will help you solve the most common styling problems.

Besides defining colors, there are several CSS functions that are useful when designing a website’s layout and sizing. These become important when thinking about responsive design.

Let’s go over a few of these functions: `calc()`, `min()`, `max()`, and `clamp()`.

### [calc()](#calc)

The most powerful use cases for calc include:

*   Mixing units
*   The ability to nest `calc( calc () - calc () )`

Take a look at how `calc()` is being used here:

https://codepen.io/TheOdinProjectExamples/pen/OJxNxya

```js
:root {
--header: 3rem;
--footer: 40px;
--main: calc(100vh - calc(var(--header) + var(--footer)));
}
```

*   `--header`, `--footer`, and `--main` are all examples of CSS variables. You will be learning about these in the next lesson.

Setting main to equal the outcome of: `100vh - (3rem + 40px)`. To put it another way: `main = 100vh - (header + footer)`. `calc()` is handling the math for us even though we are mixing vh, rem and px units. Combined with CSS variables, `calc()` can save us from the headache of repeating CSS rules.

You should be able to grasp how `calc()` is used in the above CodePen embed. We encourage you to play around with different units and sizes of the elements to see what results you get before moving on.

The above is just an example of how `calc()` can affect a layout, but keep in mind that `calc()` is likely not the best way to go about it. We will talk more about layouts in future lessons.

### [min()](#min)

`min()` does an excellent job of helping us create responsive websites. Take a look at this example:

https://codepen.io/TheOdinProjectExamples/pen/RwLaLay

```css
#iconHolder {
  width: min(150px, 100%);
  height: min(150px, 100%);
  box-sizing: border-box;
  border: 6px solid blue;
}
```

Focus on this line `width: min(150px, 100%);` we can make several observations: If there are `150px` available to the image, it will take up all `150px`. If there are not `150px` available, the image will switch to `100%` of the parent’s width. In the first case `min()` selects `150px`, since `150px` is the smaller (the minimum) between `150px` and `100%` of the parent’s width; in the second, it chooses `100%`. `min()` behaves as a boundary for the _maximum_ allowed value, which in this example is `150px`.

You are able to do basic math inside a `min ( )` => for example: `width: min(80ch, 100vw - 2rem);`

### [max()](#max)

Max works the same way as min, only in reverse. It will select the largest possible value from within the parentheses. You can think of `max()` as ensuring a _minimum_ allowed value for a property.

Consider the following property of a given element:

```css
width: max(100px, 4em, 50%);
```

From this list of given sizes, `max()` will select the largest one. As long as `4em` or `50%` result in lengths longer than `100px`, `max()` will select (the bigger) one of them. If they are smaller than `100px` (maybe as a cause of user’s font size preferences, or their browser’s window size or zoom level), then `100px` will win out as the largest. You can think of `100px` in this example as a guard value: `width` here won’t ever be set to less than `100px`.

The max function is most useful when the viewing window is either exceptionally small, or the user increases the content size by using the browser’s zoom feature. You may not find a lot of use for max at first, but it is a good tool to be aware of for projects where accessibility is important.

### [clamp()](#clamp)

`clamp()` is a great way to make elements fluid and responsive. `clamp()` takes 3 values:

```css
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
```

1.  the smallest value (320px)
2.  the ideal value (80vw)
3.  the largest value (60rem)

The `clamp()` CSS function uses these values to set the smallest value, ideal value and largest value. In the above example, this would mean the smallest acceptable font-size would be 320px and the largest would be 60rem. The ideal font-size would be 80vw.

### [Assignment](#assignment)

1.  Take a look at the [complete list of CSS functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) and how they are used so you have an idea of what is possible. :white_check_mark: (Muito legal o que dá para fazer com CSS)
2.  Have a more in-depth look at the [`min`, `max` and `clamp` CSS functions](https://web.dev/min-max-clamp/) in action. :white_check_mark:

### [Knowledge check](#knowledge-check)

*   [What are the four CSS math functions we covered above?](#function-names-knowledge-check)

`calc()`, `max()`, `min()`, and `clamp()`.

*   [How do we use CSS math functions in our CSS?](#what-is-a-function-and-how-are-they-used-in-css)

With the `function(arg1, arg2)` syntax. But we can not define our own custom functions in CSS, only use the available ones. This happens because CSS is not a general purpose programming language.

*   [How can CSS functions help make websites and applications more responsive?](#responsive-design-knowledge-check)

By using `min()`, `max()` or `clamp()` with some smart values.

### [Additional resources](#additional-resources)

The resources below are very good. I did not read them yet! :rocket:

*   [Steve Griffith’s video on CSS Math functions](https://www.youtube.com/watch?v=6QwMvf1Jq0M) gives a good visual overview of these functions.
*   Here are [some specific use cases for `min`, `max`, `clamp` and `calc`](https://moderncss.dev/practical-uses-of-css-math-functions-calc-clamp-min-max/), including color palette generation, background size responsiveness, and accessibility settings.
*   Ahmad Shadeed writes about [more real world use cases for CSS Math functions](https://ishadeed.com/article/css-min-max-clamp/) with more detailed explanations.
