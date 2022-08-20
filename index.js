function connect() {
    var mealInput = document.getElementById("mealInput").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));

    document.getElementById('mealInput').value = ' ';
    document.getElementById('mealInfoSection').textContent = ' ';
}

function display(data) {
    var amountInput = parseInt(document.getElementById("amountInput").value);
    var mealInfoSection = document.getElementById('mealInfoSection');
    for (var a = 0; a < amountInput; a++) {
        var meal = data.meals[a];
        var mealPhoto = meal.strMealThumb;
        var mealName = meal.strMeal;
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="card border-0 shadow mealDetails text-center" style="border-radius: 10px;">
                                <img src="${mealPhoto}" class="card-img-top" style="border-radius: 10px 10px 0 0;" alt="...">
                            <div class="card-body">
                                <h3 class="card-title text-center my-3">${mealName}</h3>                         
                                <button class="btn btn-warning">Show Ingredients</button>
                            </div>
                            </div>`;
        mealInfoSection.appendChild(newDiv);

        document.getElementById('amountInput').value = ' ';
    }
}