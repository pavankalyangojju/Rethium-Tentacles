var BatteryStat = function (StatusId) {
    if (StatusId == "BatteriesUsedToday") {
        document.getElementById(StatusId).innerHTML = "15";
    }
    else if (StatusId == "BatteriesDispatched") {
        document.getElementById(StatusId).innerHTML = "15";
    }
    else if (StatusId == "Batteries Power") {
        document.getElementById(StatusId).innerHTML = "800amps";
    }
}