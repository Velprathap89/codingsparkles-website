---
title: Three Possible Ways to Removing First Item from Array (Array of Objects)
date: "2021-09-05T04:00:00.284Z"
description: Removing an item from the list will be more useful, while working on the applications like appointment planner. Because we may need to remove the particular appointment from the list of appointments...
thumb: RemoveItem.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Image by <a href="https://pixabay.com/users/bru-no-1161770/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3114364">Bruno /Germany</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3114364">Pixabay</a></div>

Removing an item from the list will be more useful, while working on the applications like appointment planner. Because we may need to remove the particular appointment from the list of appointments. In this article, we will explore three different methods of removing an item from the list. 

Input Array

```js
const books = [
    {
        name: 'FullStack React',
        author: 'Anthony Accomazzo, Nate Murray'
    },
    {
        name: 'Learning React: Functional Web Development with React and Redux',
        author: 'Alex Banks & Eve Porcello'
    },
    {
        name: 'The Road to React by Robin Wieruch',
        author: 'Robin Wieruch'
    },
    {
        name: 'Learn React Hooks by Daniel Bugl',
        author: 'Daniel Bugl'
    }
];
```

## 1) Using splice

* The [<b>splice()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method is adding/removing an item to/from an array and it returns the removed items. It changes the original array.

```js
const removeFirstItem = () => {
    books.splice(0, 1);
    return books;
}

removeFirstItem();
```
Output

```js
0: {name: "Learning React: Functional Web Development with React and Redux", author: "Alex Banks & Eve Porcello"}
1: {name: "The Road to React by Robin Wieruch", author: "Robin Wieruch"}
2: {name: "Learn React Hooks by Daniel Bugl", author: "Daniel Bugl"}
```

## 2) Using slice

* The [<b>slice()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method returns the selected elements in an array, as a new array object. The original array remains the same.

```js
const removeFirstItem = () => {
    const alteredBooks = books.slice(1, books.length);
    return alteredBooks;
}

removeFirstItem();
```

Output

```js
0: {name: "Learning React: Functional Web Development with React and Redux", author: "Alex Banks & Eve Porcello"}
1: {name: "The Road to React by Robin Wieruch", author: "Robin Wieruch"}
2: {name: "Learn React Hooks by Daniel Bugl", author: "Daniel Bugl"}
```

> <b>Note:</b> By using the <b>splice()</b> and <b>slice()</b> method able to remove n number of items from an array by passing the corresponding (index) value as input.

## 3) Using shift

* The [<b>shift()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method removes the first item of an array. Removed item is the return value of this method. It changes the original array.

```js
const removeFirstItem = () => {
    books.shift();
    return books;
}

removeFirstItem();
```
Output

```js
0: {name: "Learning React: Functional Web Development with React and Redux", author: "Alex Banks & Eve Porcello"}
1: {name: "The Road to React by Robin Wieruch", author: "Robin Wieruch"}
2: {name: "Learn React Hooks by Daniel Bugl", author: "Daniel Bugl"}
```

> Note: By using the <b>shift()</b> method can remove only one item (i.e. first item) from an array at a time.