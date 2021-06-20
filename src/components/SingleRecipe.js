import React from 'react'
import style from './SingleRecipe.module.css'


const SingleRecipe = ({title, calories, image, ingredients}) => {
    return (

        <div className={style.recipe}>
            <h1 className={style.header}>{title}</h1>
            <img className={style.image} src={image} alt={title} /> 
            <h2>Calories - {Math.floor(calories)}</h2>
            {/* <ol><strong>Ingredients -</strong>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol> */}
        </div>
    )
}

export default SingleRecipe
