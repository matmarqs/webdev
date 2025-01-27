# Axes

The most confusing thing about flexbox is that it can work either horizontally or vertically, and some rules change a bit depending on which direction you are working with.
The default direction for a flex container is horizontal, or <code>row</code>, but you can change the direction to vertical, or <code>column</code>. The direction can be specified in CSS like so:

```css
.flex-container {
  flex-direction: column;
}
```
No matter which direction you’re using, you need to think of your flex-containers as having 2 axes: the main axis and the cross axis. It is the direction of these axes that changes when the <code>flex-direction</code> is changed.

When we changed the flex-direction to `column`, `flex-basis` refers to `height` instead of `width`.

In practice, changing things to vertical using `flex-direction: column` adds complexity because block-level elements default to the height of their content, and in this case there is no content.

## Knowledge check

* How do you make flex items arrange themselves vertically instead of horizontally?

Use `flex-direction: column`.

* In a `column` flex-container, what does `flex-basis` refer to?

The `flex-basis` refers to `height`.

* In a `row` flex-container, what does `flex-basis` refer to?

The `flex-basis` refers to `width`.

* Why do the previous two questions have different answers?

Because we changed the `flex-direction`, which is the axis reference for the growing/shrinking.

## GREAT RESOURCE

* This <a href="https://flexbox.malven.co/" target="_blank" rel="noopener noreferrer">flexbox visual cheatsheet</a> has some useful references to flex and its properties.
