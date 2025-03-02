import { useState } from 'react';
import { useRecipeStore } from './components/recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const { recipes, updateRecipe, deleteRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
    deleteRecipe: state.deleteRecipe
  }));

  const recipe = recipes.find(recipe => recipe.id === recipeId);

  // Handle case when recipe is not found
  if (!recipe) {
    return <p>Recipe not found or still loading...</p>;
  }

  // Local state for form input
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    updateRecipe(recipeId, { title, description });
    alert("Recipe updated successfully!");
  };

  // Handle delete
  const handleDelete = (event) => {
    event.preventDefault(); // Prevents any default action
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      alert("Recipe deleted successfully!");
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
      <button 
        style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }} 
        onClick={handleDelete}
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default EditRecipeForm;
