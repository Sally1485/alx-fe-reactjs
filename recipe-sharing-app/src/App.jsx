import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  const [count, setCount] = useState(0);
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <Link to="/">Add Recipe</Link>
        <Link to="/recipes">Recipe List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
         <SearchBar />
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  );
}

export default App;
