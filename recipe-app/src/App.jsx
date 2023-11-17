// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Header/Header.css";
import "./components/Home/Home.css";
import { RecipeList } from "./components/Recipe-List/RecipeList";
import "./components/Recipe-Card/RecipeCard.css";
import NewRecipeForm from "./components/newRecipeForm/NewRecipe";
import Login from "./components/Login/Login"; // Yeni Login component'ını import et

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the recipes!", error);
      });
  }, []);

  const addRecipeToList = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const handleDelete = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RecipeList myList={recipes} onDelete={handleDelete} />
              <NewRecipeForm addRecipeToList={addRecipeToList} />
            </>
          }
        />
        <Route
          path="/recipe-list"
          element={<RecipeList myList={recipes} onDelete={handleDelete} />}
        />
        <Route
          path="/new-recipe"
          element={<NewRecipeForm addRecipeToList={addRecipeToList} />}
        />
        <Route path="/login" element={<Login />} /> {/* Yeni Login route'u */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
