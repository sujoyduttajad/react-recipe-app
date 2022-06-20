import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Overview from "./pages/Overview";
import RecipePage from "./pages/RecipePage";
import { API_ID, ED_API_KEY, API_KEY } from "./lib/API_KEY.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [dietType, setDietType] = useState([]);

  // API keys
  const APP_ID = API_ID;
  const ED_APP_KEY = ED_API_KEY;
  const APP_KEY = API_KEY;

  // useEffect functions
  useEffect(() => {
    getTrendingRecipes();
  });

  useEffect(() => {
    getRecipes();
  }, [query]);

  // fetch API to get all the recipes
  const getRecipes = async () => {
    // const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // const response = await fetch(`https://api.spoonacular.com/food/search?query=${query}?&apiKey=${APP_KEY}&number=10`);
    const response = await fetch(
      `https://api.spoonacular.com/food/search?query=${query}?&apiKey=${APP_KEY}&number=10`
    );
    const data = await response.json();
    console.log(data.searchResults[0].results);
    setRecipes(data.searchResults[0].results);
  };

  // fetch API to get Trending recipes
  const getTrendingRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q&app_id=${APP_ID}&app_key=${ED_APP_KEY}&diet=balanced&limit=5`
    );
    const dietData = await response.json();
    // console.log(dietData.hits)
    setDietType(dietData.hits);
    // console.log(dietType);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Overview
                setSearch={setSearch}
                setQuery={setQuery}
                search={search}
                recipes={recipes}
                dietType={dietType}
              />
            )}
          />
          <Route
            path="/recipes"
            exact
            component={() => (
              <RecipePage
                setSearch={setSearch}
                setQuery={setQuery}
                search={search}
                recipes={recipes}
                dietType={dietType}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
