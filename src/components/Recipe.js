import React, {useState, useEffect} from 'react'
import {API_ID, API_KEY} from '../lib/API_KEY'
import SingleRecipe from './SingleRecipe'


const Recipe = () => {

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
        const data = await response.json();
        console.log(data);
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
        <div className="main-body">
            <form onSubmit={getSearch} className="search-form">
                <input 
                    className="search-bar" 
                    type="text" 
                    value={search} 
                    onChange={handleSearch}
                    placeholder="Search any recipe"
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    
                    <SingleRecipe key={index} 
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        // ingredients={recipe.recipe.ingredients}
                    />
                    
                ))}
            </div>
        </div>
    )
}

export default Recipe
