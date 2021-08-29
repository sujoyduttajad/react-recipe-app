import React from 'react'

const SingleRecipe = ({ recipeID }) => {

    console.log(recipeID);
    
    return (
        <div>
            <div>
                <div>
                    <img src={""} alt="" />
                </div>
                <h1>Recipe Name - {recipeID}</h1>
                
            </div>
            
            <div>Ingredients</div>
            <div>Rate & Review</div>

            <div>Social share icons</div>
            <div>Fun Facts</div>
            <div>Cusine Type</div>
            <div>Nutrients Information</div>
        </div>
    )
}

export default SingleRecipe
