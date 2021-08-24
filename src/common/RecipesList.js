import React from "react";
import PropTypes from "prop-types";
import RecipesThumb from "./RecipesThumb";

const RecipesList = ({ handleFavourite, list, myFavourites }) => {
	return (
		<ul className="list">
			{list.map(item => (<RecipesThumb 
				key={item.idMeal} 
				{...item} 
				isFav={myFavourites.includes(+item.idMeal)}
				handleFavourite={handleFavourite} 
			/>)
			)}
		</ul>
	);
};

RecipesList.propTypes = {
	handleFavourite: PropTypes.func.isRequired, 
	list: PropTypes.array.isRequired, 
	myFavourites: PropTypes.array.isRequired,
};

export default RecipesList;
