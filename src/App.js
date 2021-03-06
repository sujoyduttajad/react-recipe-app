import React, {useState, useEffect} from 'react'
import HomeRecipe from './components/HomeRecipe'
import RecipePage from './components/RecipePage'
import { API_ID, ED_API_KEY ,API_KEY } from './lib/API_KEY.js'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const APP_ID = API_ID;
  const ED_APP_KEY = ED_API_KEY;
  const APP_KEY = API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
      // const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await fetch(`https://api.spoonacular.com/food/complexSearch?query=${query}?&apiKey=${APP_KEY}&number=100`);
      const data = await response.json();
      console.log(data);
      setRecipes(data.searchResults.results);
  }

  const [dietType, setDietType] = useState([]);

  useEffect(() => {
    getTrendingRecipes();
  }, []);

  const getTrendingRecipes = async () => {
    
    const response = await fetch(`https://api.edamam.com/search?q&app_id=${APP_ID}&app_key=${ED_APP_KEY}`);
    const dietData = await response.json();
    console.log(dietData);
    setDietType(dietData.results);
}

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={() => (
                      <HomeRecipe 
                        setSearch={setSearch}
                        setQuery={setQuery}
                        search={search}
                        recipes={recipes}
                        dietType={dietType}
                      /> )}
          />
          <Route path='/recipes' exact component={() => (
                      <RecipePage 
                        recipes={recipes}
                        dietType={dietType}
                      /> )}
          />
        </Switch>
      </Router>
      
    </>
    
  );
}

export default App;
