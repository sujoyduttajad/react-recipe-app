import React, {useState, useEffect} from 'react'
import './styles/app.scss';
import {API_ID, API_KEY} from './lib/API_KEY'
import Recipe from './components/Recipe'
import Sidebar from './components/Sidebar'
import TrendSection from './components/TrendSection'

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

  const handleSearch = (e) => {
      setSearch(e.target.value);
  }
  const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="sidebar">
            <Sidebar />
             
          </div>
        </div>
        <div className="col-lg-6">
          <div className="body">
          <Recipe 
            getSearch={getSearch}
            search={search}
            handleSearch={handleSearch}
            recipes={recipes} 
          />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="add">
          <TrendSection  recipes={recipes} />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
