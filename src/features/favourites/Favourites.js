import React from "react";
import { useSelector } from "react-redux";
import { selectFavourites } from "./favouritesSlice";
import { FavouritesThumb } from "../../common/";

const Favourites = () => {

	const myFavourites = useSelector(selectFavourites);
	//console.log("<Favourites />", myFavourites);
	
	return (
		<div className="App-main">
			<div className="App-inner">
				<h1>
					My Favourites
				</h1>

				<ul className="list">
					{myFavourites.map((item, idx) => (<FavouritesThumb key={idx} idx={item} />))}
				</ul>
			</div>
		</div>
	);
};

export default Favourites;
