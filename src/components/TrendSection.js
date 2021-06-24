import React from 'react'
import add from '../images/food-add.svg'


const TrendSection = () => {
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

                </div>
            </section>
        </aside>
    )
}

export default TrendSection
