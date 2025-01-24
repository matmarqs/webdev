# Box Model

Every single thing on a webpage is a rectangular box

Get the ideia by doing in the DevTools (inspect element):

```css
* {
  outline: 2px solid red;
}
```

### Exercises to be done:


* <a href="https://www.youtube.com/watch?v=rIO5326FgPE" target="_blank" rel="noopener noreferrer">Learn CSS Box Model In 8 Minutes</a> is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else. :white_check_mark:

* <a href="https://www.youtube.com/watch?v=HdZHcFWcAd8" target="_blank" rel="noopener noreferrer">box-sizing: border-box (EASY!)</a> is an add-on to the above resource with a better explanation of ‘box-sizing’. :white_check_mark:

* Because the box model concept is so incredibly fundamental, let’s dig a bit deeper with  <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" rel="noopener noreferrer">MDN’s lesson on the box model</a>. It covers the same material as the video(s) above and will introduce you to inline boxes that we will explore in the next lesson. Pay close attention to the examples and take the time to experiment with their in-browser editor! :white_check_mark:

* The <a href="https://css-tricks.com/almanac/properties/m/margin/" target="_blank" rel="noopener noreferrer">CSS Tricks page on margins</a> has some further information about the <code>margin</code> property that you’ll find useful. Specifically, the sections about <code>auto</code> and margin collapsing contain things you’ll want to know. :white_check_mark:

### Knowledge check

* From inside to outside, what is the order of box-model properties?

Content, Padding, Border, and Margin.

* What does the box-sizing CSS property do?

You can change the scheme of box-sizing, for example `content-box` or `border-box`.

* What is the difference between the standard and alternative box model?

Standard is `content-box`, and their sizes are related to the content box. Alternative is `border-box`, and the sizes
are related to the border box.

* Would you use margin or padding to create more space between 2 elements?

Margin.

* Would you use margin or padding to create more space between the contents of an element and its border?

Padding.

* Would you use margin or padding if you wanted two elements to overlap each other?

Margin with negative values. Padding only assumes positive values.

* How do you set the alternative box model for all of your elements?

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

* How do you center an element horizontally?

```css
.element {
  margin: 0 auto;
}
```
