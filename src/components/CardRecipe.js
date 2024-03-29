import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import SingleRecipe from "../pages/SingleRecipe";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#D6D6D6",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const CardRecipe = ({ title, calories, image, id }) => {
  const [recipeID, setRecipeID] = useState(0);

  const handleRecipeClick = (id) => {
    setRecipeID(id);
    console.log(recipeID);
  };

  /* ########     Stratergy     ########
    The idea is to get the recipe_id when the user clicks(onClick) and then pass the id to 
    the SingleRecipe.js then fetch another Spoonacular API which shows all the recipe 
    information based on id. Then from there, we can get access to all the required information. 

    Below is the API that I will be using - 
    GET https://api.spoonacular.com/recipes/{id}/information

    Resource link - https://spoonacular.com/food-api/docs#Get-Recipe-Information
    TO nest directories --> to={`/recipes/${recipeID}`}
    TO go back --> to='/recipes'
    I also need to get the SingleRecipe.js called inside the CardRecipe.js    
*/

  return (
    // <NavLink to="/recipes">
    <div className="recipe">
      <HtmlTooltip arrow title={title} placement="bottom">
        <img className="image" src={image} alt={title} />
      </HtmlTooltip>
      <div className="recipe-name-container">
        <div className="recipe-calories-name">
          <h1 className="recipe-header">
            {/* {title.length > 20 ? title.slice(0, 28) + "..." : title} */}
            {title}
          </h1>
          <h2 className="calories-header">
            {
              // console.log(calories.match((^<b></b>/\d\skcal/$)))
              // console.log(calories)
            }{" "}
            500 kcal
          </h2>
        </div>
        <button
          className="more-recipe-button"
          onClick={() => handleRecipeClick(id)}
        >
          <NavLink to={`/recipes/${recipeID}`}>
            SHOW MORE
            {recipeID > 0 ? <SingleRecipe recipeID={recipeID} /> : ""}
          </NavLink>
        </button>
      </div>
    </div>
    // </NavLink>
  );
};

export default CardRecipe;
