
const dishImg = document.querySelector('.dish-img')

const recipeHeading = document.querySelector('.recipe-heading')

const preparationTime = document.querySelector('.Preparationtime')
const cookingTime = document.querySelector('.cookingTime')
const totalTime = document.querySelector('.totalTime')

const Ingredients = document.querySelector('.Ingredients')

const One = document.querySelector('.one')
const Two = document.querySelector('.two')
const Three = document.querySelector('.three')
const Four = document.querySelector('.four')
const Five = document.querySelector('.five')
const Six = document.querySelector('.six')


const Calories = document.querySelector('.claries-value')
const Protein = document.querySelector('.Protein-value')
const Fat = document.querySelector('.Fat-value')
const Fibre = document.querySelector('.Fibre-value')
const Carbohydrates = document.querySelector('.Carbohydrates-value')



const Dish = new URLSearchParams(window.location.search).get('name')

// console.log(Dish);

fetch(`https://ravimelinkeri.github.io/dishes_json/Single_recipe/${Dish}.json`)
.then((res) => res.json())
.then(data => 
    data.forEach((Dish) =>{
 
    // console.log(Dish.name);

    dishImg.src = Dish.name.img
    recipeHeading.innerText = Dish.name.Dish

    preparationTime.innerText = Dish.name.preparationTime
    cookingTime.innerText = Dish.name.cockingTime
    totalTime.innerText = Dish.name.totalTime
     
    Ingredients.innerText = Dish.name.ingredients

    One.innerText = Dish.name.instructions[0]
    Two.innerText = Dish.name.instructions[1]
    Three.innerText = Dish.name.instructions[2]
    Four.innerText = Dish.name.instructions[3]
    Five.innerText = Dish.name.instructions[4]
    Six.innerText = Dish.name.instructions[5]
    
    Calories.innerText = Dish.name.nurtrition.Calories
    Protein.innerText = Dish.name.nurtrition.Protein
    Fat.innerText = Dish.name.nurtrition.Fat
    Fibre.innerText = Dish.name.nurtrition.Fiber
    Carbohydrates.innerText = Dish.name.nurtrition.Carbohydrates

}))


