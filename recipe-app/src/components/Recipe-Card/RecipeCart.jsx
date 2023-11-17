import React from "react";

const RecipeCart = ({ Card, onDelete }) => {
  const handleDelete = () => {
    onDelete(Card.id);
  };

  return (
    <div className="col-sm-6 col-lg-4" key={Card.id}>
      <div className="box">
        <div className="img-box">
          <img src={Card.image} alt="" />
        </div>
        <div className="detail-box">
          <h5>{Card.title}</h5>
          <p>{Card.description}</p>
        </div>
        <button className="silButton" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default RecipeCart;