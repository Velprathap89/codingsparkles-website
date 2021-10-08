---
title: Different Use Cases of Spread Operator in JavaScript
date: "2021-10-06T12:30:00.284Z"
description: In this article, we are going to learn about the different use cases of the spread operator (...) in JavaScript...
thumb: Spread.jpg
tags: ["JavaScript"]
---

<div class="photo-details">Photo by <a href="https://unsplash.com/@martinadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Adams</a> on <a href="https://unsplash.com/s/photos/spread?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article, we are going to learn about the different use cases of the spread operator (...) in JavaScript.

## Merging Arrays or Objects

* In the following code example, extracted the values of the id field from the array of objects.

```js
const fruits = [
    { name: 'Apple', color: 'Red', calories: '52' },
    { name: 'Grape', color: 'Green', calories: '67' },
    { name: 'Pomegranate', color: 'Dark Red', calories: '83' }
];

const veggies = [
    { name: 'Carrots', color: 'Orange', calories: '41' },
    { name: 'Beets', color: 'Red', calories: '43' }
];

const fruitsandveggies = [...fruits, ...veggies];
```

Output
```js
0: {name: "Apple", color: "Red", calories: "52"}
1: {name: "Grape", color: "Green", calories: "67"}
2: {name: "Pomegranate", color: "Dark Red", calories: "83"}
3: {name: "Carrots", color: "Orange", calories: "41"}
4: {name: "Beets", color: "Red", calories: "43"}
```

```js
const empBasicDetails = {
    name: "James",
    id: 1010
};

const empAdvancedDetails = {
    bloodGroup: "AB+"
}

const empDetails = { ...empBasicDetails, ...empAdvancedDetails };
```

Output
```js
{name: "James", id: 1010, bloodGroup: "AB+"}
```

## Cloning Array

* In the following code example, displaying the employee details one by one using console.log(). Similarly, we can render the list of elements.

```js
const fruits = [
    { name: 'Apple', color: 'Red', calories: '52' },
    { name: 'Grape', color: 'Green', calories: '67' },
    { name: 'Pomegranate', color: 'Dark Red', calories: '83' }
];

const clonedFruits = [...fruits];
```

Output
```js
0: {name: "Apple", color: "Red", calories: "52"}
1: {name: "Grape", color: "Green", calories: "67"}
2: {name: "Pomegranate", color: "Dark Red", calories: "83"}
```

```js
const empDetails = { name: "James", id: 1010, dob: new Date(1995, 5, 10) };

const clonedEmpDetails = { ...empDetails };
```

Output
```js
{name: "James", id: 1010, dob: Sat Jun 10 1995 00:00:00 GMT+0530 (India Standard Time)}
```

## String to Array

* Changing the value of particular field in each object within the array. Here we changed the status field value based on its current value.

```js
const pageName = "CodingSparkles";

const charArray = [...pageName];
```

Output
```js
["C", "o", "d", "i", "n", "g", "S", "p", "a", "r", "k", "l", "e", "s"]
```

## Arguements to Array

* Changing the value of particular field in each object within the array. Here we changed the status field value based on its current value.

```js
const printFruits = (...args) => {
    args.map(item => console.log(item));
};

printFruits("apple", "orange");
```

Output
```js
apple
orange
```

References

* [<b>Spread syntax (...)</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - MDN