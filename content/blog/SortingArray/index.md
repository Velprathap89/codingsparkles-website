---
title: Sorting an Array (Array of Objects)
date: "2021-10-05T04:00:00.284Z"
description: Sorting an array of objects based on the particular property value...
thumb: SortingArray.jpg
tags: ["JavaScript"]
---

<div class="photo-details">Photo by <a href="https://unsplash.com/@uxindo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">UX Indonesia</a> on <a href="https://unsplash.com/s/photos/sorting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article we can learn the sorting an array of objects based on the particular property value.

### Input Array

```js
const employeeData = [
    {
        name: "James",
        id: 1010,
        dob: new Date(1995, 5, 10)
    },
    {
        name: "William",
        id: 1001,
        dob: new Date(1989, 10, 5)
    },
    {
        name: "Lucas",
        id: 1030,
        dob: new Date(1997, 6, 3)
    },
    {
        name: "Ava",
        id: 1020,
        dob: new Date(1998, 8, 25)
    },
]
```

### Sorting Method

```js
const getSortedData = (propertyName, originalData) => {
    const sortedData = originalData.sort((data1, data2) => {
        if (data1[propertyName] < data2[propertyName]) {
            return -1;
        } else if (data1[propertyName] > data2[propertyName]) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortedData;
}
```
## Sorting based on name property

```js
getSortedData("name", employeeData);
```

Output
```js
0: {name: "Ava", id: 1020, dob: Fri Sep 25 1998 00:00:00 GMT+0530 (India Standard Time)}
1: {name: "James", id: 1010, dob: Sat Jun 10 1995 00:00:00 GMT+0530 (India Standard Time)}
2: {name: "Lucas", id: 1030, dob: Thu Jul 03 1997 00:00:00 GMT+0530 (India Standard Time)}
3: {name: "William", id: 1001, dob: Sun Nov 05 1989 00:00:00 GMT+0530 (India Standard Time)}
```

## Sorting based on id property

```js
getSortedData("id", employeeData);
```

Output
```js
0: {name: "William", id: 1001, dob: Sun Nov 05 1989 00:00:00 GMT+0530 (India Standard Time)}
1: {name: "James", id: 1010, dob: Sat Jun 10 1995 00:00:00 GMT+0530 (India Standard Time)}
2: {name: "Ava", id: 1020, dob: Fri Sep 25 1998 00:00:00 GMT+0530 (India Standard Time)}
3: {name: "Lucas", id: 1030, dob: Thu Jul 03 1997 00:00:00 GMT+0530 (India Standard Time)}
```

## Sorting based on dob property

```js
getSortedData("dob", employeeData);
```

Output
```js
0: {name: "William", id: 1001, dob: Sun Nov 05 1989 00:00:00 GMT+0530 (India Standard Time)}
1: {name: "James", id: 1010, dob: Sat Jun 10 1995 00:00:00 GMT+0530 (India Standard Time)}
2: {name: "Lucas", id: 1030, dob: Thu Jul 03 1997 00:00:00 GMT+0530 (India Standard Time)}
3: {name: "Ava", id: 1020, dob: Fri Sep 25 1998 00:00:00 GMT+0530 (India Standard Time)}
```