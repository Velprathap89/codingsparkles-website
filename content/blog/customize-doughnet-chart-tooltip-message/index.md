---
title: How to add the Doughnet Chart in React JS application and Customize the Tooltip Message?
date: "2021-11-06T03:00:00.284Z"
description: Would you like to know how to add the Doughnet Chart in React JS application and customize the tooltip message...
thumb: Chart.jpg
tags: ["React JS"]
---
<div class="photo-details">Photo by <a href="https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Firmbee.com</a> on <a href="https://unsplash.com/s/photos/chart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>

Would you like to know how to add the [Doughnet](http://reactchartjs.github.io/react-chartjs-2/#/doughnut) Chart in React JS application and customize the tooltip message? Let's explore the steps.

## Step 1: Create the react application

```js
npx create-react-app doughnet-custom-tooltip

```

Test the application running status

```js
cd doughnet-custom-tooltip
npm start
```

This will open your browser and the application will be running in the *http://localhost:3000*.

![Application Status](./InitialPage.png)

## Step 2: Install the required packages

We are going to use the *react-chartjs-2* Doughnet chart component in this demo application. So, we need to install the required packages for that by using the following command.

```js
npm i react-chartjs-2 chart.js
```

* *react-chartjs-2* is an React wrapper for the [*Chart.js*](https://www.chartjs.org/) and it has different type of attractive chart components.

* *chart.js* library is dependent for the *react-chartjs-2* library.

## Step 3: Render the Doughnet Chart

* Modify the *App.js* page by adding the component *Doughnet* chart with the required data and options.

### Initialize the Data and Options (settings for chart)

```js
const data = {
  labels: [
    "Submitted",
    "Approved",
    "Pending",
    "Inprogress",
    "Acknowledged",
    "Shipped"
  ],
  datasets: [
    {
      data: [25, 15, 30, 15, 10, 5],
      backgroundColor: [
        "#336699",
        "#99CCFF",
        "#999933",
        "#666699",
        "#CC9933",
        "#006666"
      ],
      borderWidth: 2
    }
  ]
};

const options = {
  cutout: "80%",
  plugins: {
    title: {
      display: true,
      text: "Order Status",
      fontSize: 10
    },
    legend: {
      display: true,
      position: "right"
    }
  }
};
```
### Rendering the Doughnet Chart

```js
<div className="App">
    <Doughnut data={data} options={options} />
</div>
```
* The *data* property maintains the details of the chart data like label text, background color of the chart bar.

* The *options* property maintains the details of the chart settings like legend display and its position and title display settings.

### Adding styles

```css
#root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.App {  
  height: 500px;
  width: 500px;
}
```
* *#root* - Styles to align the chart center of the page.

* *.App* - Styles to set the height and width of the chart container element to display in particular size instead of the default size.


![Before Customization](./BeforeCustomize.png)

### Tooltip Customization

```js
  const options = {
      ...
      ...
      tooltip: {
        callbacks: {
            label: function (context) {
              let label = context.label || "";
              const data = context.dataset.data;
              const parsedValue = context.parsed;
              const total = data.reduce((a, b) => a + b, 0);
              const percentage = ((parsedValue / total) * 100).toFixed(2);
              if (percentage) {
                  label += ` : Count: ${parsedValue}, Percentage: ${percentage}%`;
              }
              return label;
            }
        }
      } 
  }
```
![After Customization](./AfterCustomize.png)

* [*callbacks*](https://www.chartjs.org/docs/latest/configuration/tooltip.html) - This tooltip callbacks method will be called before opening the each bar tooltip message. So, the customizing message we are returning in this method will be displayed in the tooltip.

A working example of the above code snippet can be found in the following codesandbox location.

https://codesandbox.io/s/relaxed-lederberg-vrql7