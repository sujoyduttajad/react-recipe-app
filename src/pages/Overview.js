import React from 'react'
import Recipe from './Recipe'
import Sidebar from './Sidebar'
import TrendSection from './TrendSection'


function HomeRecipe({ search, setSearch, setQuery, recipes, dietType}) {

    
  return (
    <div className="container">
      <div className="row">
        
          <div className="sidebar">
            <Sidebar />           
          </div>
        
          {/* <div className="body">
            <Recipe 
                setSearch={setSearch}
                search={search}
                setQuery={setQuery}
                recipes={recipes} 
            />
          </div> */}
        
          <div className="add">
            <TrendSection  dietType={dietType} />
          </div>
        
      </div>
    </div>
  )

}


export default HomeRecipe;