---
title: Three Possible Ways to Reverse a String
date: "2021-10-05T04:00:00.284Z"
description: In this article we can learn three possible ways to reverse a string in JavaScript...
thumb: ReverseString.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@hunterjamesphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hunter James</a> on <a href="https://unsplash.com/s/photos/reverse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article, we will learn about the three possible ways to reverse a string in JavaScript.

## 1) Using reverse

* In the following code example, we are splitting the given input string into an array of characters. Then reverse the array of characters and joining the individual characters into a string using the <b>join()</b> method. Finally, will get a reversed string.

```js
const reverseString = str => {
    return [...str].reverse().join('');
};

reverseString("JavaScript");
```
Output

```js
tpircSavaJ
```

## 2) Using unshift

* In the following code example, we are splitting the given input string into an array of characters. Then iterating each character one by one and pushing it as the first item of an array. Finally, joining the new array of characters into a string using the <b>join()</b> method and can get a reversed string.

```js
const reverseString = str => {
    const reversedStr = [];
    [...str].forEach(item => reversedStr.unshift(item));
    return reversedStr.join('');
};

reverseString("React");
```

Output

```js
tcaeR
```

## 3) Using push

* In the following code example, we are splitting the given input string into an array of characters. Then iterating each character one by one and pushing it into an array based on their index position. Finally, joining the new array of characters into a string using the <b>join()</b> method and will get a reversed string.

```js
const reverseString = str => {
    const reversedStr = [];
    [...str].forEach((item, index) => reversedStr.push([str.length - (index + 1)]));
    return reversedStr.join('');
};

reverseString("Angular");
```
Output

```js
ralugnA
```

Hint to the methods used in the above code examples.

* [<b>reverse()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) is the default method to reverse an array.

* [<b>push()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method is adds a new item to the begining of an array.

* [<b>unshift()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method is adds a new item to the end of an array.

* [<b>forEach()</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method calls a function for each element in an array, in order.

* [<b>spread operator (...)</b>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is used to expand or spread an iterable or an array.

That’s all about this blog post friends. Share your ideas on this topic. Will learn something new in our next post.