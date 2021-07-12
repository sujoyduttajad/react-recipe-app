import React from 'react'
import '../styles/app.scss';
import SingleRecipe from './SingleRecipe'
import Sidebar from './Sidebar'
import TrendSection from './TrendSection'


function RecipePage({ recipes}) {

    
  return (
    <div className="container">
      <div className="row">
        
          <div className="sidebar">
            <Sidebar />           
          </div>
        
          <div className="body">
            <SingleRecipe 
                recipes={recipes} 
            />
          </div>
        
          {/* <div className="add">
            <TrendSection  recipes={recipes} />
          </div> */}
        
      </div>
    </div>
  )

}


export default RecipePage;