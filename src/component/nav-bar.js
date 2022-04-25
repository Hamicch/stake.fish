import React from "react";
import Logo from "./logo";

const NavBar = () => {
	return (
		<header className='sticky top-0 z-10'>
			<nav className='flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2'>
				<div className='flex items-center justify-between px-8 md:px-0'>
					<span className='text-2xl text-gray-900 font-semibold'>
						{/* navabar logo  */}
						<Logo />
					</span>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
