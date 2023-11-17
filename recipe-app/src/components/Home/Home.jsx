import React from "react";

export function Home() {
  return (
    <section className="food_section layout_padding-bottom">
      <div className="Welcome">
        <b>Welcome to the Recipe Sharing Platform</b>
        <p>Find and share the best recipes from around the world!</p>
      </div>
      <div className="container">
        <div className="filters-content">
          <div className="row grid"></div>
        </div>
      </div>
    </section>
  );
}
