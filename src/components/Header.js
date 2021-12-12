import React from "react";
import "./Header.scss";
import pixelLogo from "../assets/images/pokemon.png";
import searchIcon from "../assets/header/search.png";
import switchTheme from "../assets/header/theme-switch.png";

function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<img src={pixelLogo} className="pixel-logo" alt="" />
			</div>
			<div className="header__searchBar">
				<div className="header__searchBar-container">
					<img
						src={searchIcon}
						className="header__searchBar-container-icon"
						alt=""
					/>
					<input
						type="text"
						className="header__searchBar-container-input"
						placeholder="Collection, item or user..."
					/>
				</div>
			</div>
			<div className="header__navigation">
				<p>Drops</p>
				<p>Marketplace</p>
				<p>Create</p>
			</div>
			<div className="header__switch">
				<img src={switchTheme} className="header__switch-icon" alt="" />
			</div>
			<div className="header__login">
				<p>GET IN</p>
			</div>
		</div>
	);
}

export default Header;
