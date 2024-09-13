const recipeContainer = document.querySelector('.recipes-container')




for(let recipe of recipes){

    console.log(recipe)

    const recipeCard = document.createElement('a')
    recipeCard.classList.add('recipe-card')
    // recipeCard.href = `/recipe-details.html?name=${recipe.name}`

    recipeCard.innerHTML = `
     <img src="${recipe.img}" alt="img">
            <div class="small-intro">
                <h3 class="title"> ${recipe.name} </h3>
                <p><span class="bold">Type of Dish : </span>${recipe.typeofDish}</p>
                <h3 class="Nutrition-del"> Nutrition</h3>
                <p><span class="bold"> Calories : </span> ${recipe.nurtrition.Calories}</p>
                <p><span class="bold"> Protein : </span>${recipe.nurtrition.Protein}</p>
                <p><span class="bold"> Fibre : </span>${recipe.nurtrition.Fiber} </p>
                <p><span class="bold"> Fat : </span>${recipe.nurtrition.Fat} </p>
                <p><span class="bold"> Carbohydrates : </span>${recipe.nurtrition.Carbohydrates} </p>
            </div>
`


recipeContainer.append(recipeCard)
}

