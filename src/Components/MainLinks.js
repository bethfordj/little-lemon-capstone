import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLinks = () => {

	return <>
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
        </>
};

export default MainLinks;