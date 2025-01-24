# Block and inline

## Block vs inline

Block elements, `display: block`, start a line break. Padding and margin apply normally to them.

Inline elements, `display: inline`, are in the line. Padding and margin behave differently, the top and bottom directions
for example do not apply.

The middle ground betweeen the two is inline-block, `display: inline-block`. It is inline, but padding and margin apply
to them as if they were block elements.

In practice, we will probably just use flexbox, instead of trying to line up a bunch of boxes.

## Divs and spans

Divs and spans are generic HTML elements that serve no original purpose. Divs are block elements and spans are inline
elements. They are generic but very useful, as we may use them to construct our own classes and ideas.

# Assignment


1. The concept of “Normal flow” is implied in the box-model resources, but isn’t laid out very specifically. Read <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow" target="_blank" rel="noopener noreferrer">“Normal Flow” from MDN</a> to make sure you understand how elements lay themselves out by default. :white_check_mark:

2. W3 schools’ <a href="https://www.w3schools.com/html/html_blocks.asp" target="_blank" rel="noopener noreferrer">“HTML Block and Inline Elements”</a> has a description and a list of all the default block and inline elements. :white_check_mark:

2. The Digital Ocean tutorial <a href="https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block" target="_blank" rel="noopener noreferrer">“Inline vs Inline-block Display in CSS”</a> has a couple of great examples that clarify the difference between <code>inline</code> and <code>inline-block</code>. :white_check_mark:

3. Do the exercises in our <a href="https://github.com/TheOdinProject/css-exercises/tree/main/foundations/block-and-inline" target="_blank" rel="noopener noreferrer">CSS exercises repository’s <code>foundations/block-and-inline</code> directory</a> (remember that the instructions are in the README) in the order: :white_check_mark:
* <code>01-margin-and-padding-1</code> :white_check_mark:
* <code>02-margin-and-padding-2</code> :white_check_mark:

5. Apply what you learned about the box model to improve the look of your Recipe page’s <code>index.html</code> homepage. Currently, it’s just a plain list, so get creative with layouts, colors, and styles to make your page uniquely captivating. :white_check_mark:


# Knowledge check

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

* What is the difference between a block element and an inline element?

Block elements break a new line. Also margin and padding apply fully to them. Inline elements have different behavior with
margin, padding, width and height. It is possible to have overlaps with margin/padding.

* What is the difference between an inline element and an inline-block element?

The inline-block is inline, but margin and padding apply as if they were block elements.

* Is an h1 block or inline?

It is block, because it breaks a line.

* Is button block or inline?

It is inline, does not break a line.

* Is div block or inline?

Block.

* Is span block or inline?

Inline.

