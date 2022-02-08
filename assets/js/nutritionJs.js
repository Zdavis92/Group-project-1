var searchedFoodEl = document.querySelector("#food");
var buttonEl = document.querySelector("#search");
var bodyEl = document.querySelector("#body");

var searchForFood = function() {
    searchedFood = searchedFoodEl.value
    var oldResponse = document.querySelector("#responseEl");
    if (oldResponse) {
        oldResponse.textContent = ""
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
                 console.log(data)
             }
            })
        })
    }
}

buttonEl.addEventListener("click", searchForFood);