import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const RecipeList=()=>{
    const [recipes, setRecipes] = useState([]);

     useEffect(() => {
        fetch("/src/data.json")
        .then(() => Response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error loading recipes:", error));
     },[])
     
  return (
    <div className= "text-white p-2 hover:text-blue-500 sm:p-4 md:p-8 max-w-xs sm:max-w-md md:max-w-lg rounded sm:rounded-md md:rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"    >
    <h1>Recipe List</h1>
    <ul>
        {recipes.map((recipe, index) =>(
            <li key={index}>{recipe.name}</li>
                   ))}
    </ul>
    <Link to="/RecipeList">Recipelist</Link>
    </div>
  );
};

export default RecipeList;