import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import data from '/src/data.json'

function RecipeDetail() {
    const {id} = useParams
    const {recipe, setRecipe} = useState(null);

    useEffect(()=> {
        const recipeId = parseInt(id, 10);
        const foundRecipe = data.find((item)=>item.id ===recipeId);
        setRecipe(foundRecipe);

    }, [id]);
    if(!recipe) {
        return<div>Loading...</div>
    }
  return (
    <div className='text-center text-white'>
        <h1>{recipe.title}</h1>
        <img src="{recipe.image}" alt="{recipe.title}" />
        <h2>Ingredients</h2>
        <ul>
            {recipe.ingredients.map((ingredients,index) =>(
            <li key={index}>{ingredients}</li>
            ))}
        </ul>
        <h2>Instuctions</h2>
        <p className='text-black sm:p-4 md:p-8 max-w-xs sm:max-w-md md:max-w-lg '>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail