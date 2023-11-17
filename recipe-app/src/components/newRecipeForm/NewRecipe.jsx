import React, { useState } from "react";
import "./newRecipeForm.css";
import axios from "axios";

const NewRecipeForm = ({ addRecipeToList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !image.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    setIsLoading(true);

    axios
      .post("http://localhost:3001/recipes", { title, description, image })
      .then(() => {
        const newRecipe = {
          id: Math.floor(Math.random() * 1000), 
          title,
          description,
          image,
        };
        addRecipeToList(newRecipe);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    setTitle("");
    setDescription("");
    setImage("");
    setError("");
  };

  return (
    <form className="new-recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipe Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Add Recipe"}
      </button>
    </form>
  );
};

export default NewRecipeForm;
