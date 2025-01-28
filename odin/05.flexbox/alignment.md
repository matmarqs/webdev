# Alignment

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
</div>
</br>

Adding `flex: 1` to `.item` makes each of the items grow to fill the available space:

```css
.item {
  flex: 1;
}
```

<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue; flex: 1;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue; flex: 1;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue; flex: 1;"></div>
</div>
</br>

And to distribute themselves differently inside the container?
Remove `flex: 1` from `.item` and add `justify-content: space-between` to `.container`.

```css
.container {
  justify-content: space-between;
}

.item {
  /* flex: 1; */
}
```


<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex; justify-content: space-between;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
</div>
</br>

`justify-content` aligns items across the **main axis**. Try changing it to `center`, which should center the boxes along the main axis.

```css
.container {
  justify-content: center;
}
```

<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex; justify-content: center;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
</div>
</br>

To change the placement of items along the **cross axis** use `align-items`. Try getting the boxes to the center of the container by adding `align-items: center` to `.container`.

```css
.container {
  justify-content: center;
  align-items: center;
}
```

<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex; justify-content: center; align-items: center;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
</div>
</br>

Because `justify-content` and `align-items` are based on the main and cross axis of your container, their behavior changes when you change the flex-direction of a flex-container.

One very useful feature of flex is the `gap` property. Setting `gap` on a flex container adds a specified space between flex items, similar to adding a margin to the items themselves. `gap` is a *new* property so it doesn’t show up in many resources yet, but **it works reliably in all modern browsers**, so it is safe to use and very handy! Adding `gap: 8px` to `.container` produces the result below.

```css
.container {
  justify-content: center;
  align-items: center;
  gap: 8px;
}
```


<div class="container" style="height: 140px; padding: 16px; background: plum; border: 4px solid indigo; display: flex; justify-content: center; align-items: center; gap: 8px;">
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
  <div class="item" style="width: 60px; height: 60px; border: 4px solid darkslategray; background: skyblue;"></div>
</div>
</br>

## Assignment

1. This beautiful <a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">Interactive Guide to Flexbox</a> covers everything you need to know. It will help reinforce concepts we’ve already touched on with some really fun and creative examples. Spend some time here, some of it should be review at this point, but the foundations here are important! :white_check_mark: This resource is very good :thumbsup:.

2. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox" target="_blank" rel="noopener noreferrer">Typical use cases of Flexbox</a> is an MDN article that covers some more practical tips. Don’t skip the interactive sections! Playing around with this stuff is how you learn it! :white_check_mark:

3. The <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Tricks “Guide to Flexbox”</a> is a classic. The images and examples are super helpful. It would be a good idea to review parts 1-3 and part 5 (don’t worry about the media query parts, we will cover them later in the course) and then bookmark it as a great cheat sheet for future reference (keep it handy for the practice exercises). :white_check_mark:

4. Do the exercises in our <a href="https://github.com/TheOdinProject/css-exercises/tree/main/foundations/flex" target="_blank" rel="noopener noreferrer">CSS exercises repository’s `foundations/flex` directory</a> (remember that the instructions are in the README) in the order:  :white_check_mark:
- `01-flex-center` :white_check_mark:
- `02-flex-header` :white_check_mark:
- `03-flex-header-2` :white_check_mark:
- `04-flex-information` :white_check_mark:
- `05-flex-modal` :white_check_mark:
- `06-flex-layout` :white_check_mark:
- `07-flex-layout-2` :white_check_mark:

## Knowledge check

* What is the difference between `justify-content` and `align-items`?

`justify-content` refers to the main axis while `align-items` refer to the cross axis.

* How do you use flexbox to completely center a div inside a flex container?

Add `justify-content: center; align-items: center;` to the flex container.

* What’s the difference between `justify-content: space-between` and `justify-content: space-around`?

`space-between` adds spaces between two elements. `space-around` also adds spaces on the edges.

## Additional resources

* <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy</a> is a funny little game for practicing moving things around with flexbox.  :white_check_mark:
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container" target="_blank" rel="noopener noreferrer">Aligning Items in a Flex Container</a> goes into more depth on axes and `align-items` vs `justify-content`. :x:
