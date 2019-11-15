function showDetails(climate) {
    var climateType = 
    climate.getAttribute("data-climate-type");
    alert("The " + climate.innerHTML + " lives in the " + climateType + " climate.");
}