---
title: How to create the Dynamic Website Header in React JS?
date: "2021-11-07T03:00:00.284Z"
description: In this article, we will learn how to create a dynamic website header in a React JS application...
thumb: dynamic-header.jpg
tags: ["React JS", "Material UI"]
---
<div class="photo-details">Photo by Format from Pexels</div>
  
In this article, we will learn how to create a dynamic website header in a React JS application.

## Step 1: Create the react application

```js
npx create-react-app react-dynamic-header

```

Test the application running status.

```js
cd react-dynamic-header
npm start
```

This will launch your browser and start the application at localhost:3000.

![Application Status](./InitialPage.png)

## Step 2: Create the DataSource

**headerData.js**

```js
export const headerData = {
  bgColor: "#fea3b8",
  fontColor: "#333333",
  title: {
    name: "CodingSparkles",
    position: "left",
    bgColor: "",
    fontColor: "",
    margin: "1rem"
  },
  menuDetails: {
    margin: "1rem",
    menuList: [
      { name: "Home", order: 1 },
      { name: "Blog", order: 2 },
      { name: "About", order: 3 },
      { name: "Contact", order: 4 },
      { name: "Privacy", order: 5 }
    ]
  }
};
```

* The *headerData* object holds information about the header component.

* The background color value of the header is represented by *bgColor*.

* The color value of the header is reprsented by *fontColor*.

* The *title* object contains information about the website title configuration.
  
  - *name* represents the site's title.

  - *position* represents the site's title position.

  - *bgColor* represents the color of the title text background.

  - *fontColor* represents the color of the title text font.

  - *margin* represents the title text's margin value.

* The object "menuDetails" contains information about the website menu configuration.

  - *margin* denotes the margin value of a menu item.

  - *menuList* contains information about the list of menus that will be rendered in the header.

     - The "name" represents the name of the menu.

     - The "order" value represents the menu order; depending on this value, the menu item rendering order is changed.

## Step 3: Render the Header

* Substitute the following code for the "App.js" page code.

### Importing required files

```js
import React, { useState } from "react";
import { headerData } from "./headerData";
import "./styles.scss";
```

* We are importing the *headerData* from the location where the data source for the header details was created.

### Initialize the state variables

```js
// state variable declaration
  const {
    title,
    menuDetails: { menuList, margin },
    fontColor,
    bgColor
  } = headerData;
  const [titlePosition, setTitlePosition] = useState(title.position);

  let titlePlacementOrder = 1,
    menuPlacementOrder = 2,
    flexDirection = "row";
  let menuItemsGroupA = [],
    menuItemsGroupB = [],
    groupAMenuPlacementOrder = 1,
    groupBMenuPlacementOrder = 2;
```
* In this section, we initialise the variables required for the dynamic website header rendering.

* The value *title, menuDetails, fontColor, bgColor* is extracted from the headerData.

* To keep the position value, we're creating the *titlePosition* state variable. This value will also change when we select a different position from the options (radio button).

* The *titlePlacementOrder* variable is used to maintain the title placement order; it is set to 1 by default.

* The *menuPlacementOrder* variable is used to keep the menu placement order, which is set to 2 by default.

* The *flexDirection* variable is used to keep the direction of the component placement; by default, it is set to *row*.

* The array variables *menuItemsGroupA, menuItemsGroupB* are used to keep the menu items in two separate arrays, which is useful for rendering the title in the middle and the menu items on the left and right. Similarly, the variables *groupAMenuPlacementOrder, groupBMenuPlacementOrder* are used to keep the menu item order when rendering the title in the middle.

### Changing the values of the declared variables

```js
// condition based value assignment
  if (titlePosition === "right") {
    titlePlacementOrder = 2;
    menuPlacementOrder = 1;
  } else if (titlePosition === "top") {
    flexDirection = "column";
  } else if (titlePosition === "bottom") {
    flexDirection = "column";
    titlePlacementOrder = 2;
    menuPlacementOrder = 1;
  } else if (titlePosition === "center") {
    titlePlacementOrder = 2;
    const midValue = Math.round(menuList.length / 2);
    menuItemsGroupA = menuList.slice(0, midValue);
    menuItemsGroupB = menuList.slice(midValue, menuList.length);
  }
```
* In this section, we change the variable values based on the position that is selected.

