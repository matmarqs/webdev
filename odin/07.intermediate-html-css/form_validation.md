# Form Validation

### [Introduction](#introduction)

Validations allow us to set specific constraints or rules that determine what data users can enter into an input. When a user enters data that breaks the rules, a message will appear, providing feedback on what was wrong with the entered data and how to fix it.

Validations are a vital ingredient in well-designed forms. They help protect our backend systems from receiving incorrect data, and they help make the experience of interacting with our form as dead-stupid-simple as possible for our users.

This lesson will explore some of the built-in validations you can use with HTML forms. We will also dive into styling validations with CSS.

### [Required validation](#required-validation)

We will often want to ensure specific fields have been filled in before submitting the form, for example, the email and password in a login form.

To make a field required, we add the `required` attribute to it:
```html
<form action="#" method="get">
  <div>
    <label for="user_email">*Email:</label>
    <input type="email" id="user_email" name="user_email" required>
  </div>
  <br>

  <div>
    <label for="user_password">*Password:</label>
    <input type="password" id="user_password" name="user_password" required>
  </div>

  <button type="submit">Login</button>
</form>

```

To ensure a good user experience and to meet accessibility guidelines, we should always indicate which fields are required. This will often be done by adding an asterisk(\*) to the required field label like we have done in the example. You could also add a message that makes the meaning of the asterisk(\*) clear to the user.

### [Text length validations](#text-length-validations)

Sometimes we will want users to enter a minimum or a maximum amount of text into a field. Real-world examples of using these validations would be the old 140 character limit that X (formerly known as Twitter) used to have in its status field or having minimum and maximum length constraints on a username field.

#### [Minimum length validation](#minimum-length-validation)

To add the minimum length validation, we give the form control a `minlength` attribute with an integer value that represents the minimum number of characters we want to allow in the form control:

```html
<form action="#" method="get">
  <div>
    <textarea placeholder="What's happening?" minlength="3"></textarea>
  </div>
  
  <button type="submit">Tweet</button>
</form>
```

Try entering less than three characters into the text area and clicking the post button to see the validation in action.

#### [Maximum length validation](#maximum-length-validation)

To add a maximum length validation, we give the form control a `maxlength` attribute with an integer value which represents the maximum number of characters we want to allow in the form control.

#### [Combining validations](#combining-validations)

HTML allows us to apply as many validations as we wish to a form control. For example, we can give our post `<textarea>` both `minlength` and `maxlength` validations.

### [Number range validations](#number-range-validations)

Just like we often need to control the length of text-based form controls, there will be many situations where we will want to control the range of values users can enter into number based form controls.

