import React from 'react'


const SingleRecipe = ({title, calories, image, ingredients}) => {
    return (

        <div className='recipe'>
            <img className='image' src={image} alt={title} /> 
            <div>
                <h1 className='recipe-header'>{title.length > 10 ? title.slice(0, 10)+'...' : title}</h1>
                <h2 className="calories-header">{Math.floor(calories)} kcal</h2>
            </div>
            {/* <ol><strong>Ingredients -</strong>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
        </div>
    )
}

export default SingleRecipe