* For the position *center*, we are splitting the menu items into two separate arrays based on the mid value (calculated based on the menu items count).


### Rendering Menu Items

```js
// rendering menu items
  const renderMenuItems = (menuItems, menuPlacementOrder) => {
    return (
      <div
        className="menu-container"
        style={{ order: menuPlacementOrder, margin: margin }}
      >
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <div
                key={`m-${menuItem.name.toLowerCase()}`}
                className={`m-${menuItem.name.toLowerCase()} menu-item`}
                style={{
                  order: menuItem.order
                }}
              >
                {menuItem?.name || `${menuItem}_${index}`}
              </div>
            );
          })}
      </div>
    );
  };
```
### Rendering Header related Components

```js
// rendering components
  return (
    <>
      <div
        className="header-container"
        style={{ flexDirection, backgroundColor: bgColor }}
      >
        <div
          className="title-container"
          style={{
            order: titlePlacementOrder,
            backgroundColor: title?.bgColor || "transparent",
            color: title.fontColor || fontColor,
            margin: title.margin
          }}
        >
          {title?.name || "Company Name"}
        </div>
        {titlePosition === "center" ? (
          <>
            {renderMenuItems(menuItemsGroupA, groupAMenuPlacementOrder)}
            {renderMenuItems(menuItemsGroupB, groupBMenuPlacementOrder)}
          </>
        ) : (
          <>{renderMenuItems(menuList, menuPlacementOrder)}</>
        )}
      </div>
     ...
    </>
  );
```

* Here, the elements are rendered in order to display the header.

* The menu items are rendered based on the *titlePosition*. If the value is *center*, the **renderMenuItems** method is called twice, each time with a different array value. Otherwise, only call **renderMenuItems** once with all menu items.

### Adding styles

```css
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
body {
  margin: 0;
}
/* Header bar related styles */
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    font-family: 'Bree Serif', serif;
    font-weight: bold;

    .title-container {
        font-size: xx-large;
    }

    .menu-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .menu-item {
            cursor: pointer;
            &:hover {
                transform: scale(1.5);
            }
        }
    }
}
```
* The *header-container* class name contains the header-container element's style information.

* The *title-container* class name contains the title-container style information.

* The *menu-container* class name contains the menu-container and its menu-item elements style information. 

## Step 4: Rendering Radio Button Component

```js
// rendering components
  return (
    <>
      ...
      ...
      <div className="content-container">{renderRadioButton()}</div>
    </>
  );
```
* Here, we're rendering the content-container element (to show off the position-selecting radio buttons) and calling the **renderRadioButton** method to dynamically render the radio button based on an array of position values.

###  Rendering radio buttons

```js
// rendering radio button for position selection
  const renderRadioButton = () => {
    const positions = ["left", "right", "top", "bottom", "center"];
    return positions.map((pos) => {
      return (
        <div key={`position_${pos}`} className="radio-btn">
          <input
            type="radio"
            id="HeaderPosition"
            name="HeaderPosition"
            value={pos}
            checked={pos === titlePosition ? "checked" : ""}
            onChange={(e) => handleClick(e)}
          />
          <label className="radio-label" htmlFor="HeaderPosition">
            {pos}
          </label>
        </div>
      );
    });
  };
```

* In this method, the radio buttons are rendered based on the position value.

* In this case, we're rendering an html **input with type radio** element with a **onChange** event and one label element to display the position value.

### Position Change Method

```js
// change position event
  const handleClick = (event) => {
    setTitlePosition(event.target.value);
  };
```

* When we click the radio button, this **handleClick** method is called, and the title position value is updated based on the event target value.

### Adding Styles
```scss
/* Radio button related styles */
.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 92.3vh;
    background: #feb3c4;

    .radio-btn {
        width: 10rem;
        padding: 1rem;
        text-align: left;
        text-transform: capitalize;
        display: flex;
        align-items: center;

        .radio-label {
            padding: 0 1rem;
            font-weight: bold;
        }
    }
}
```

* Using the above settings, add styles to the radio button display.

The codesandbox sample is available at the following URL, and it was created using the code snippets mentioned above.

https://codesandbox.io/s/tender-feynman-h4sd1

In this article, I shown you how to make a dynamic website header based on its position value. You can experiment by adding your own ideas, working them out, and sharing your feedback.

Happy Coding!