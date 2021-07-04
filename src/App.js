import React, {useState, useEffect} from 'react'
import HomeRecipe from './components/HomeRecipe'
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
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      // const response = await fetch(`https://api.edamam.com/api/recipes/v2/?q=${chicken}app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
      const data = await response.json();
      // console.log(data.hits.filter(rec => rec.recipe.label));
      setRecipes(data.hits);
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
        </Switch>
      </Router>
      
    </>
    
  );
}

export default App;
