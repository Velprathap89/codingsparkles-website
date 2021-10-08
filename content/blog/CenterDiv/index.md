---
title: Two simple way to centering Div
date: "2021-10-04T03:00:00.284Z"
description: In this article, I'm going to share two easy ways to center the element using CSS. Let's go through the "Easiest ways to center a Div element using CSS"...
thumb: centerelement.jpg
tags: ["CSS"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/s/photos/center?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
In this article, I'm going to share two easy ways to center the element using CSS. Let's go through the "Easiest ways to center a Div element using CSS".

HTML Element

```html
<div class='parent'>
  <div class='child'>Coding Sparkles</div>
</div>
```

Basic Style

```css
.parent {
  height: 10em;
  border: 2px solid blue;
}

.child {
  background: blue;
  color: white;
  height: auto;
  width: 5em;
  text-align: center;
}
```
https://codepen.io/codingsparkles/pen/GREbEWx

To center the Div element vertically and horizontal,

## Using Flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
  * Apply the above styles to a parent element

  * Check out the working code example in the following codepen
    
https://codepen.io/codingsparkles/pen/abmYVZK


## Using Grid

```css
.parent {
  display:grid;
}

.child {
  justify-self: center;
  align-self: center;
}
```

* Apply the above styles to the parent and child

* Check out the working code example in the following codepen

https://codepen.io/codingsparkles/pen/qBaoVaJ

There are other ways to achieve this scenario, but I feel that both of the above methods are simple. What you are feeling, share your thoughts.
