/* eslint-disable react/prop-types */

import React from "react";
import NavBar from "../component/nav-bar";

// general layout for the application
const Layout = (props) => {
	return (
		<>
			<div className='min-h-screen bg-gray-100'>
				<NavBar />
				<div>{props.children}</div>
			</div>
		</>
	);
};

export default Layout;
