var preset1El = document.querySelector("#preset1");
var preset2El = document.querySelector("#preset2");
var preset3El = document.querySelector("#preset3");
var saveScheduleEl = document.querySelector("#saveSchedule")
var sundayEl = document.querySelector("#sunday");
var mondayEl = document.querySelector("#monday");
var tuesdayEl = document.querySelector("#tuesday");
var wednesdayEl = document.querySelector("#wednesday");
var thursdayEl = document.querySelector("#thursday");
var fridayEl = document.querySelector("#friday");
var saturdayEl = document.querySelector("#saturday");
var savedSchedule = {
    sunday: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
}

var saveSchedule = function() {

    savedSchedule.sunday = sundayEl.value
    savedSchedule.monday = mondayEl.value
    savedSchedule.tuesday = tuesdayEl.value
    savedSchedule.wednesday = wednesdayEl.value
    savedSchedule.thursday = thursdayEl.value
    savedSchedule.friday = fridayEl.value
    savedSchedule.saturday = saturdayEl.value

    localStorage.setItem("schedule", JSON.stringify(savedSchedule));
}

var loadSchedule = function() {
    savedSchedule = JSON.parse(localStorage.getItem("schedule"));
    if (!savedSchedule) {
        savedSchedule = {
            sunday: "",
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: ""
        }
    } else {
        sundayEl.value = savedSchedule.sunday
        mondayEl.value = savedSchedule.monday
        tuesdayEl.value = savedSchedule.tuesday
        wednesdayEl.value = savedSchedule.wednesday
        thursdayEl.value = savedSchedule.thursday
        fridayEl.value = savedSchedule.friday
        saturdayEl.value = savedSchedule.saturday
    }
}

loadSchedule();
saveScheduleEl.addEventListener("click", saveSchedule)