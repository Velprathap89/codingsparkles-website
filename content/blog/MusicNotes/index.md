---
title: How to Create the Music Notes in Pure CSS?
date: "2021-10-16T03:00:00.284Z"
description: In this article, I'm going to share the steps to create the music notes using pure css...
thumb: MusicNotes.jpg
tags: ["CSS"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@joshua_j_woroniecki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Woroniecki</a> on <a href="https://unsplash.com/s/photos/music-notes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
In this article, I'm going to share the steps to create the Music Notes ([CSS battle challenge](https://cssbattle.dev/play/77)) using pure CSS.

## Step 1: Create the HTML elements

* Create the required HTML elements as mentioned in the following code snippets.

HTML Element Structure

```html
<div class="parent">
  <div class="child-level-1">
    <div class="child child-1"></div>
    <div class="child child-2"></div>
  </div>
  <div class="child-level-2">
    <div class="child child-3"></div>
    <div class="child child-4"></div>
  </div>
</div>
```
## Step 2: Styles to create Music Notes

* Basic Style (To display elements in the center and apply background color)

```css
body {
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}
```

* To position and size the elements

```css
.parent {
  width: 260px;
}

.parent,
.child-level-1,
.child-level-2 {
  display: flex;
  justify-content: space-between;
}

.child-level-1,
.child-level-2 {
  position: relative;
  width: 120px;
}
```
* To create the bottom style (oval shape)

```css
.child {
  height: 40px;
  width: 50px;
  border-radius: 50%;
}

.child.child-1,
.child.child-1::after,
.child.child-2,
.child.child-2::after,
.child.child-2::before,
.child.child-4,
.child.child-4::before,
.child.child-4::after {
  background-color: #fe5f55;
}
```

* To create the bar style (vertical and horizontal)

```css
.child.child-3,
.child.child-3::before,
.child.child-3::after {
  background-color: #a64942;
}

.child::before,
.child::after {
  position: absolute;
  top: -80px;
}

.child::after,
.child.child-4::before {
  content: "";
  height: 100px;
  width: 10px;
}

.child.child-1::after,
.child.child-3::after {
  right: 70px;
}

.child.child-2::after,
.child.child-4::after {
  right: 0;
}

.child.child-2::before {
  content: "";
  height: 10px;
  width: 60px;
  right: 10px;
}

.child.child-3::before {
  content: "";
  height: 10px;
  width: 30px;
  right: 40px;
}

.child.child-4::after {
  content: "";
  background: transparent;
  height: 10px;
  border: 10px solid #fe5f55;
  right: -30px;
  width: 40px;
  border-right: none;
  border-left: none;
}

.child.child-4::before {
  right: 0;
}
```
Check out the working example in the following codepen.

https://codepen.io/codingsparkles/pen/vYJLPpV