import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Recipe from './Recipe';
import Searchrecipe from './Searchrecipe';

function App() {
  const APP_ID ='cc60905e';
  const APP_KEY ='701f689dd8546ba8a8b77551c93ad09b';
  const [recipes, setRecipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState('');
  const [search_query, setSearch_query] = useState('Chicken');

  const getRecipeData = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${search_query}
        &app_id=${APP_ID}&app_key=${APP_KEY}` 
      );
      setRecipes(response.data.hits);
      // console.log(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, [search_query])

  const updateSearchQuery = (e) => {
    setSearch_query(e.target.value);
  };
  
  const getSearchQuery = (e) => {
    e.preventDefault();
    setSearch_query(search_recipe);
    setSearch_recipe('');
  };
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-12'>
            <h2 className='text-center'>Recipe Finder</h2>
            <Searchrecipe
              getSearchQuery = { getSearchQuery }
              search_query = { search_query }
              updateSearchQuery = { updateSearchQuery }
            />
            <Recipe
              recipes = { recipes }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
