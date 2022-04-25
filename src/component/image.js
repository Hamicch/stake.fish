/* eslint-disable react/prop-types */
import React from "react";

// image component for medium view and above
const Image = ({ image }) => {
	return <img className='w-10 h-10 rounded-lg' src={image} />;
};

export default Image;
