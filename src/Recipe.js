import React from 'react';
import './recipe.css';

const Recipe = (props) => {
  return (
    <div className="recipe">
      <h1>{props.title}</h1>
      <p>Calories: {props.calories}</p>
      <img className="image" src={props.image} alt="" />
      <ol>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
    </div >
  );
};

export default Recipe;