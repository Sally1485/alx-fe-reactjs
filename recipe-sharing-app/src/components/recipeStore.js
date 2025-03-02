import create from 'zustand'
import RecommendationsList from './RecommendationsList';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id), })),
  updateRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id)})),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      setRecommendationsList: (id) =>set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id)})),
  )}))
}));
 export default useRecipeStore;