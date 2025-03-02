import { useRecipeStore } from './components/recipeStore';
import { Link } from 'react-router-dom';
  const RecipeList = () => {
    const {recipes, filteredRecipes} = useRecipeStore(state => state.recipes);

    const SearchChange = (e) => {
      const newSearchTerm = e.target.value;
      setSearchTerm(newSearchTerm);
      filterRecipes(newSearchTerm);
    };
  
    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
         <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))
        ) : (
          <p>No matching recipes found.</p>
        )}
      </ul>
      </div>
    );
  };
  export default RecipeList;