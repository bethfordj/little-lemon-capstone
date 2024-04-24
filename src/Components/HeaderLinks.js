import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalLoginContext } from './GlobalStateContext';
import MainLinks from './MainLinks';

const NavigationLinks = () => {
	const context = useContext(GlobalLoginContext);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [showHamburgerMenu, setShowHamburger] = useState(false);
	let content = (<></>);

	function logout() {
		context.setLoginState(false);
	};

	// a MenuButton component would be a good refactor here so this state isn't mixed with the main header.
	function toggleHamburgerMenu() {
		if(showHamburgerMenu) {
			setShowHamburger(false);
		}
		else {
			setShowHamburger(true);
		}
	}

	// If you're going to use this in a few places, *this* would be a good candidate for that global state object
	useEffect(() => {
		const handleResize = () => {
		  setScreenWidth(window.innerWidth);
		}
	
		window.addEventListener('resize', handleResize);;
		return () => { window.removeEventListener('resize', handleResize); };
	 }, [])
	
// if you're basing everything on 800 pixels width, would be good to move this to a utility method so you don't have
	// magic numbers all over the place. like fun responsive(small, big) where small & big are either elements or
	// functions that return elements
	if( context.loginState && screenWidth > 800 ) {
		content = (
			<>
				<NavLink className="logo-container" to="/">
					<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
				</NavLink>
				<ul className="menu-links__wrapper">
					<MainLinks />
					<li className="account-hover">
						<NavLink className="my-account__link" to="/my-account">My Account</NavLink>
						<NavLink className={`cart nav__hover-state-links`} to="/order-online/my-cart">My Cart</NavLink>
						<a onClick={logout} className={`logout nav__hover-state-links`} href="#">Logout</a>
					</li>
				</ul>
			</>
		);
	}
	else if(context.loginState && screenWidth < 801) {
		content = (
			<>
				<div className="navigation-row">
					<NavLink className="logo-container" to="/">
						<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
					</NavLink>
					{!showHamburgerMenu && <button onClick={() => {toggleHamburgerMenu()}} className="mobile-menu-links__open-btn"><img alt="hamburger-menu" src={require(`../assets/hamburger-menu.png`)} /></button> }
				</div>
				<div className="mobile-menu-links__wrapper">
					{showHamburgerMenu && (
					<dialog className="mobile-menu-links__dialog-box">
						<ul className="mobile-menu-links__list">
							<MainLinks />
							<li>
								<NavLink className="my-account__link" to="/my-account">My Account</NavLink>
							</li>
							<li>
								<NavLink to="/order-online/my-cart">My Cart</NavLink>
							</li>
							<li>
								<a onClick={logout} href="#">Logout</a>
							</li>
							<li>
							<button onClick={() => {toggleHamburgerMenu()}} className="mobile-menu-links__close-btn">Close</button>
							</li>
						</ul>
					</dialog>
					)}
				</div>
			</>
		)
	}
	else if(screenWidth > 801) {
		content = (
			<>
				<NavLink className="logo-container" to="/">
					<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
				</NavLink>
				<ul className="menu-links__wrapper">
					<MainLinks />
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</>
		)
	}
	else {
		content = (
			<>
				<div className="navigation-row">
					<NavLink className="logo-container" to="/">
						<img className="logo" alt="little lemon restaurant's logo" src={require("../assets/Logo.svg").default}></img>
					</NavLink>
					{!showHamburgerMenu && <button onClick={() => {toggleHamburgerMenu()}} className="mobile-menu-links__open-btn"><img alt="hamburger-menu" src={require(`../assets/hamburger-menu.png`)} /></button> }
				</div>
				<div className="mobile-menu-links__wrapper">
					{showHamburgerMenu && (
					<dialog className="mobile-menu-links__dialog-box">
						<ul className="menu-links__mobile">
							<MainLinks />
							<li>
								<NavLink to="/login">Login</NavLink>
							</li>
							<li>
								<button onClick={() => {toggleHamburgerMenu()}} className="mobile-menu-links__close-btn">Close</button>
							</li>
						</ul>
					</dialog>
					)}
				</div>
			</>
		);
	}

	return <>{content}</>
};

export default NavigationLinks;