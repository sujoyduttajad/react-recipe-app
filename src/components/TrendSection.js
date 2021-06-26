import React from 'react'
import add from '../images/food-add.svg'


const TrendSection = ({  recipes }) => {

    console.log(recipes.map(recipe => recipe.recipe.healthLabels.filter(label => label )));

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
                    <div>
                        <img />
                        <div><p></p></div>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default TrendSection
