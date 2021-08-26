import React from 'react'

const SingleRecipe = ({ recipes }) => {

    console.log(recipes.id);
    return (
        <div>
            <div>
                <div>
                    <img src={""} alt="" />
                </div>
                <h1>Recipe Name </h1>
                {
                    recipes.map((val) => console.log(val.id))
                }
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
