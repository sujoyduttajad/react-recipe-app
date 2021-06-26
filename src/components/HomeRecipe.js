import React from 'react'
import '../styles/app.scss';
import Recipe from './Recipe'
import Sidebar from './Sidebar'
import TrendSection from './TrendSection'

function HomeRecipe({ getSearch, search, handleSearch, recipes}) {

  

  return (
    <div className="container">
      <div className="row">
        
          <div className="sidebar">
            <Sidebar />           
          </div>
        
          <div className="body">
            <Recipe 
                getSearch={getSearch}
                search={search}
                handleSearch={handleSearch}
                recipes={recipes} 
            />
          </div>
        
          <div className="add">
            <TrendSection  recipes={recipes} />
          </div>
        
      </div>
    </div>
  )

}


export default HomeRecipe;