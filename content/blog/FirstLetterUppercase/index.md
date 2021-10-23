---
title: Four Possible Ways of Converting First Letter of a String to Uppercase
date: "2021-10-05T03:00:00.284Z"
description: Would you like to know how to convert the first letter of a string into capital letters? Let's explore the possible pathways...
thumb: FirstLetter.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@alex_andrews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Andrews</a> on <a href="https://unsplash.com/s/photos/a?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

Would you like to know how to convert the first letter of a string into capital letters? Let's explore the possible pathways.

## 1) Using slice 

* Convert the first letter of a string into capital letters using the <b>toUpperCase()</b> method.

* Extract the remaining characters from a string with <b>slice()</b> method.

* Combining the two results will return the converted string.

```js
const word = 'react';
const capitalizedWord = word[0].toUpperCase() + word.slice(1);
```

## 2) Using substr

* Extract the first letter from a string using <b>substr()</b> method and change it into upper case using <b>toUpperCase()</b> method.

* Extract the remaining characters from a string with <b>substr()</b> method.

* Combining the two results will return the converted string.

```js
const name = 'angular';
const capitalizedName = name.substr(0,1).toUpperCase() + name.substr(1, name.length);
```

## 3) Using split

* Splitting the string into separate characters and storing them as an array using <b>split()</b> method.

* Convert the first item of an array into capital letters using the <b>toUpperCase()</b> method.

* Converting the array of items into string using the <b>join()</b> method.

```js
const text = 'vue';
const capitalizedText = text.split('');
capitalizedText[0] = capitalizedText[0].toUpperCase();
capitalizedText.join('');
```
 
## 4) Using spread

* Splitting the string into separate characters and storing them as an array using <b>spread</b> operator.

* Convert the first item of an array into capital letters using the <b>toUpperCase()</b> method.

* Converting the array of items into string using the <b>join()</b> method.

```js
const channelName = 'codingsparkles';
const convertedName = [...channelName];
convertedName[0] = convertedName[0].toUpperCase();
convertedName.join('');
```

Sample work used with the above code snippets can be found in the following codepen.

https://codepen.io/codingsparkles/pen/YzGarRJ

That’s all about this blog post friends. Share your ideas on this topic.

I hope this will be useful for you, do you think something is very similar, simply share this with your friends!