We can do this with the min and max attributes, which allows us to set the lower and upper bounds of the value entered into the form control. The min and max attributes only work with number-based form controls such as the number, dates and time inputs. You can view the complete list of supported elements on [MDN’s documentation on the `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax).

Some real-world use cases for using these validations would be limiting the quantity on a product order form or choosing the number of passengers on a flight booking form.

#### [Min validation](#min-validation)

To add a minimum value validation, we give the form control a `min` attribute with an integer value which represents the minimum number we want the form control to accept:
```html
<form action="#" method="get">
  <div>
    <label for="quantity">Quantity</label>
  </div>
  <input type="number" id="quantity" name="quantity" min="1" value="0">
  
  <div>
    <button type="submit">Place Order</button>
  </div>
</form>
```

#### [Max validation](#max-validation)

To add a maximum value validation, we give the form control a `max` attribute with an integer value which represents the maximum number we want the form control to accept

### [Pattern validations](#pattern-validations)

To ensure we get the correct information from users, we will often want to ensure data matches a particular pattern. Real-world applications would be checking if a credit card number or a zipcode is in the correct format.

To add a pattern validation, we give the form control a `pattern` attribute with a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as the value. In our example we are using the pattern validation to ensure a US zip code is in the correct format (5 numbers followed by an optional dash and 4 more numbers):

```html
<form action="#" method="get">
  <div>
    <label for="zip_code">Postal / Zip Code:</label>
  </div>

  <input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

Entering an incorrect zip code and submitting the form will display the following validation error in the browser “Please match the requested format”. This isn’t very useful since it doesn’t communicate how to fix the issue.

It is good practice to use a `placeholder` attribute to show users an example of the expected pattern they need to enter.

The pattern attribute can only be used on `<input>` elements. Some input elements already validate data that matches a certain pattern. For example, the email input field will make sure a valid email is entered and the url input element will check to ensure the URL starts with http or https:

```html
<form action="#" method="get">
  <div>
    <label for="email">Email:</label>
  </div>
  <input type="email" id="email" name="email">

  <div>
    <label for="website">Website:</label>
  </div>
  <input type="url" id="website" name="website">

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

### [Styling validations](#styling-validations)

We can target form controls that have passed or failed validations using the `:valid` and `:invalid` pseudo-classes.

To see this in action, we will be using our email and website example that we looked at previously:
```html
<form action="#" method="get">
  <div>
    <label for="email">Email</label>
  </div>
  <input type="email" id="email" name="email">

  <div>
    <label for="website">Website</label>
  </div>
  <input type="url" id="website" name="website">

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

```css
input {
  border: 2px solid #000;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

First of all, we target any valid inputs and give them a green border. Our email and URL inputs initially have a green border since they are not required fields and are valid.

When a field is invalid, we give it a red border instead. Try entering an invalid email address and URL to see how this looks.

### [Conclusion](#conclusion)

The built-in validations will take you far with ensuring your users enter the correct data. They are quick and easy to add. However, they have their limitations.

Sometimes you will need to include validations that the built-in validations won’t be able to do. For example, validating that a password input and password confirmation input have the same value or validating that a username has not already been taken. We are also limited with what we can do with styling the validation messages and the content within them.

In this case, we will need to get creative and make custom validations using JavaScript and CSS. We’ll dive into how to achieve validation via JavaScript in a future lesson.

It’s also worth noting client-side validations are not a silver bullet for ensuring users enter the correct data. To ensure the integrity of any user data coming into our systems, we should also have server-side validations in place. We will cover this side of validations later in the curriculum.

### [Assignment](#assignment)

1.  Read and follow along to [MDN’s Client-Side Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) :white_check_mark:
    *   Skip the section on “Validating forms using JavaScript”. This will be covered in a future lesson.
2.  Go through SitePoint’s [Complete Guide to HTML Forms and Constraint Validation Guide](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/). You can skip the section on “JavaScript and the Constraint Validation API” and “Creating a Custom Form Validator”. :white_check_mark:
    
3.  Read Silo Creativo’s article [Improving UX in forms](https://www.silocreativo.com/en/css-rescue-improving-ux-forms/). :white_check_mark: (Very cool CSS example)

### [Knowledge check](#knowledge-check)

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

*   [What does the `required` validation do?](#required-validation)

It makes the input element required in order for the form to be submitted.

*   [What validations can you use for checking text length?](#text-length-validations)

`minlength` and `maxlength`.

*   [How can you validate the minimum and maximum of numeric inputs?](#number-range-validations)

`min` and `max`.

*   [What can you use the pattern validation for?](#pattern-validations)

For ensuring that the data that the user inputs is in the correct format. But this is only for UX, not for security reasons.

*   [What pseudo CSS selectors are available for styling valid and invalid inputs?](#styling-validations)

`:valid`, `:invalid`.

### [Additional resources](#additional-resources)

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

*   Look through this X thread of the [do’s and don’ts for form validation UX](https://threadreaderapp.com/thread/1400388896136040454.html).
*   Check out these [10 Guidelines for form validation design](https://www.nngroup.com/articles/errors-forms-design-guidelines/).
*   [Learn Regex: A Beginner’s Guide](https://www.sitepoint.com/learn-regex/) is a great resource for understanding how regex patterns are built and shows how to use a fantastic tool for creating them.
*   [Demystifying Regex with Practical Examples](https://www.sitepoint.com/demystifying-regex-with-practical-examples/) contains some practical examples in detail so you can understand how they work rather than copying and pasting.
*   One last resource on regular expressions that can be helpful is MDN’s [regular expression syntax cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet). This cheatsheet does a great job explaining the syntax of regular expressions in more detail.
