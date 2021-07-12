import React, {useState, useEffect} from 'react'
import HomeRecipe from './components/HomeRecipe'
import RecipePage from './components/RecipePage'
import {API_ID, API_KEY} from './lib/API_KEY.js'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const APP_ID = API_ID;
  const APP_KEY = API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();

  useEffect(() => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
      // const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const response = await fetch(`https://api.spoonacular.com/food/search?&apiKey=52a0416844ff494189c4c94381c1e4b0&number=100`);
      const data = await response.json();
      console.log(data);
      setRecipes(data.searchResults[0].results);
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
                      /> )}
          />
          <Route path='/recipes' exact component={() => (
                      <RecipePage 
                        recipes={recipes}
                      /> )}
          />
        </Switch>
      </Router>
      
    </>
    
  );
}

export default App;
