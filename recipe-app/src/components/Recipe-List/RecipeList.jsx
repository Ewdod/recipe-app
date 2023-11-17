import React from "react";
import RecipeCart from "../Recipe-Card/RecipeCart";

export function RecipeList({ myList, onDelete }) {
  return (
    <section className="food_section layout_padding-bottom">
      <div className="Welcome">
        <b>Welcome to the Recipe Sharing Platform</b>
        <p>Find and share the best recipes from around the world!</p>
      </div>
      <div className="container">
        <div className="filters-content">
          <div className="row grid">
            {myList.map((recipe) => (
              <RecipeCart key={recipe.id} Card={recipe} onDelete={onDelete} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}