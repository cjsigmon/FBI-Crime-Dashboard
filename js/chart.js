var ctx = document.getElementById('myChart');
const yearsIndex = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
var myChart = null;
const yearOfRange = document.getElementById("yearOfRange");


function parseData(json, i) {
    console.log("new load")
    console.log(json); 

    const valuesArray = Object.values(json.data[i]);
    console.log("The year is "+valuesArray[0]);
    yearOfRange.innerText = valuesArray[0];
    const excludingYear = valuesArray.slice(1).map(element => element);

    console.log("vals is");
    console.log(valuesArray);

    if (!myChart) {
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: json.keys,
          datasets: [{
            label: json.title,
            data: Object.values(excludingYear),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              suggestedMax: 3500000 // Set the maximum value for the y-axis
            }
          }
        }
      });
    } else {
      console.log("else reached")
      myChart.data.datasets[0].data = Object.values(excludingYear);
      myChart.update();
    }

    // Update the Y-axis zoom level when the range input changes
    $('#zoomRange').on('input', function() {
      const zoomLevel = parseFloat($(this).val());
      // Update the chart's options with the new scale
      myChart.options.scales.y.min = 0;
      myChart.options.scales.y.max = 3500000 / zoomLevel; // Adjust the max value based on zoom
      myChart.update();
  });

} 

$(document).ready(function () {
  console.log("society data reached");

  $(document).ready(function() {
    $('#fullscreenButton').click(function() {
        const element = $('#goBig')[0];
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    });
});

});

  


