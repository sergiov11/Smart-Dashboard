 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {

   // Create the data table.
   var data1 = new google.visualization.DataTable();
   data1.addColumn('string', 'COVID-19 in WA Counties');
   data1.addColumn('number', 'Rate');
   data1.addRows([
    ['King', 28.527],
    ['Pierce', 31.828],
    ['Benton', 59.109],
    ['Chelan', 66.713],
    ['Grant', 71.927],
    ['Morrow', 71.779]
   ]);

   // Set chart options
   var options1 = {'title':'COVID-19 Rates Across WA Counties',
   'backgroundColor': '#201d1d',
   'is3D': true,
   'titleTextStyle': {
       'color': 'white' // Set the text color to white
   },
   'legend': {
    'position': 'none',
  },
  'width': 600, // Set the width of the chart
  'height': 400, // Set the height of the chart
}

   // Instantiate and draw our chart, passing in some options.
   var chart1 = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart1.draw(data1, options1);
 }