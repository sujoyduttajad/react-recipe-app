import React from 'react'
import CardRecipe from './CardRecipe'
import { Filter2, Search } from 'react-iconly';


const Recipe = ({ setSearch, search, setQuery, recipes}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    console.log(recipes);
    
    return (
        <div className="main-body">
            <form onSubmit={getSearch} className="search-form">
                <div className="search-container">
                    <Search 
                        style={{ textShadow: '10px 6px 15px rgb(71, 71, 71)'}} 
                        set="light border" 
                        stroke='bold'
                        primaryColor="#888888" 
                        size="medium"/>
                    <input 
                        className="search-bar" 
                        type="text" 
                        ref={input => input && input.focus()}
                        value={search} 
                        onChange={handleSearch}
                        placeholder="Search any recipe"
                    />
                </div>
                <button className="filter-button" type="submit">
                    <Filter2 
                        style={{ textShadow: '10px 6px 15px rgb(71, 71, 71)'}} 
                        set="light border" 
                        stroke='bold'
                        primaryColor="#FAF9FB" 
                        size="medium"/>
                    <span>Filter</span>
                </button>
            </form>
            <section className="recipes">
                {recipes.map((recipe) => (                  
                    <CardRecipe 
                        title={recipe.name}
                        calories={recipe.content}
                        image={recipe.image}
                        id={recipe.id}
                    />   
                ))}
            </section>
        </div>
    )
}

export default Recipe
