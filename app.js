// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = $("tbody")
function buildTable(ufos) {
  tbody.html("");
  ufos.forEach(dataRow => {
    let  row = tbody.append("<tr></tr>");
    Object.values(dataRow).forEach((val) => {
     
        row.append("<td>" + val + "</td>");
       
    });
  });
}
function handleClick(tableData){

  console.log("I clicked ")


  // grab the user's input value 

  let ufoInput =  $("#datetime").val();

 
  console.log(ufoInput)

  // filter the tableData 

  var filteredData = tableData.filter(data => data.datetime === ufoInput);

    // buildTable(filtereddate); <-- pass in the new filter data into our buildData function 
    buildTable(filteredData)
}

$("#filter-btn").on("click", function(){
  handleClick(tableData)
})


buildTable(tableData);


