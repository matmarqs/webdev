# CSS Units

### [Absolute units](#absolute-units)

Absolute units are those that are always the same in any context. `px` is an absolute unit because the size of a pixel doesn’t change relative to anything else on the page. In fact, `px` is the only absolute unit you should be using for web projects. The rest of them make more sense in a print setting because they are related to physical units such as `in` (inch) and `cm` (centimeter).

### [Relative units](#relative-units)

Relative units are units that can change based on their context. There are several of them that you are likely to encounter and want to use.

#### [em and rem](#em-and-rem)

`em` and `rem` both refer to a font size, though they are often used to define other sizes in CSS. You’ll see both of them often so we’re going to explain both, but as a rule-of-thumb, prefer `rem`.

`1em` is the `font-size` of an element (or the element’s parent if you’re using it to set `font-size`). So, for example, if an element’s `font-size` is `16px`, then setting its width to `4em` would make its width `64px` (`16 * 4 == 64`).

`1rem` is the `font-size` of the root element (either `:root` or `html`). The math works the same with `rem` as it did with `em`, but without the added complexity of keeping track of the parent’s font size. Relying on `em` could mean that a particular size could change if the context changes, which is very likely not the behavior you want.

Using a relative size like `rem` to define font sizes across your website _is_ recommended. Many browsers allow users to change the base font-size to increase readability. If at all possible, it is advisable to respect a user’s wishes regarding font size. You’ll learn more about this from the reading assignments.

#### [Viewport units](#viewport-units)

The units `vh` and `vw` relate to the size of the viewport. Specifically, `1vh` is equal to `1%` of the viewport height and `1vw` is equal to `1%` of the viewport width. These can be useful any time you want something to be sized relative to the viewport, examples including full-height heroes, full-screen app-like interfaces.

## [Assignment](#assignment)

1.  [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) covers all the available units. :white_check_mark:
2.  The article [CSS units](https://codyloyd.com/2021/css-units/) goes in depth on how and when you might want to use `em`, `rem`, or `px`. :white_check_mark:
3.  [Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/) demonstrates some interesting things you can do with `vh` and `vw`. :white_check_mark:

## [Knowledge check](#knowledge-check)

*   [Why would you want to use `em` or `rem` for font-size instead of `px`?](#em-and-rem)

Because they are measured relative to the element font-size (`em`) or the root element's font-size (`rem`). This behavior is appropriate because it respects the user preference of increasing or decreasing the font-size of the browser.

*   [What are some instances where you might want to use `vh` and `vw`?](#viewport-units)

When you want something relative to the viewport.

*   [What are some instances where you might want to use `px` instead of a relative unit?](https://codyloyd.com/2021/css-units/)

For some reasons: `px` in fonts also scales with the browser's zoom; for boxes, margins and padding `px` accomplishes a better layour in responsive designs then relative units.


## [Additional resources](#additional-resources)

*   Watch [are you using the right CSS unit?](https://www.youtube.com/watch?v=N5wpD9Ov_To) if you’d like to learn Kevin Powells general rules of thumb when it comes to choosing the correct CSS units for different situations.
*   Watch [Learn CSS Units & When To Use Them](https://www.youtube.com/watch?v=fzZTvLmmTzM) from Slaying The Dragon if you would like to learn best practices of basic units mentioned in this lesson.
