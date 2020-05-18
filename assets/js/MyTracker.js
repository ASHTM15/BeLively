var cal = [];
var lbs = [];

function SetArrays(doc) {
    if (doc.data().Day == "01") {
        cal[0] = doc.data().Calory;
        lbs[0] = doc.data().Weight;
    }
    else if (doc.data().Day == "02") {
        cal[1] = doc.data().Calory;
        lbs[1] = doc.data().Weight;
    }
    else if (doc.data().Day == "03") {
        cal[2] = doc.data().Calory;
        lbs[2] = doc.data().Weight;
    }
    else if (doc.data().Day == "04") {
        cal[3] = doc.data().Calory;
        lbs[3] = doc.data().Weight;
    }
    else if (doc.data().Day == "05") {
        cal[4] = doc.data().Calory;
        lbs[4] = doc.data().Weight;
    }
    else if (doc.data().Day == "06") {
        cal[5] = doc.data().Calory;
        lbs[5] = doc.data().Weight;
    }
    else if (doc.data().Day == "07") {
        cal[6] = doc.data().Calory;
        lbs[6] = doc.data().Weight;
    }
    else if (doc.data().Day == "08") {
        cal[7] = doc.data().Calory;
        lbs[7] = doc.data().Weight;
    }
    else if (doc.data().Day == "09") {
        cal[8] = doc.data().Calory;
        lbs[8] = doc.data().Weight;
    }
    else if (doc.data().Day == "10") {
        cal[9] = doc.data().Calory;
        lbs[9] = doc.data().Weight;
    }
    else if (doc.data().Day == "11") {
        cal[10] = doc.data().Calory;
        lbs[10] = doc.data().Weight;
    }
    else if (doc.data().Day == "12") {
        cal[11] = doc.data().Calory;
        lbs[11] = doc.data().Weight;
    }
    else if (doc.data().Day == "13") {
        cal[12] = doc.data().Calory;
        lbs[12] = doc.data().Weight;
    }
    else if (doc.data().Day == "14") {
        cal[13] = doc.data().Calory;
        lbs[13] = doc.data().Weight;
    }
    else if (doc.data().Day == "15") {
        cal[14] = doc.data().Calory;
        lbs[14] = doc.data().Weight;
    }
    else if (doc.data().Day == "16") {
        cal[15] = doc.data().Calory;
        lbs[15] = doc.data().Weight;
    }
    else if (doc.data().Day == "17") {
        cal[16] = doc.data().Calory;
        lbs[16] = doc.data().Weight;
    }
    else if (doc.data().Day == "18") {
        cal[17] = doc.data().Calory;
        lbs[17] = doc.data().Weight;
    }
    else if (doc.data().Day == "19") {
        cal[18] = doc.data().Calory;
        lbs[18] = doc.data().Weight;
    }
    else if (doc.data().Day == "20") {
        cal[19] = doc.data().Calory;
        lbs[19] = doc.data().Weight;
    }
    else if (doc.data().Day == "21") {
        cal[20] = doc.data().Calory;
        lbs[20] = doc.data().Weight;
    }
    else if (doc.data().Day == "22") {
        cal[21] = doc.data().Calory;
        lbs[21] = doc.data().Weight;
    }
    else if (doc.data().Day == "23") {
        cal[22] = doc.data().Calory;
        lbs[22] = doc.data().Weight;
    }
    else if (doc.data().Day == "24") {
        cal[23] = doc.data().Calory;
        lbs[23] = doc.data().Weight;
    }
    else if (doc.data().Day == "25") {
        cal[24] = doc.data().Calory;
        lbs[24] = doc.data().Weight;
    }
    else if (doc.data().Day == "26") {
        cal[25] = doc.data().Calory;
        lbs[25] = doc.data().Weight;
    }
    else if (doc.data().Day == "27") {
        cal[26] = doc.data().Calory;
        lbs[26] = doc.data().Weight;
    }
    else if (doc.data().Day == "28") {
        cal[27] = doc.data().Calory;
        lbs[27] = doc.data().Weight;
    }
    else if (doc.data().Day == "29") {
        cal[28] = doc.data().Calory;
        lbs[28] = doc.data().Weight;
    }
    else if (doc.data().Day == "30") {
        cal[29] = doc.data().Calory;
        lbs[29] = doc.data().Weight;
    }
    else if (doc.data().Day == "31") {
        cal[30] = doc.data().Calory;
        lbs[30] = doc.data().Weight;
    }
    else {

    }
};

