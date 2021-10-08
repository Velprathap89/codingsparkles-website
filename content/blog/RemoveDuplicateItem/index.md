---
title: Five Possible Ways of Removing Duplicate Item from Array
date: "2021-10-06T02:00:00.284Z"
description: Would you like to know how to remove duplicate items from an Array? Let's explore the possible pathways....
thumb: Duplicate.jpg
tags: ["JavaScript"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@dear_jondog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Daniels</a> on <a href="https://unsplash.com/@skyestudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

Would you like to know how to remove duplicate items from an Array? Let's explore the possible pathways.

Input Array

```js
const fruitNames = ["apple", "orange", "banana", "apple", "banana", "pomegranate", "mango"];
```

## 1) Using set

* The <b>Set()</b> constructor is used to create unique values set.

* In the following code example, the <b>Set</b> constructor removing the duplicates items and returning the unique value set and the spread operator will convert it into an array.

```js
const getUniqueNames = inputArray => [...new Set(inputArray)];

getUniqueNames(fruitNames);
```
Output

```js
 ["apple", "orange", "banana", "pomegranate", "mango"]
```

## 2) Using set with from

* The from() method returns an Array object from any object with the length property or an iterable object.

```js
// new Set(inputArray) creates the unique values as a set
// Array.from converts the set values into an array
const getUniqueNames = inputArray => Array.from(new Set(inputArray));

getUniqueNames(fruitNames);
```

Output

```js
["apple", "orange", "banana", "pomegranate", "mango"]
```

## 3) Using filter

* The filter() method creates the new array with all the matching values/objects that pass the constraint.

* The indexOf() method searches the array for the specified item and returns the first matching position.

* In the following code example, we are checking the present item index value (retrieve based on the indexOf() method) is matched with index (i.e. pos) value coming to that item.  If the duplicate item is coming means, an index value of that item won't match with the first matching item position. So, it will avoid the duplicate items.

```js
const getUniqueNames = inputArray => inputArray.filter((item, pos) => inputArray.indexOf(item) === pos);

getUniqueNames(fruitNames);
```
Output

```js
["apple", "orange", "banana", "pomegranate", "mango"]
```

## 4) Using forEach with includes

* The <b>forEach()</b> method calls a function once for each element  in an array, in order.

* The <b>includes()</b> method checks whether an array contains a specified element.

* The includes() method returns true if the array contains element, else returns false. This method is case sensitive.

* In the following code example, we are maintaining one empty array (uniqueItems) and iterating the input array using the <b>forEach()</b> method and within that checking the item is out there within the array and if not pushing that item into the uniqueItems array else simply processing subsequent item.

```js
const getUniqueNames = inputArray => {
    const uniqueItems = [];
    inputArray.forEach(item => {
        if (!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
};

getUniqueNames(fruitNames);
```

Output
```js
["apple", "orange", "banana", "pomegranate", "mango"]
```

## 5) Using Reducer

* The reduce() method reduces the array into a single value.

* It executes the provided function for each element of an array.

* In the following code example, initially, the acc are going to be the empty array. While processing each item checking the item is present within the array (acc) and if it exists simply return that array else pushing the present item to the array using a spread operator. Finally, will get and unique array value.

```js
const getUniqueNames = inputArray => inputArray.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

getUniqueNames(fruitNames);
```

Output
```js
["apple", "orange", "banana", "pomegranate", "mango"]
```