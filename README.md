# UFOs

## Project Overview 
Dana pick the subject UFO sightings to write her article. The data of UFO sightings is in a javascript file. Dana needs to manipulate the data by adding filters and put all data in a tidy html page.


This module has taught me the following:

1. JavaScript Basics
2. EavaScript Basics 
3. Building Webpages with 
4. Functional JavaScript 
5. JavaScript for Loops 
6. Building Dynamic Tables
7. Build the HTML 

## Static Folder
- css folder
        - style.css : style 
- images folder
        - nasa.jpg : header background photo
- js folder
        - app.js : The code for the filter function and reference to the data
        - data.js : The raw data of the UFO sightings

        
## Documents

- .gitignore
- index.html : the html code where all the data and filters are organized

## Summary

The app.js is the code that allows us to filter the data by date, and click the filter button. The css and html documents allowed us to diplay all the data visually in a organized html. 

The data can be searched and filtered by date on the html. 

# Module 11 Challenge 

## Challenge overview

1.Include five total filters in the table:

      Date
      City
      State
      Country
      Shape
To create these additional filters, keep the following points in mind:

- You will need to create a new function that will replace your handleClick(); function. This function saves the element, value, and the id of the filter that was changed.
      - Create an if-else statement to add filter data from input, or clear the filter if no input data exists.
- Additionally, create a function named filterTable(); that will perform the following actions:
      - Set the filtered data to the table.
      - Loop through all of the filters and keep any data that matches the filter values.
      - Rebuild the table by calling the buildTable(); function created earlier.
- Finally, using d3.selectAll();, attach an event listener to pick up changes that are made to each filter.

## Summary Challenge
***Please note the code/information can be found in app.js and when running the html

All data can be filtered by the 5 total categories on the html page. 
