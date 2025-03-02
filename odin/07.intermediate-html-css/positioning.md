# Positioning

### [Static and relative positioning](#static-and-relative-positioning)

The default positioning mode that you’ve gotten used to is `position: static`. The difference between static and relative is fairly simple. Static is the default position of every element, and properties `top`, `right`, `bottom`, and `left` do not affect the position of the element. Relative on the other hand is pretty much the same as static, but properties `top`, `right...(etc.)` displace the element relative to its normal position in the flow of the document.

### [Absolute positioning](#absolute-positioning)

`position: absolute` allows you to position something at an exact point on the screen without disturbing the other elements around it. More specifically, using absolute positioning on an element will remove that element from the normal document flow while being positioned relative to an ancestor element. To put it in other words: elements that are removed from the normal flow of the document don’t affect other elements and are also not affected by other elements. Using absolute positioning allows you to position elements anywhere on the screen using `top`, `right`, `bottom`, and `left` properties. This property is really useful when you want to position something at an exact point on the screen, without disturbing any of the other elements. A couple of good use cases for absolute positioning are:

*   modals
*   image with a caption on it
*   icons on top of other elements

Disclaimer: absolute positioning has very specific use cases and if possible, using flexbox or grid should be prioritized. Absolute positioning shouldn’t be used to do entire page layouts.

### [Fixed positioning](#fixed-positioning)

Fixed elements are also removed from the normal flow of the document and are positioned relative to the `viewport`. You basically use `top`, `right`, `bottom`, and `left` properties to position it, and it will stay there as the user scrolls. This is especially useful for things like navigation bars and floating chat buttons.

### [Sticky positioning](#sticky-positioning)

Sticky elements will act like normal elements until you scroll past them, then they start behaving like fixed elements. They are also not taken out of the normal flow of the document. It might sound confusing, so check out this [sticky positioning example](https://codepen.io/theanam/pen/MPLBYy) that might clear things up for you. It’s useful for things like section-headings. Remember being able to still see what category you’re looking at while scrolling through a shop? This is how it’s done!

### [Assignment](#assignment)

1.  Web Dev Simplified’s [Learn CSS Position](https://www.youtube.com/watch?v=jx5jmI0UlXU) video is fast-paced but provides a good visual representation of different positioning behaviors. Go ahead and watch it. :white_check_mark:
2.  [MDN’s docs on `position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) covers all of the conceptual details about positioning. :white_check_mark:
3.  CSS trick’s page [Absolute, Relative, Fixed Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/) should give you a different insight on the topic. You should read it as well. :white_check_mark:
4.  Finally, Kevin Powell’s article discusses the [difference between fixed and sticky positioning](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/). It’s a great read to understand the difference better. :white_check_mark:

### [Knowledge check](#knowledge-check)

*   [What is the difference between static and relative positioning?](#static-and-relative-positioning)

They are both the same when `top`, `left`, `right` or `bottom` are not applied. But when they are applied, the `relative` moves relative to itself.

*   [What is absolute positioning useful for?](#absolute-positioning)

For anchoring an element inside its positioned container.

*   [What is the difference between fixed and sticky positioning?](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/)

`fixed` remains fixed, and `sticky` only remains fixed when scrolled, but it remains inside its parent.

### [Additional resources](#additional-resources)

*   [Understand the CSS Position Property With Practical Examples](https://www.makeuseof.com/css-position-property-practical-examples/) provides some different CSS methods for positioning elements.
*   You can check out this helpful video resource on [CSS positioning from Slaying the Dragon](https://www.youtube.com/watch?v=MxEtxo_AaZ4&t=2s) for clear explanations and practical examples. :white_check_mark: (Very good!)
