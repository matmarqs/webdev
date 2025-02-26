# Tables

You create a table with `<table></table>` tags and then put the elements for rows, columns, headers, or anything else that’s possible inside those table elements.

<table style="display: flex; justify-content: center">
  <tr style="border: 1px solid black">
    <th style="border: 1px solid black">First Header</th>
    <th style="border: 1px solid black">Second Header</th>
  </tr>
  <tr style="border: 1px solid black">
    <td style="border: 1px solid black">This is a data cell</td>
    <td style="border: 1px solid black">This is also a data cell!</td>
  </tr>
</table>

```html
<table>
  <tr>
    <th>First Header</th>
    <th>Second Header</th>
  </tr>
  <tr>
    <td>This is a data cell</td>
    <td>This is also a data cell!</td>
  </tr>
</table>
```

```css
table, td, th {
  border: 1px solid black;
}
```
The first row has two headings while the second row has 2 data cells.

## Assignment

* Read these <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics" target="_blank" rel="noopener noreferrer">Tables Basics</a> and <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced" target="_blank" rel="noopener noreferrer">Tables Advanced</a> tutorials from MDN. They should teach you all the syntax behind HTML tables. It’s pretty straightforward. Make sure to code along! :white_check_mark:
* Read through CSS Tricks’ <a href="https://css-tricks.com/complete-guide-table-element/" target="_blank" rel="noopener noreferrer">full guide to the table element</a>, which goes very in-depth about what you have already learned and touches on a few extra things. :x:
* Do this <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Structuring_planet_data" target="_blank" rel="noopener noreferrer">Tables Assessment</a> from MDN. It’s good to put your newly learned skills to practice! :white_check_mark:

## Knowledge check

* What is a table?

It is a tabular form of displaying data.

* Why is it a bad idea to use HTML Tables for page layout?

Because it is not the right tool for the job, for many reasons: screenreaders, bloated, formatting.

* What are caption elements useful for?

To add description to the table.

* What is the scope attribute?

It defines what the header scope is.

## Additional resources

* Pencil & Paper published a great <a href="https://pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables" target="_blank" rel="noopener noreferrer">article about things you can achieve with tables</a> if you dare to spend some time giving them some love. They suggest some good habits on how you should format your data which makes a huge difference. These are not a list of must dos to a table, but ideas worth keeping in mind for the next time a table is bothering you with how it looks.
