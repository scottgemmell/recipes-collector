import React from "react";
import spinner from "../assets/svgs/spinner.svg";

const Spinner = () => {
	return (<div className="u-spinner">
		<img src={spinner} alt="Loading..." />
	</div>);
};

export default Spinner;