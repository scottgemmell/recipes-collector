import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFavourites, toggleFavourite } from "../features/favourites/favouritesSlice";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Spinner } from "../common";

const FavouritesThumb = ({ idx }) => {

	const myFavourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const isFav = myFavourites.includes(+idx);
	
	useEffect(() => {
		//console.log("STARTUP");
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idx}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
			//console.log("B", data.meals[0]);
				return data.meals[0];
			})
			.then((data) => {
			//console.log("DATA", data)
				setRecipeResource(data);
				setIsLoading(false);
			});
	}, [idx]);

	const handleFavourite = (e) => {
		//console.log("handleFavourite", e);
		dispatch(toggleFavourite(e.idMeal));
	};

	return (
		<React.Fragment>
			{isLoading 
				? <Spinner /> 
				: <li className="thumb">
					<div className="thumb__meta">
						<Link className="thumb__title" to={`/recipe/${idx}/`}>
							{recipeResource.strMeal}
						</Link> 
						<button 
							className="thumb__toggle" 
							onClick={() => handleFavourite({ idMeal: +idx })}
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
							src={recipeResource.strMealThumb} 
							width={320} 
							height={320} 
							alt={recipeResource.strMeal} 
						/> 
					</div>
				</li>}
		</React.Fragment>
	);
};

FavouritesThumb.propTypes = {
	idx: PropTypes.number.isRequired, 
};

export default FavouritesThumb;
