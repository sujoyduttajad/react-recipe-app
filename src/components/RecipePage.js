import React from 'react'
import '../styles/app.scss';
import SingleRecipe from './SingleRecipe'
import Sidebar from './Sidebar'
import TrendSection from './TrendSection'
import Recipe from './Recipe';

function RecipePage({ search, setSearch, setQuery, recipes, dietType}) {

    
  return (
    <div className="container">
      <div className="row">
        
          <div className="sidebar">
            <Sidebar />           
          </div>
        
          <div className="body">
            <Recipe 
                  setSearch={setSearch}
                  search={search}
                  setQuery={setQuery}
                  recipes={recipes} 
              />
          </div>
        
          <div className="add">
            <TrendSection  dietType={dietType} />
          </div>
        
      </div>
    </div>
  )

}


export default RecipePage;