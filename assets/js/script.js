var userNameInput = document.querySelector("#userName");
var userWeightInput = document.querySelector("#userWeight");
var userBodyfatInput = document.querySelector("#userBodyfat");
var userWeightGoalInput = document.querySelector("#weightGoal");
var userBodyfatGoalInput = document.querySelector("#bodyfatGoal");
var saveBtn = document.querySelector("#saveBtn");
var userCurrent = {
    name: "",
    weight: "",
    bodyfat: "",
}
var userGoals = {
    weightGoal: "",
    bodyfatGoal: "",
}

var saveUserInfo = function() {
    var userName = document.querySelector("#userName").value
    var userWeight = document.querySelector("#userWeight").value
    var userBodyfat = document.querySelector("#userBodyfat").value
    var userWeightGoal = document.querySelector("#weightGoal").value
    var userBodyfatGoal = document.querySelector("#bodyfatGoal").value

    userCurrent.name = userName
    userCurrent.weight = userWeight
    userCurrent.bodyfat = userBodyfat

    userGoals.weightGoal = userWeightGoal
    userGoals.bodyfatGoal = userBodyfatGoal

    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
    localStorage.setItem("userGoals", JSON.stringify(userGoals));
}


saveBtn.addEventListener("click", saveUserInfo);