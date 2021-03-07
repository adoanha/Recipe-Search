import React from 'react';
import './recipe.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <img className="image" src={image} alt="" />
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
    </div >
  );
};

export default Recipe;