import React from 'react'
const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations); // Get recommendations
function RecommendationsList() {
    
              return (
          <div>
            <h2>Recommended Recipes</h2>
            {recommendations.length > 0 ? (
              <ul>
                {recommendations.map((recipe) => (
                  <li key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recommendations available.</p>
            )}
          </div>
        );
      
}
}

export default RecommendationsList0;