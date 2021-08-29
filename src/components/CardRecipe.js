import React, {useState} from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import SingleRecipe from './SingleRecipe'


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

    const [recipeID, setRecipeID] = useState('');
    

    const handleRecipeClick = (id) => {
        setRecipeID(id);
        console.log(recipeID);
    }

/* ########     Stratergy     ########
    The idea is to get the recipe_id when the user clicks(onClick) and then pass the id to 
    the SingleRecipe.js then fetch another Spoonacular API which shows all the recipe 
    information based on id. Then from there, we can get access to all the required information. 

    Below is the API that I will be using - 
    GET https://api.spoonacular.com/recipes/{id}/information

    Resource link - https://spoonacular.com/food-api/docs#Get-Recipe-Information

    I also need to get the SingleRecipe.js called inside the CardRecipe.js    
*/

    return (
        <NavLink to={`/recipes/${recipeID}`} > 
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
                            // console.log(calories)
                            } kcal</h2>
                    </div>
                    
                    <button 
                        className='more-recipe-button'
                        onClick={() => handleRecipeClick(id)}
                    >
                        Show More
                        {/* {
                            <SingleRecipe 
                            recipeID={recipeID} 
                        />
                        } */}
                    </button>
                </div>
            </div>
        </NavLink>
    )
}

export default CardRecipe
