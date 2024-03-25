import React from 'react';
import NavigationLinks from './NavigationLinks';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
			<nav  className="nav__container">
				<NavLink className="logo-container" to="/">
					<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
				</NavLink>
				<NavigationLinks />
			</nav>
	);
};

export default Navbar;