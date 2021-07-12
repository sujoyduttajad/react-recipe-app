import React from 'react'
import add from '../images/food-add.svg'


const TrendSection = ({ dietType }) => {

    const healthyRecipes = dietType;
    // console.log(healthyRecipes)


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
                    {
                        healthyRecipes.map(healthy => (
                            <div className="healthy-recipes">
                                <img src={healthy.image} alt={healthy.title} />
                                <div className="healthy-recipe-label"><p>{healthy.title}</p></div>
                            </div>
                        ))
                    }                 
                </div>
            </section>
        </aside>
    )
}

export default TrendSection
