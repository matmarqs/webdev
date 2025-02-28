# Default Styles

### Matt Britcson

From [Matt Brictson](https://mattbrictson.com/blog/css-normalize-and-reset), use [sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize) and:
```css
@import "modern-normalize";

:root {
  line-height: 1.5;
}

h1, h2, h3, h4, h5, figure, p, ol, ul {
  margin: 0;
}

ol[role="list"], ul[role="list"] {
  list-style: none;
  padding-inline: 0;
}

h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: inherit;
}

img {
  display: block;
  max-inline-size: 100%;
}
```

### Josh Comeau

```css
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

#root, #__next {
  isolation: isolate;
}
```


## Assignment

* Read [Reboot, Resets, and Reasoning](https://css-tricks.com/reboot-resets-reasoning/) for an excellent history of resets and what it means for a reset to be opinionated. :white_check_mark:
* Read [Making the case for CSS normalize and reset stylesheets in 2023](https://mattbrictson.com/blog/css-normalize-and-reset). It does an excellent job of discussing the differences in various resets and why you might choose to use them. :white_check_mark: (Very good!)
* [Josh Comeau’s custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) also includes a great breakdown of his thought process behind each rule he uses, giving you an idea of how to reason about these ideas. :white_check_mark:

## Knowledge check

* Why would you want to use a CSS reset?

To make the behavior of different browsers more predictable when working on front-end.

* Are resets required?

Not necessarily, you can use the approach of **normalizing**, **resetting** or leaving the defaults. It depends on the case, but an hybrid approach is a very good general approach. There are some cases where you might leave the defaults, such as a Term Form.
