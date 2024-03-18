import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
			<nav  className="nav__container">
				<div className="logo-container">
					<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg")}></img>
				</div>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Menu</NavLink>
					</li>
					<li>
						<NavLink to="/reservations">Reservations</NavLink>
					</li>
					<li>
						<NavLink to="/order-online">Order Online</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</nav>
	);
};

export default Navbar;