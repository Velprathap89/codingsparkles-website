---
title: Three Use Cases of Array map Method in JavaScript
date: "2021-10-06T04:00:00.284Z"
description: In this article, we are getting to explore three different use cases of the JavaScript Array map method...
thumb: Array.jpg
tags: ["JavaScript"]
---

<div class="photo-details">Photo by <a href="https://unsplash.com/@bamin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pierre Bamin</a> on <a href="https://unsplash.com/s/photos/array?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

In this article, we are getting to explore three different use cases of the JavaScript Array map method.

Input Array

```js
const employeeData = [
    {
        name: "James",
        id: 1010,
        dob: new Date(1995, 5, 10),
        status: "A",
    },
    {
        name: "William",
        id: 1001,
        dob: new Date(1989, 10, 5),
        status: "P",
    },
    {
        name: "Lucas",
        id: 1030,
        dob: new Date(1997, 6, 3),
        status: "A",
    },
    {
        name: "Ava",
        id: 1020,
        dob: new Date(1998, 8, 25),
        status: "P",
    },
]
```

## 1) Retrieve particular property/field value

* We can get (filter) the specific property/field values alone as a result. This will return the results in the new array.

* In the following code example, extracted the values of the id field from the array of objects.

```js
const getEmpIds = employeeData => employeeData.map(emp => emp.id);

getEmpIds(employeeData);
```

Output
```js
[1010, 1001, 1030, 1020]
```

## Rendering element

* It is used to render the list of items/elements one by one.

* In the following code example, displaying the employee details one by one using console.log(). Similarly, we can render the list of elements.

```js
employeeData.map(emp => {
    console.log(`Employee Id: ${emp.id};\n Employee Name: ${emp.name};\n Employee DOB: ${emp.dob}`);
});
```

Output
```js
Employee Id: 1010;
Employee Name: James;
Employee DOB: Sat Jun 10 1995 00: 00: 00 GMT + 0530(India Standard Time)
Employee Id: 1001;
Employee Name: William;
Employee DOB: Sun Nov 05 1989 00: 00: 00 GMT + 0530(India Standard Time)
Employee Id: 1030;
Employee Name: Lucas;
Employee DOB: Thu Jul 03 1997 00: 00: 00 GMT + 0530(India Standard Time)
Employee Id: 1020;
Employee Name: Ava;
Employee DOB: Fri Sep 25 1998 00: 00: 00 GMT + 0530(India Standard Time)
```

## Update particular property/field value

* It will help to update the value of the particular field in each object within the array.

* In the following code example, we are changing the status field value based on its current value.

```js
const getUpdatedEmployeeData = employeeData => employeeData.map(emp => ({
    ...emp,
    status: emp.status === "P" ? "Pending" : "Approved"
}));

getUpdatedEmployeeData(employeeData);
```

Output
```js
0: {name: "James", id: 1010, dob: Sat Jun 10 1995 00:00:00 GMT+0530 (India Standard Time), status: "Approved"}
1: {name: "William", id: 1001, dob: Sun Nov 05 1989 00:00:00 GMT+0530 (India Standard Time), status: "Pending"}
2: {name: "Lucas", id: 1030, dob: Thu Jul 03 1997 00:00:00 GMT+0530 (India Standard Time), status: "Approved"}
3: {name: "Ava", id: 1020, dob: Fri Sep 25 1998 00:00:00 GMT+0530 (India Standard Time), status: "Pending"}
```

That’s all about this blog post friends. Share your thoughts on this and the other use cases i missed to say.