let jsonRef;
var CRIMELIST = document.getElementById("crimeList");
const CRIME = 11;
const AGE = 12;
const SEX = 13;
const RACE = 14;
const API_KEY = "edmV3kgmSrqftZzFIox9HEqSxJbhxf9VYCbKIb1Z";
const yearRange = document.getElementById("yearRange");
var time = 1;
var DATA = null;



$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.usa.gov/crime/fbi/cde/arrest/national/society",
        data: {
            from: 2012,
            to: 2023,
            API_KEY: API_KEY
        },
        dataType: "json",
        success: function (json) {
            console.log("success on ajax");
            DATA = json;

            arrestArr = calculateTotalArrests(DATA);
            console.log(arrestArr);

            parseData(DATA, 0);
            createTable(DATA);


        }
    }); 

});

function onValueChanged() {
    const value = yearRange.value;
    console.log("Value is "+ value);
    parseData(DATA, value);
    // Add additional code here to handle the value change as needed.
  }

yearRange.addEventListener('input', onValueChanged);


