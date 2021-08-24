import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavourites } from "../features/favourites/favouritesSlice";
import { FaHeart } from "react-icons/fa";
import logo from "../logo.svg";
import "./SiteHeader.scss";

const SiteHeader = () => {
	const myFavourites = useSelector(selectFavourites);
	return (
		<header className="Site-header">
			<div className="Site-header__inner">
				<div className="Site-logo">
					<img src={logo} width={70} height={70} alt="logo" />
					<h1>
						<Link to="/">Recipes Collector</Link>
					</h1>
				</div>
				<nav className="Site-nav">
					<ul>
						<li>
							<Link to="/list/">All recipes</Link>
						</li>
						<li>
							<Link className="total" to="/favourites/">
								<FaHeart />
							</Link> 
							<span>{myFavourites.length}</span>
						</li>
						{/* <li>
							<Link to="/example/">Example</Link>
						</li> */}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default SiteHeader;