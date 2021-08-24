import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavourites, toggleFavourite } from "../features/favourites/favouritesSlice";
import { RecipesList, Spinner } from "../common/";

const ListPage = () => {
	const myFavourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	const [recipeResource, setRecipeResource] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		window.localStorage.setItem("favourites", JSON.stringify(myFavourites));
	}, [myFavourites]);

	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
		// data.recipes
		//fetch("https://api.spoonacular.com/recipes/random?number=20&tags=vegetarian&apiKey=3fcd89c737204c9d9e588415088e7b96")
			.then(res => res.json())
			.then((data) => {
				setRecipeResource(data.meals);
				setIsLoading(false);
			})
			.catch((err) => {
				setHasError(true);
				setIsLoading(false);
				//console.log(err);
			});
		// return () => {
		// 	cleanup
		// };
	}, []);

	const handleFavourite = (e) => {
		//console.log("handleFavourite", e);
		dispatch(toggleFavourite(e.idMeal));
	};

	return (
		<div className="App-main">
			<div className="App-inner">
				<h1>
					Random
				</h1>
				
				{hasError && <div>:(</div>}

				{isLoading && <Spinner />}

				{recipeResource && <RecipesList 
					list={recipeResource} 
					handleFavourite={handleFavourite}
					myFavourites={myFavourites}
				/>}
			</div>
		</div>
	);
};

export default ListPage;