function SetCalWeight() {
    var cal = document.getElementById("calories").value;
    var weight = document.getElementById("Weight").value;
    var user_email = localStorage.getItem("user_email");
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var numbers = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

    var db = firebase.firestore();
    db.collection("Students").doc(user_email).collection(months[date.getMonth()]).doc(numbers[date.getDate()]).set({
        Calory: cal,
        Weight: weight,
        Day: numbers[date.getDate()]
    }).then(function () {
        location.href = "my_tracker.html";
    })
        .catch(function (error) {
        console.error("Error creating database entry: ", error);
    });

    
};

function GetData() {
    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_email");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();

    db.collection("Students").doc(user_email).collection(months[date.getMonth()]).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            SetArrays(doc);
            console.log(doc.id);

        })
    }).then(function () {
        DisplayChart();
    })
    .catch(function (error) {
        console.error("Error Grabbing Data: ", error);
    });
    
};

function DisplayChart() {
    //Create Calorie Chart
    var chart_weight = am4core.create("chartdiv_weight", am4charts.XYChart);

    // Add data
    chart_weight.data = [{
        "day": "1",
        "calory": cal[0],
        "weight": lbs[0]
    }, {
        "day": "2",
        "calory": cal[1],
        "weight": lbs[1]
    }, {
        "day": "3",
        "calory": cal[2],
        "weight": lbs[2]
    }, {
        "day": "4",
        "calory": cal[3],
        "weight": lbs[3]
    }, {
        "day": "5",
        "calory": cal[4],
        "weight": lbs[4]
    }, {
        "day": "6",
        "calory": cal[5],
        "weight": lbs[5]
    }, {
        "day": "7",
        "calory": cal[6],
        "weight": lbs[6]
    }, {
        "day": "8",
        "calory": cal[7],
        "weight": lbs[7]
    }, {
        "day": "9",
        "calory": cal[8],
        "weight": lbs[8]
    }, {
        "day": "10",
        "calory": cal[9],
        "weight": lbs[9]
    }, {
        "day": "11",
        "calory": cal[10],
        "weight": lbs[10]
    }, {
        "day": "12",
        "calory": cal[11],
        "weight": lbs[11]
    }, {
        "day": "13",
        "calory": cal[12],
        "weight": lbs[12]
    }, {
        "day": "14",
        "calory": cal[13],
        "weight": lbs[13]
    }, {
        "day": "15",
        "calory": cal[14],
        "weight": lbs[14]
    }, {
        "day": "16",
        "calory": cal[15],
        "weight": lbs[15]
    }, {
        "day": "17",
        "calory": cal[16],
        "weight": lbs[16]
    }, {
        "day": "18",
        "calory": cal[17],
        "weight": lbs[17]
    }, {
        "day": "19",
        "calory": cal[18],
        "weight": lbs[18]
    }, {
        "day": "20",
        "calory": cal[19],
        "weight": lbs[19]
    }, {
        "day": "21",
        "calory": cal[20],
        "weight": lbs[20]
    }, {
        "day": "22",
        "calory": cal[21],
        "weight": lbs[21]
    }, {
        "day": "23",
        "calory": cal[22],
        "weight": lbs[22]
    }, {
        "day": "24",
        "calory": cal[23],
        "weight": lbs[23]
    }, {
        "day": "25",
        "calory": cal[24],
        "weight": lbs[24]
    }, {
        "day": "26",
        "calory": cal[25],
        "weight": lbs[25]
    }, {
        "day": "27",
        "calory": cal[26],
        "weight": lbs[26]
    }, {
        "day": "28",
        "calory": cal[27],
        "weight": lbs[27]
    }, {
        "day": "29",
        "calory": cal[28],
        "weight": lbs[28]

    }, {
        "day": "30",
        "calory": cal[29],
        "weight": lbs[29]
    }, {
        "day": "31",
        "calory": cal[30],
        "weight": lbs[30]
    }];


    // Create axes
    let categoryAxis = chart_weight.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "day";
    categoryAxis.title.text = "Days";

    let valueAxis = chart_weight.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Weight";

    // Create series
    var series = chart_weight.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "weight";
    series.dataFields.categoryX = "day";
    series.name = "Day";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#f56a6a"); // fill


    var chart_calories = am4core.create("chartdiv_calories", am4charts.XYChart);

    // Add data
    chart_calories.data = [{
        "day": "1",
        "calory": cal[0],
        "weight": lbs[0]
    }, {
        "day": "2",
        "calory": cal[1],
        "weight": lbs[1]
    }, {
        "day": "3",
        "calory": cal[2],
        "weight": lbs[2]
    }, {
        "day": "4",
        "calory": cal[3],
        "weight": lbs[3]
    }, {
        "day": "5",
        "calory": cal[4],
        "weight": lbs[4]
    }, {
        "day": "6",
        "calory": cal[5],
        "weight": lbs[5]
    }, {
        "day": "7",
        "calory": cal[6],
        "weight": lbs[6]
    }, {
        "day": "8",
        "calory": cal[7],
        "weight": lbs[7]
    }, {
        "day": "9",
        "calory": cal[8],
        "weight": lbs[8]
    }, {
        "day": "10",
        "calory": cal[9],
        "weight": lbs[9]
    }, {
        "day": "11",
        "calory": cal[10],
        "weight": lbs[10]
    }, {
        "day": "12",
        "calory": cal[11],
        "weight": lbs[11]
    }, {
        "day": "13",
        "calory": cal[12],
        "weight": lbs[12]
    }, {
        "day": "14",
        "calory": cal[13],
        "weight": lbs[13]
    }, {
        "day": "15",
        "calory": cal[14],
        "weight": lbs[14]
    }, {
        "day": "16",
        "calory": cal[15],
        "weight": lbs[15]
    }, {
        "day": "17",
        "calory": cal[16],
        "weight": lbs[16]
    }, {
        "day": "18",
        "calory": cal[17],
        "weight": lbs[17]
    }, {
        "day": "19",
        "calory": cal[18],
        "weight": lbs[18]
    }, {
        "day": "20",
        "calory": cal[19],
        "weight": lbs[19]
    }, {
        "day": "21",
        "calory": cal[20],
        "weight": lbs[20]
    }, {
        "day": "22",
        "calory": cal[21],
        "weight": lbs[21]
    }, {
        "day": "23",
        "calory": cal[22],
        "weight": lbs[22]
    }, {
        "day": "24",
        "calory": cal[23],
        "weight": lbs[23]
    }, {
        "day": "25",
        "calory": cal[24],
        "weight": lbs[24]
    }, {
        "day": "26",
        "calory": cal[25],
        "weight": lbs[25]
    }, {
        "day": "27",
        "calory": cal[26],
        "weight": lbs[26]
    }, {
        "day": "28",
        "calory": cal[27],
        "weight": lbs[27]
    }, {
        "day": "29",
        "calory": cal[28],
        "weight": lbs[28]

    }, {
        "day": "30",
        "calory": cal[29],
        "weight": lbs[29]
    }, {
        "day": "31",
        "calory": cal[30],
        "weight": lbs[30]
    }];


    // Create axes
    let categoryAxis2 = chart_calories.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis2.dataFields.category = "day";
    categoryAxis2.title.text = "Days";

    let valueAxis2 = chart_calories.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "Calories";

    // Create series
    var series2 = chart_calories.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "calory";
    series2.dataFields.categoryX = "day";
    series2.name = "Day";
    series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series2.columns.template.fill = am4core.color("#f56a6a"); // fill


};