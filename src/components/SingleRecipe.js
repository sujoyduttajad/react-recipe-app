import React from 'react'


const SingleRecipe = ({title, calories, image, ingredients}) => {
    return (

        <div className='recipe'>
            <img className='image' src={image} alt={title} /> 
            <h1 className='header'>{title.length > 10 ? title.slice(0, 10)+'...' : title}</h1>
            <h2>Calories - {Math.floor(calories)}kcal</h2>
            {/* <ol><strong>Ingredients -</strong>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
        </div>
    )
}

export default SingleRecipe
