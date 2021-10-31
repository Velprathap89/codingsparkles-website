---
title: How to Create the Venn Diagram in Pure CSS?
date: "2021-10-30T03:00:00.284Z"
description: In this article, I'm going to share the steps to create the venn diagram using pure css...
thumb: VennDiagram.jpg
tags: ["CSS"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@melpoole?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mel Poole</a> on <a href="https://unsplash.com/photos/9Eheu3sIgrM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
In this article, I'm going to share the steps to create the Venn Diagram ([CSS battle challenge](https://cssbattle.dev/play/15)) using pure CSS.

## Step 1: Create the HTML elements

* Create the required HTML elements as mentioned in the following code snippets.

HTML Element Structure

```html
<div class="parent">
  <div class="child child-1"></div>
  <div class="child child-2"></div>
</div>
```
## Step 2: Styles to Venn Diagram

* Basic Style (To display elements in the center and apply background color)

```css
body {
  background-color: #09042a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 96vh;
}
```

* To position and size the elements

```css
.parent {
  display: flex;
}
/* Setting height and width for both elements to make it as circle  */
.child {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
```
* To overlap the left side circle with right side circle

```css
.child-1 {
  background-color: #7b3f61;
  margin-right: -50px;
  position: relative;
  overflow: hidden;
}
```

* To change the right side circle color

```css
.child-2 {
  background-color: #e78481;
}
```

* To create center space between two circles

```css
.child-1::after {
  content: "";
  background-color: #09042a;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  left: 67%;
}
```

Check out the working example in the following codepen.

https://codepen.io/codingsparkles/pen/YzxrGXg