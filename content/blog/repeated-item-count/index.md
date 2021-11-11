---
title: Repeated Item Count in the given Array
date: "2021-10-06T04:00:00.284Z"
description: In this article, i am going to share information about how to calculate the repeated word count in the given array...
thumb: RepeatCount.jpg
tags: ["JavaScript"]
---

<div class="photo-details">Photo by <a href="https://unsplash.com/@ryanquintal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Quintal</a> on <a href="https://unsplash.com/collections/8474844/repeat-%2F-repeat-%2F-repeat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article, i am going to share information about how to calculate the repeated word count in the given array.

Repetition count calculation method.

```js
const getRepeatedWordDetails = (inputArray) => {
    // extract the unique items
    const uniqueItems = [...new Set(inputArray)];
    const repetationObj = {};
    // repetation item count calculation
    uniqueItems.forEach(item => {
        const filtereItem = inputArray.filter(word => word === item);
        repetationObj[item] = filtereItem.length;
    });
    return repetationObj;
}
```

Count from Array of Strings

```js
const stringArray = ["react", "js", "react", "angular", "react", "js"];

getRepeatedWordDetails(stringArray);
```

Output

```js
{react: 3, js: 2, angular: 1}
```

Count from Array of Integers

```js
const arr2 = [10, 20, 20, 30, 10, 20, 30];

getRepeatedWordDetails(arr2);
```

Output
```js
{10: 2, 20: 3, 30: 2}
```

That's it for this post friends. I have tried to find the repeated word count in this way if you guys have any other idea share with me will attempt to learn together.