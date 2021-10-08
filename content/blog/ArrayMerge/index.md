---
title: Five Possible Methods for Merging Two arrays (Array of Objects)
date: "2021-10-04T10:00:00.284Z"
description: In this article, we will learn about the five possible ways of overcoming the problem of joining two tables...
thumb: MergeArrays.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@tolga__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tolga Ulkan</a> on <a href="https://unsplash.com/s/photos/join?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article, we will learn about the five possible ways of overcoming the problem of joining two tables. Which I experimented with and used in my focus.

Two Arrays

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
    }
];

const veggies = [
    {
        name: 'Carrots',
        color: 'Orange',
        calories: '41'
    },
    {
        name: 'Beets',
        color: 'Red',
        calories: '43'
    }
];
```

## 1. Using concat

```js
const fruitsandveggies = [].concat(fruits,veggies);
``` 
---
> **_Note:_** It will return the new array with merged array objects.
---

```js
const fruitsandveggies = fruits.concat(veggies);
```
---
> **_Note:_** It will change the original array (first array) and merged the second array objects into the first one.
---

## 2. Using spread operator

```js
const fruitsnveggies = [...fruits, ...veggies];
```

## 3. Using push
### With spread

```js
const fruitswithveggies = [...fruits];
fruitsandveggies.push(...veggies);
```
---
> **_Note:_** In the following code examples, using the spread operator to copy an array.
---

### With loop

```js
const fruitswithveggies= [...fruits];
const veggiesItems = [...veggies];
veggiesItems.forEach(item=>
  fruitswithveggies.push(item)
);
```

## 4. Using reduce

```js
const fruitData = [...fruits];
const veggieData = [...veggies];
veggieData.reduce((item1, item2) => { item1.push(item2); return item1 }, fruitData)
```

## 5. Using index

Adding second array item one by one in the last index of the first array

```js
const fruitsClone = [...fruits];
const veggieClone = [...veggies];
veggieClone.forEach(item => fruitsClone[fruitsClone.length] = item)
```

Click the link below to see the sample code work
https://codepen.io/codingsparkles/pen/NWRBEoW 

It's all about this article. My favorite methods in the above list are "spread operator" and "concat", comment on your favorite and if other methods merge two arrays and suggestions on this article.