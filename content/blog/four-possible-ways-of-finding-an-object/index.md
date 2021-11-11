---
title: Four Possible Ways of Finding an object (Array of Objects)
date: "2021-10-05T09:00:00.284Z"
description: An Array of objects plays an important role in real-time web development. Particularly while working with the JavaScript-based application, it is the most important component...
thumb: FindObject.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/s/photos/find?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

An Array of objects plays an important role in real-time web development. Particularly while working with the JavaScript-based application, it is the most important component. So we can get a situation to find the particular object/element from the array of objects/elements. In this article, we're going to explore five possible ways to find the object/element from the JavaScript array. Let us begin and look at the methods.

Input Array

```js
const fruits = [
    {
        name: 'Apple',
        color: 'Red',
        calories: '52'
    },
    {
        name: 'Grape',
        color: 'Green',
        calories: '67'
    },
    {
        name: 'Pomegranate',
        color: 'Dark Red',
        calories: '83'
    },
    {
        name: 'Mango',
        color: 'Yellow',
        calories: '60'
    }
];

```

## 1) Using find 

* <b>find()</b> returns the first corresponding object of a given array.

* In the example below, we get the first matching object based on the name property.

```js
const findFruit = fruits.find(item => item.name === "Grape") ;
```


## 2) Using findIndex 

* <b>findIndex()</b> method returns the first matching object index value. Depending on the index value retrieved, the corresponding object can be obtained from an array.

* In the example below, we get the first corresponding object index according to the name property. Then, we retrieve the object based on the index.

```js
const findFruitIndex = fruits.findIndex(item => item.name === "Mango") ;
const matchingObject = fruits[findFruitIndex];
```

## 3) Using filter

* <b>filter()</b> method returns all the matching object as a new array.

* We can iterate the objects one by one from the output array or use the filtered objects as an array.

* In the following example, we get the first corresponding object using the name property. Then we get the first object by passing the index value at 0.

```js
const filterFruit = fruits.filter(item => item.name === "Pomegranate");
const matchingObject = filterFruit[0];
```

## 4) Using forEach

* <b>forEach()</b> method used to loop each item one by one from the array of objects. 

* Write our conditions in the loop and push the item to the new array when the conditions match.

* Iterate the individual objects from the resulting array or use the filtered objects as an array.

* In the following example, we get the first corresponding object using the name property.  Then we get the first object by passing the index value at 0.

```js
const findFruitByLoop = [];
 fruits.forEach(item => {
  if(item.name === "Apple")
    findFruitByLoop.push(item);
}) ;
const matchingObject = findFruitByLoop[0];
```

Sample work used with the above code snippets can be found in the following codepen.

https://codepen.io/codingsparkles/pen/Yzpzrpb
