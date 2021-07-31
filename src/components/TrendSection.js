import React from 'react'
import add from '../images/food-add.svg'


const TrendSection = ({ dietType }) => {

    // const healthyRecipes = dietType.filter(recipe => recipe.recipe.dietLabels[0] === 'Low-Carb' ? recipe.recipe.label : '');
    console.log(dietType)


    return (
        <aside>
            
            <section className="slideout-right">
                <div className='add-section'>
                    <img src={add} alt='upload your recipe' />
                    <div>
                    <button className='upload-recipe-button'>Upload</button>
                    </div>
                    
                </div>
                <div className='trend-section'>
                    <h1>Healthy recipes</h1>
                    {/* {
                        healthyRecipes.map(healthy => (
                            <div className="healthy-recipes">
                                <img src={healthy.recipe.image} alt={healthy.recipe.label} />
                                <div className="healthy-recipe-label"><p>{healthy.recipe.label}</p></div>
                            </div>
                        ))
                    }  */}
                </div>
            </section>
        </aside>
    )
}

export default TrendSection
