# SVG

## What are SVGs?

SVGs are a scalable image format, which means they will easily scale to any size and retain their quality without increasing their filesize. They’re also very useful if you need to create or modify your images programmatically, because you can change their properties through CSS and JavaScript.


SVGs are often used for:
* Icons
* Graphs/Charts
* Large, simple images
* Patterned backgrounds
* Applying effects to other elements via SVG filters

### Okay, but what are they?

“SVG” stands for “Scalable Vector Graphics”. Vector graphics are images defined by math, as opposed to traditional “raster graphics”, where your image is defined by a grid of pixels. With raster graphics, the detail is limited to the size of that pixel grid. If you want to increase the size of the image (scale it), you have to increase the size of that grid. How do you decide what all those new pixels should look like? There’s no simple solution. Additionally, the larger the grid, the bigger your filesize grows.

With vector graphics on the other hand, there’s no grid. Instead, you have formulas for different shapes and lines. Since these are just formulas, it doesn’t matter how large or small you want them to appear–they can scale to any size you want, and it will have no effect on the quality or the size of the file.

SVGs have another interesting aspect to them: they’re defined using XML. XML (aka, “Extensible Markup Language”) is an HTML-like syntax which is used for lots of things, from APIs, to RSS, to spreadsheet and word editor software.

The fact that SVG source-code is XML has a few key benefits.

First, it means that it is human-readable. If you were to open up a JPEG in a text editor, it would just look like gobbledygook. If you were to open up an SVG, however, it would look something like this:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

The second benefit of XML is that it’s designed to be interoperable with HTML, which means you can put the above code directly in an HTML file, without any changes, and it should display the image. And because these can become elements in the DOM just like HTML elements, you can target them with CSS and create them using the Element WebAPI you’ve already been using!

## Drawbacks

So, clearly SVGs are awesome! Time to go convert all of our images to SVG, right? Well, not quite. SVGs are great for relatively simple images, but because every single detail of the image needs to be written out as XML, they are extremely inefficient at storing complex images. If your image is supposed to be photo-realistic, or it has fine detail or texture (“grunge textures” are a great example), then SVGs are the wrong tool for the job.

## Anatomy of an SVG

Typically, you will not want to create SVGs from scratch in your code. Most often, you will download the file or copy the code either from a website or from an image editor that can create them (Adobe Illustrator and Figma are two popular apps that can create SVGs). However, it’s pretty common to download an SVG and want to tweak or adjust it just a little bit, so knowing what all the bits and pieces are, and how they work is very useful.


<div class="container" style="max-width:200px;margin:auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=100 fill="burlywood"/>
    <path d="M 10 10 H 90 V 90 L 10 60" fill="transparent" stroke="black" stroke-width="3"/>
  <circle cx=50 cy=50 r=20 class="svg-circle"/>
    <g class="svg-text-group">
      <text x="20" y="25" rotate="10" id="hello-text">Hello!</text>
      <use href="#hello-text" x="-10" y="65" fill="white"/>
    </g>
</svg>
</div>

```html
<div class="container">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=100 fill="burlywood"/>
    <path d="M 10 10 H 90 V 90 L 10 60" fill="transparent" stroke="black" stroke-width="3"/>
  <circle cx=50 cy=50 r=20 class="svg-circle"/>
    <g class="svg-text-group">
      <text x="20" y="25" rotate="10" id="hello-text">Hello!</text>
      <use href="#hello-text" x="-10" y="65" fill="white"/>
    </g>
</svg>
</div>
```

```css
.container {
  max-width: 200px;
  margin: auto;
}

.svg-circle:hover + .svg-text-group {
  opacity: 0;
}
```

1. `xmlns` - stands for “XML NameSpace”. This specifies what <em>dialect</em> of XML you’re using. In our case, that dialect is the SVG language spec. Without it, some browsers will not render your image or will render it incorrectly.
2. `viewBox` - defines the bounds of your SVG. When you have to define the positions of different points of the elements in your SVG, this is what that’s referencing. It also defines the aspect ratio <em>and</em> the origin of your SVG. So it’s doing quite a lot! Be sure to play around with different values in the example above to get a feel for how it affects the shapes.
3. `class`, `id` - these attributes function just like they do in HTML. Using these in SVGs allows you to easily target an element via CSS or JavaScript, or to reuse an element via the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use" target="_blank" rel="noopener noreferrer">`use` element</a>.
4. Elements such as `&lt;circle&gt;`, `&lt;rect&gt;`, `&lt;path&gt;`, and `&lt;text&gt;` are defined by the SVG namespace. These are our basic building-blocks. Although you can make extremely complex images with SVG, they are mostly created with just a dozen or so of these basic elements. Here is a <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element" target="_blank" rel="noopener noreferrer">complete list of SVG elements</a>.
5. Many SVG attributes, such as `fill` and `stroke`, can be changed in your CSS. Learn more in this <a href="https://css-tricks.com/svg-properties-and-css/" target="_blank" rel="noopener noreferrer">article on SVG properties and CSS</a>.

## Embedding SVGs

There are two main approaches when deciding how to actually place the SVG in your document: linked, and inline.

Linking SVGs works basically the same way as linking any other image. You can use an HTML image element such as `<img>`, or link it in your CSS using `background-image: url(./my-image.svg)`. They will still scale properly, but the contents of the SVG will not be accessible from the webpage.

The alternative is to inline your SVGs by pasting their contents directly into your webpage’s code, rather than linking to it as an image. It will still render correctly, but the SVG’s properties will be visible to your code, which will allow you to alter the image dynamically via CSS or JavaScript.

Inlining SVGs allows you to unlock their full potential, but it also comes with some serious drawbacks: it makes your code harder to read, makes your page less cacheable, and if it’s a large SVG it might delay the rest of your HTML from loading.

Some of the drawbacks of inlining SVG code can be avoided once you’ve learned a front-end JavaScript library like React, or a build-tool like webpack. We aren’t quite ready to get into those yet, so just keep that in the back of your mind.

For now, just do whichever works best for your use-case. Linking is generally cleaner and simpler, so prefer that unless you need to tweak the SVG code alongside your HTML.

## Knowledge check

* What is the `xmlns` attribute?

It stands for “XML NameSpace”. It specifies what dialect of XML you are using.

* What are some situations where you wouldn’t want to use SVG?

With photo-realistic or complex images that have fine details.

* What are the benefits of “inlining” your SVGs? What are the drawbacks?

If you use inline SVG, you can access its elements directly with CSS or JavaScript. The drawbacks are: it will decrease the performance when loading the webpage, it makes the code harder to read, and it makes the page less cacheable. Some of these drawbacks can be avoided when using React, but I still don't know how.

## Additional resources

* There are lots of great free SVG icon libraries, such as Material icons and Feather icons.
* If you want to get started making your own or editing SVGs, you’ll want some sort of visual editor like Yann Armelin’s SVG path editor. It’s great for tinkering around with simpler SVGs but not designed for complex graphics.
