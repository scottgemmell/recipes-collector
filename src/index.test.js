import React from "react";
import { shallow } from "enzyme";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { SiteHeader } from "../src/common";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Provider store={store}><SiteHeader {...props} /></Provider>);
	return { wrapper, props };
};

describe("<SiteHeader />", () => {
	it("renders", () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});
});
