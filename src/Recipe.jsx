import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = ({ recipes }) => {
  return (
    <>
        <div className='row justify-content-center'>
            {recipes.map((recipe, index) => 
            recipe ? (
                
                <div className='col-sm-4 text-center mb-3' key={index}>
                <img src={recipe.recipe.image}/>
                <h4>{recipe.recipe.label}</h4>
                <h5>{recipe.recipe.cuisineType[0]}</h5>
                <h6>{recipe.recipe.source}</h6>
                <p>{recipe.recipe.ingredientLines}</p>
                </div>
            ):(
                <p>Loading recipe data...</p>
            )  
            )}
        </div>
    </>
  )
}

export default Recipe