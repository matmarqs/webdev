# Growing and Shrinking

### The `flex` shorthand

The `flex` declaration is actually a shorthand for the three properties `flex-grow`, `flex-shrink` and `flex-basis` that you can set on a flex item. These properties affect how flex items size themselves within their container.

Often you see the `flex` shorthand defined with only one value. In that case, that value is applied to `flex-grow`. When we put `flex: 1`, we are actually specifying a shorthand of `flex: 1 1 0`.

#### `flex-grow`

`flex-grow` expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied `flex: 1` to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If we instead add `flex: 2` to just one of the divs, then that div would grow to 2x the size of the others.

#### `flex-grow`

`flex-shrink` is similar to `flex-grow`, but sets the “shrink factor” of a flex item. `flex-shrink` only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs had a width declaration like: `width: 100px`, and `.flex-container` was smaller than `300px`, our divs would have to shrink to fit.

`flex-shrink: 1;` Default. All items will shrink evenly.

`flex-shrink: 0;` If you do **not** want an item to shrink.

##### Example:

```html
<!-- HTML -->
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
/* CSS */
.flex-container {
  display: flex;
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  width: 250px;  /* given width */
  flex: 1 1 auto;
}

.flex-container .two {
  flex-shrink: 0;   /* middle box has shrink factor = 0 */
}
```


<div class="flex-container" style="display: flex">
  <div class="one" style="background: peachpuff; border: 4px solid brown; height: 100px; width: 250px; flex: 1 1 auto;"></div>
  <div class="two" style="background: peachpuff; border: 4px solid brown; height: 100px; width: 250px; flex: 1 1 auto; flex-shrink: 0;"></div>
  <div class="three" style="background: peachpuff; border: 4px solid brown; height: 100px; width: 250px; flex: 1 1 auto;"></div>
</div>

<br/>

If you shrink this window you’ll notice that **the middle box above** never gets smaller than the given width of 250px, even though the flex-grow rule would otherwise specify that each element should be equally sized.

When you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect your given values for `width`. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit.

#### `flex-basis`

`flex-basis` sets the initial size of a flex item, so any sort of `flex-grow`ing or `flex-shrink`ing starts from that baseline size. The shorthand value defaults to `flex-basis: 0%`. The reason we had to change it to `auto` in the `flex-shrink` example is that with the basis set to `0`, those items would ignore the item’s width, and everything would shrink evenly. Using `auto` as a flex-basis tells the item to check for a width declaration (`width: 250px`).

There is a difference between the default value of `flex-basis` and the way the `flex` shorthand defines it if no `flex-basis` is given. The actual default value for `flex-basis` is `auto`, but when you specify `flex: 1` on an element, it interprets that as `flex: 1 1 0`. If you want to <em>only</em> adjust an item’s `flex-grow` you can do so directly, without the shorthand. Or you can be more verbose and use the full 3 value shorthand `flex: 1 1 auto`, which is also equivalent to using `flex: auto`.

## Assignment

* Read <a href="https://www.w3.org/TR/css-flexbox-1/#flex-common" target="_blank" rel="noopener noreferrer">W3C’s flex section</a> to understand the basic values of common flex shorthand values. :white_check_mark:

* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noopener noreferrer">MDN’s documentation on flex</a> summarizes the entire flex shorthand values, as well as introduces some new syntax that hasn’t been covered in the previous article. :white_check_mark:

## Knowledge check

* What are the 3 values defined in the shorthand `flex` property (e.g. `flex: 1 1 auto`)?

`flex-grow`, `flew-shrink` and `flex-basis`.

* What are the 3 defined values for the flex shorthand `flex: auto`?

It is equivalent to `flex: 1 1 auto`.
