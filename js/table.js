

function createTable(json) {
    console.log("reading the json in table js");
    console.log(json.data);

    for (let i = 0; i < json.data.length; i++) {

        let element = json.data[i];
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                if (key === "data_year") {
                    continue;
                }
                var newRow = $("<tr>");
                newRow.append(`<td>${key}</td>`);
                newRow.append(`<td>${element[key]}</td>`);
                newRow.append(`<td>${element.data_year}</td>`);

                $("#tableBody").append(newRow);
            }
          }
            
    }




    $('#myTable').DataTable(
        {
            responsive: true,
            searching: false,
            columnDefs: [
                {
                    target: 1,
                    render: DataTable.render.number(null, null, 0),
                },
                {
                    target: 2,
                
                },
                {
                    targets: [2, 2],
                    className: 'dt-body-right'
                }
            ],
            
        }

    );
}