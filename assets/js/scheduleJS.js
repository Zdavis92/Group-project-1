var bodyEl = document.querySelector("#body")
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

    var confirmEl = document.createElement("p")
    confirmEl.textContent = "Your Schedule is saved and will now persist on this page"
    bodyEl.appendChild(confirmEl);
    saveScheduleEl.textContent = "Update Schedule"
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

        saveScheduleEl.textContent = "Update Schedule"
    }
}

var preset1 = function () {
    sundayEl.value = "Bench Press, Overhead Press, Triceps Dips"
    mondayEl.value = "Rows, Lat Pulldowns, Barbell Curls"
    tuesdayEl.value = "Squats, Deadlifts, Lunges"
    wednesdayEl.value = "Rest"
    thursdayEl.value = "Incline Press, Shoulder Press, Tricep Extenstions"
    fridayEl.value = "Pull Ups, Barbell Rows, Hammer Curls"
    saturdayEl.value = "Leg Press, Leg Extensions, Leg Curls"
}

var preset2 = function () {
    sundayEl.value = "Rest"
    mondayEl.value = "Bench Press, Rows, Triceps Dips"
    tuesdayEl.value = "Squats, Lunges, Leg Extensions"
    wednesdayEl.value = "Rest"
    thursdayEl.value = "Incline Press, Lat Pulldowns, Shoulder Press"
    fridayEl.value = "Deadlifts, Leg Press, Leg Curls"
    saturdayEl.value = "Rest"
}

var preset3 = function () {
    sundayEl.value = "Rest"
    mondayEl.value = "Bench Press, Squats, Rows"
    tuesdayEl.value = "Rest"
    wednesdayEl.value = "Incline Press, Deadlifts, Lat Pulldowns"
    thursdayEl.value = "Rest"
    fridayEl.value = "Triceps Dips, Lunges, Pull Ups"
    saturdayEl.value = "Rest"
}

loadSchedule();
saveScheduleEl.addEventListener("click", saveSchedule)
preset1El.addEventListener("click", preset1)
preset2El.addEventListener("click", preset2)
preset3El.addEventListener("click", preset3)