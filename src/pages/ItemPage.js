import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectFavourites, toggleFavourite } from "../features/favourites/favouritesSlice";
import { Spinner } from "../common/";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const fetchByMealId = mealId => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
	.then(res => res.json())
	.then((data) => { 
		return data.meals[0];
	});

const fetchFavouriteMeals = meals => meals.map(mealId => fetchByMealId(mealId));

const ItemPage = () => {

	// Nothing
	const myFavourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { mealId } = useParams();

	useEffect(() => {
		//console.log("STARTUP");
		Promise
			.all(fetchFavouriteMeals([+mealId]))
			.then((data) => {
			//console.log("DATA", data)
				setRecipeResource(data);
				setIsLoading(false);
			});
	}, [mealId]);

	const handleFavourite = (e) => {
		//console.log("handleFavourite", e);
		dispatch(toggleFavourite(e.idMeal));
	};

	const [recipe] = recipeResource;
	const isFav = recipe && myFavourites.includes(+recipe.idMeal);

	return (
		<div className="App-main">
			<div className="App-inner">
				{isLoading 
					? <Spinner /> 
					: <div className="item">
						<div className="item__meta">
							<h1>
								{recipe.strMeal}
							</h1>
							<dl>
								<dt>
									Description
								</dt>
								<dd>
									{recipe.strInstructions}
								</dd>
								<dt>
									Area
								</dt>
								<dd>
									{recipe.strArea}
								</dd>
								<dt>
									Category
								</dt>
								<dd>
									{recipe.strCategory}
								</dd>
								<dt>
									Tags
								</dt>
								<dd>
									{recipe.strTags}
								</dd>
							</dl>
						</div>
						<div className="item__thumb">
							<img src={recipe.strMealThumb} height={300} width={300} alt=""/>
							<p>
								<button 
									className="cta"
									onClick={() => handleFavourite({ idMeal: +recipe.idMeal })}
								>
									{!isFav 
										? <Fragment><FaRegHeart /> <span>Add to favourites</span></Fragment> 
										: <Fragment><FaHeart /> <span>Remove from favourites</span></Fragment>} 
								</button>
							</p>
						</div>
					</div>}
			</div>
		</div>
	);
};

export default ItemPage;
