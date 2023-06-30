# barbershop-project-landing
<a href="https://de.wikipedia.org/wiki/JavaScript">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=yellow" />
</a>

<a href="https://en.wikipedia.org/wiki/HTML5">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</a>

<a href="https://en.wikipedia.org/wiki/CSS">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
</a>

<a href="https://webpack.js.org/">
  <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
</a>


This is a landing page for customers. They are able to view brand information, see pricelist, view locations of barbershops on google maps, get contact information and barbershop's socials.

It is part of a [barbershop project](https://github.com/Hikyn/barbershop-project/).

## Features:
1. Mobile-friendly interface
2. Fast loading (2.3mb website size)
3. Engaging visuals
4. Social media integration
5. [Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
```diff
WCAG 2 (Level A) complient
+ w3c checker valid
+ Non-text content have alternative text
+ Semantic markup
+ Tables
+ Meaningful reading/navigation/tabbing order
+ Visible focus
+ Portrait/landscape orientation
+ Contrast ratio > 8.63
+ Readable at 400% magnification
+ Readable at 320px width
```

## Problems and their solutions:
### Webpack asset management
**Problem**: images were not loading, index.html did not copy from **src** to **dist**. It had to be already present.

**Solution**:

#### 1. Static html

From tinkering with webpack I understood several principles. I can add src/index.html file to webpack with following settings:
```js
{
  test: /\.html/,
  type: 'asset/resource',
  generator: {
    filename: 'static/[hash][ext][query]'
  }
}
```
But I also need to **include html** in my index.js file using `file-loader`.
```js
require('file-loader?name=[name].[ext]!./index.html')
```

#### 2. Images

It is **almost the same** for images. We target them in webpack config:
```js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}
```

And include in index.js:
```js
import mainImage from './images/barbershop.png';
```

But images **will be obsuficated** like this:
```txt
7a19015e70544b1c42eb.svg
23bbc361852ca0746784.png
```
We need to write generator so they will be name like in src folder:

webpack.config.js
```diff
{
  test: /\.(png|jpg)$/i,
  type: 'asset/resource',
+  generator: {
+     filename: 'images/[name][ext]'
+ }
}
```

dist/images/
```diff
- 7a19015e70544b1c42eb.svg
- 23bbc361852ca0746784.png
+ barbershop.png
+ facebookIcon.svg
```

