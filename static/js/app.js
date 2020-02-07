// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
//     // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//         // Apply `filter` to the table data to only keep the
//         // rows where the `datetime` value matches the filter value
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };
//     // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
// };

// Keep track of all filters
var filters = {};
  // This function will replace your handleClick functionfunction updateFilters() { 
function updateFilters(){
  // Save the element, value, and id of the filter that was changed  
  let changedElement = d3.select(this);
  let changedValue = changedElement.property("value");
  let changedId = changedElement.attr("id");
  // If a filter value was entered then add that filterId and value 
  if (changedValue){
    filters[changedId] = changedValue;

  }
  // to the filters list. Otherwise, clear that filter from the filters object
  else{
    delete filters[changedId];
  };
  // Call function to apply all filters and rebuild the table  
  filterTable();
}


function filterTable() {  
  // Set the filteredData to the tableData  
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that  matches the filter values
  Object.entries(filters).forEach (([key,value])=>{
    filteredData=filteredData.filter(row => row[key] === value);
  });
  // Finally, rebuild the table using the filtered Data  
  buildTable(filteredData);
}

 
// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateFilters);
// Build the table when the page loads
buildTable(tableData);