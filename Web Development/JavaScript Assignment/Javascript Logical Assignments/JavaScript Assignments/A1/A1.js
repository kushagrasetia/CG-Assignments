function myFunction(fahren) {
    if (isNaN(fahren)) {
        window.alert("Invalid Input");
    } else if (fahren.length == 0) {
        window.alert("Please provide value in field");
    } else {
        var celcius = (parseInt(fahren) - 32) / 1.8;
        document.getElementById("results").innerHTML = celcius + " degree celcius";
    }

}