var userNameInput = document.querySelector("#userName");
var userWeightInput = document.querySelector("#userWeight");
var userBodyfatInput = document.querySelector("#userBodyfat");
var userWeightGoalInput = document.querySelector("#weightGoal");
var userBodyfatGoalInput = document.querySelector("#bodyfatGoal");
var saveCurrentBtn = document.querySelector("#saveBtn");
var saveGoalsBtn = document.querySelector("#saveGoals");
var userCurrent = {
    name: "",
    weight: "",
    bodyfat: "",
}
var userGoals = {
    weightGoal: "",
    bodyfatGoal: "",
}

var saveUserCurrent = function() {
    var userName = document.querySelector("#userName").value
    var userWeight = document.querySelector("#userWeight").value
    var userBodyfat = document.querySelector("#userBodyfat").value

    userCurrent.name = userName
    userCurrent.weight = userWeight
    userCurrent.bodyfat = userBodyfat

    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));

    document.querySelector("#userName").value = ""
    document.querySelector("#userWeight").value = ""
    document.querySelector("#userBodyfat").value = ""
}

var saveUserGoals = function() {
    var userWeightGoal = document.querySelector("#weightGoal").value
    var userBodyfatGoal = document.querySelector("#bodyfatGoal").value

    userGoals.weightGoal = userWeightGoal
    userGoals.bodyfatGoal = userBodyfatGoal

    localStorage.setItem("userGoals", JSON.stringify(userGoals));

    document.querySelector("#weightGoal").value = ""
    document.querySelector("#bodyfatGoal").value = ""
}

var loadUserCurrent = function() {
    userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
}

var loadUserGoals = function() {
    userGoals = JSON.parse(localStorage.getItem("userGoals"));
}
saveCurrentBtn.addEventListener("click", saveUserCurrent);
saveGoalsBtn.addEventListener("click", saveUserGoals);