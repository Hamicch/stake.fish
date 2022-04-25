import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../assets/images/stakefish_logo_white.svg";

const Logo = () => {
	return (
		<Link to={"/"}>
			<LogoSvg />
		</Link>
	);
};

export default Logo;
