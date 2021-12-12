import React from "react";
import "./Collections.scss";
import weth from "../assets/images/weth.png";

function Collections({ id, name, traits, image }) {
	return (
		<div className="collectionCard">
			<div className="img">
				<img src={image} alt="" />
			</div>
			<div className="details">
				<div className="name">
					{name} <div className="id">#{id}</div>
				</div>
				<div className="priceContainer">
					<img src={weth} className="wethImage" alt="" />
					<div className="price">{traits[0]?.value}</div>
				</div>
			</div>
		</div>
	);
}

export default Collections;
