var searchedFoodEl = document.querySelector("#food");
var buttonEl = document.querySelector("#search");
var nutritionEl = document.querySelector(".nutritionOne");
var searchField = document.querySelector("#submitContainer");

var searchForFood = function(event) {
    event.preventDefault();
    searchedFood = searchedFoodEl.value
    var oldResponse = document.querySelector("#responseEl");
    if (oldResponse) {
        oldResponse.remove();
    }
    if (!searchedFood) {
        return
    }else {
        var api = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GoTZEO28TS4D2wWksLsGaCUCwmSXsX3w8ZDA8flt&query=" + searchedFood

        fetch(api).then(function(response) {
         response.json().then(function(data) {
             if (data.totalPages === 0) {
                searchedFoodEl.value = ""
                var textEl = document.createElement("p")
                textEl.setAttribute("id", "responseEl");
                textEl.textContent = "Sorry nothing matched that discription. Please try agian."
                bodyEl.appendChild(textEl);
             }else {
                searchedFoodEl.value = ""
                var protein = data.foods[0].foodNutrients[0].value + data.foods[0].foodNutrients[0].unitName
                var fat = data.foods[0].foodNutrients[1].value + data.foods[0].foodNutrients[1].unitName
                var carbohydrate = data.foods[0].foodNutrients[2].value + data.foods[0].foodNutrients[2].unitName
                var calories = data.foods[0].foodNutrients[3].value + " Calories"
                var servingSize = data.foods[0].servingSize + data.foods[0].servingSizeUnit
                var textEl = document.createElement("p")
                textEl.setAttribute("id", "responseEl");
                textEl.textContent = searchedFood + " has " + protein + " of protein, " + fat + " of fat, " + carbohydrate + " of carbohydrates, and " + calories + " for a " + servingSize + " serving size."
                nutritionEl.appendChild(textEl); 
             }
            })
        })
    }
}

searchField.addEventListener("submit", searchForFood);