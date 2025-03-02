import React from 'react'

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  // Handle case when recipe is not found
  if (!recipe) {
    return <p>Recipe not found or already deleted.</p>;
  }

  // Handle delete action
  const handleDelete = (event) => {
    event.preventDefault(); // Prevent default behavior
    if (window.confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
      deleteRecipe(recipeId);
      alert("Recipe deleted successfully!");
      navigate('/'); // Redirect to home or another page after deletion
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button 
        onClick={handleDelete} 
        style={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default DeleteRecipeButton;
