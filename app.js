var text = '';
function MealSearch (){
    text = document.getElementById('your-meal').value;
    Mealconnect(text)
}

function Mealconnect(text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> TheMeal(data));

}

Mealconnect();

function TheMeal(data) {

    console.log(data.meals);
    
    var container = document.getElementById('search-container');

    for (var a=0; a < 5; a++){

     var newDiv = document.createElement("div");

     newDiv.innerHTML = `<h3> Name: ${data.meals.strMeal} </H3>
                        <p>MealID: ${data.meals.idMeal} </p>
                        <p>category: ${data.meal.strCategory}</p>
                        <p>Img: ${data.meal.strMealThumb}</p>
                        <p> Instructions: ${data.meal.strInstructions}</p>
                        <button onclick="moremeals()" id= btn-country class='btn-style'>more meals ... </button>
                         `; 
                         

   
    newDiv.classList.add('inner-style');
    container.appendChild(newDiv);
}

}

function moremeals(){
        var meal= document.getElementById("search-container").value;
        var url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
        console.log(url2)
    
        fetch(url2)
            .then(res => res.json())
            .then(data => Final(data))
    }
    
    function Final(data) {
        console.log(data.meal);
        
        var finalDiv = document.getElementById("Rest-countries")
        for (var a = 0; a < data.meal.length; a++) {
    
            var LastDiv = document.createElement('div4');
            LastDiv.innerHTML = `<h3> Name: ${data.meals.strMeal} </H3>
            <p>MealID: ${data.meals.idMeal} </p>
            <p>category: ${data.meal.strCategory}</p>
            <p>Img: ${data.meal.strMealThumb}</p>
            <p> Instructions: ${data.meal.strInstructions}</p>
            <button onclick="moremeals()" id= btn-country class='btn-style'>more meals ... </button>
             `; 
             
    
            LastDiv.classList.add("Final-style");
            finalDiv.appendChild(LastDiv);
        }
}
