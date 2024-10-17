const recipeContainer = document.querySelector('.recipes-container')

let Alldishesrecipe


fetch('https://ravimelinkeri.github.io/dishes_json/dishes.json')
.then((res) => res.json())
.then(data => {

    randerdata(data)
    Alldishesrecipe = data
}
   )

function randerdata(){
    recipeContainer.innerHTML= ''

    data.forEach((Dish) =>{
 
        //  console.log(Dish.name.Dishname);
    
    
        
        const recipeCard = document.createElement('a')
        recipeCard.classList.add('recipe-card')
        recipeCard.href = `recipe-details.html?name=${Dish.name.Dishname}`
    
        recipeCard.innerHTML = `
         <img src="${Dish.name.img}" alt="img">
                <div class="small-intro">
                    <h3 class="title"> ${Dish.name.Dish} </h3>
                    <p><span class="bold">Type of Dish : </span>${Dish.name.typeofDish}</p>
                    <h3 class="Nutrition-del"> Nutrition</h3>
                    <p><span class="bold"> Calories : </span> ${Dish.name.nurtrition.Calories}</p>
                    <p><span class="bold"> Protein : </span>${Dish.name.nurtrition.Protein}</p>
                    <h3 class="Nutrition-del"> Preparation Time</h3>
                    <p><span class="bold"> Time for Cook : </span>${Dish.name.totalTime} </p>
                </div>
    `
    
    
    recipeContainer.append(recipeCard)
         
     
    })

}



