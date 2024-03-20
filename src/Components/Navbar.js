import React from 'react';
import NavigationLinks from './NavigationLinks';

const Navbar = () => {
	return (
			<nav  className="nav__container">
				<div className="logo-container">
					<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
				</div>
				<NavigationLinks />
			</nav>
	);
};

export default Navbar;