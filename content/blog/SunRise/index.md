---
title: How to Create the Sun Set in Pure CSS?
date: "2021-10-17T03:00:00.284Z"
description: In this article, I'm going to share the steps to create the sun set using pure css...
thumb: SunSet.jpg
tags: ["CSS"]
---

<div class="photo-details">Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/s/photos/sunset?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
  
In this article, I'm going to share the steps to create the Sun Set ([CSS battle challenge](https://cssbattle.dev/play/62)) using pure CSS.

## Step 1: Creating the HTML elements

* Create the required HTML elements as mentioned in the following code snippets.

* In this example, I have used Three Div elements (i.e. child elements with class name child-mid, child-2 and child-3) under One parent Div element (i.e. element with class name parent).

HTML Element Structure

```html
<div class="parent">
  <div class="child-mid"></div>
  <div class="child-2 child"></div>
  <div class="child-3 child"></div>
</div>
```
## Step 2: Styles to create Sun Set

* Basic Style (To display elements in the center and apply background color)

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 95vh;
}
```

* Background element (Behind Sunset and Hills)

```css
.parent {
  height: 200px;
  width: 150px;
  border-radius: 100px 100px 10% 10%;
  background-color: #f2ad43;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
}
```
* To create the left side Hill

```css
.child-2 {
  background-color: #e08027;
  border-radius: 0 100px 0 0;
  margin-right: -25px;
  position: relative;
}
```

* To create the right side Hill

```css
.child-3 {
  background-color: #824b20;
  border-radius: 100px 0 0 0;
  margin-left: -35px;
  position: relative;
}
```

* To create the Sun

```css
.child-mid {
  background: #fff58f;
  align-self: center;
  height: 55px;
  width: 55px;
  border-radius: 100%;
  position: absolute;
  top: 90px;
  right: 47px;
}
```
Working example available in the following codepen.

https://codepen.io/codingsparkles/pen/QWMyRpV