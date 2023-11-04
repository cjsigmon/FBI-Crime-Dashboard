var ctx = document.getElementById('myChart');
const yearsIndex = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
var myChart = null;



$(document).ready(function () {
    console.log("society data reached");

});

function parseData(json, i) {
    console.log("new load")
    console.log(json); 

    const valuesArray = Object.values(json.data[i]);
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

    } 

    

    // for (let i = 0; i < 25; i++) {
    //     let newReport = "Crime committed: " + json.data[i][CRIME] + " by " +json.data[i][AGE]
    //     + " years old " + json.data[i][RACE] + " " + json.data[i][SEX];
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode(newReport));
    //     CRIMELIST.appendChild(li);
    // }


