import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#D6D6D6',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

const CardRecipe = ({title, calories, image, id}) => {

    return (
        <NavLink to='/recipes' > 
            <div className='recipe'>
                <HtmlTooltip arrow  title={title} placement="bottom">
                    <img className='image' src={image} alt={title} />
                </HtmlTooltip>
                <div className="recipe-name-container">
                    <div>
                        <HtmlTooltip arrow  title={title} placement="left">
                            <h1 className='recipe-header'>{title.length > 15 ? title.slice(0, 15)+'...' : title}</h1>
                        </HtmlTooltip>
                        <h2 className="calories-header">{
                            // console.log(calories.match((^<b></b>/\d\skcal/$)))
                            console.log(calories)
                            } kcal</h2>
                    </div>
                    
                    <button 
                        className='more-recipe-button'
                        onClick={() => console.log(id)}
                    >
                        Show More
                    </button>
                </div>
            </div>
        </NavLink>
    )
}

export default CardRecipe
