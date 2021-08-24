import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import store from "./store";
import { Provider } from "react-redux";
import { ExamplePage, ItemPage, ListPage } from "./pages/";
import { SiteHeader } from "./common/";
import Favourites from "./features/favourites/Favourites";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<SiteHeader />
			<Switch>
				{/* <Route path="/list/">
					<ListPage />
				</Route> */}
				<Route path="/favourites/">
					<Favourites />
				</Route>
				<Route path="/example/">
					<ExamplePage />
				</Route>
				<Route path={"/recipe/:mealId/"}>
					<ItemPage />
				</Route>
				<Route path={["/", "/list/"]}>
					<ListPage />
				</Route>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
);
