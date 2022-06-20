import React from 'react'
import Recipe from '../components/Recipe'
import Sidebar from '../components/Sidebar'
import TrendSection from '../components/TrendSection'


function Overview({ search, setSearch, setQuery, recipes, dietType}) {

    
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


export default Overview;