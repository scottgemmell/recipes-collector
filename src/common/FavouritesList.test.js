import React from "react";
import { shallow } from "enzyme";
import FavouritesList from "./FavouritesList";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<FavouritesList {...props} />);
	return { wrapper, props };
};

describe("<FavouritesList />", () => {
	const handleFavourite = jest.fn();
	it("renders", () => {
		const { wrapper } = setup({ 
			handleFavourite, 
			list: [{ 
				idMeal: "100",
				strMeal: "something",
				strMealThumb: "something",
				isLoading: false,
			}], 
			myFavourites: ["100"],
		});
		expect(wrapper).toMatchSnapshot();
	});
});
