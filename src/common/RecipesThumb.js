import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipesThumb = ({ idMeal, isFav, strMealThumb, strMeal, handleFavourite }) => {

	return (
		<React.Fragment>
			<li className="thumb">
				<div className="thumb__meta">
					<Link 
						className="thumb__title" 
						to={`/recipe/${idMeal}/`}
					>
						{strMeal}
					</Link> 
					<button 
						className="thumb__toggle" 
						onClick={() => handleFavourite({ idMeal })}
					>
						{isFav 
							? <Fragment>
								<FaHeart /> <span className="u-visually-hidden">Add to favourites</span>
							</Fragment> 
							: <Fragment>
								<FaRegHeart /> <span className="u-visually-hidden">Remove from favourites</span>
							</Fragment>} 
					</button> 
				</div>
				<div className="thumb__img">
					<img 
						src={strMealThumb} 
						width={320} 
						height={320} 
						alt={strMeal} 
					/> 
				</div>
			</li>
		</React.Fragment>
	);
};

RecipesThumb.propTypes = {
	idMeal: PropTypes.string.isRequired,
	isFav: PropTypes.bool.isRequired, 
	strMealThumb: PropTypes.string.isRequired, 
	strMeal: PropTypes.string.isRequired, 
	handleFavourite: PropTypes.func.isRequired,
};

export default RecipesThumb;
