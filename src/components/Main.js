import React, { useEffect, useState } from "react";
import instagram from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import "./Main.scss";

function Main({ selectedNft, ntfListData }) {
	const [activeNft, setActiveNft] = useState(ntfListData[0]);

	useEffect(() => {
		setActiveNft(ntfListData[selectedNft]);
	}, [ntfListData, selectedNft]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="nftHightLight">
					<div className="nftContainer">
						<img
							src={activeNft?.image_original_url}
							alt=""
							className="nftSelected__image"
						/>
					</div>
				</div>
				<div className="nftInfo">
					<div className="title">{activeNft.name}</div>
					<p className="itemNumber">{activeNft.id}</p>
				</div>
			</div>
			<div className="ownerDetails">
				<div className="ownerImageContainer">
					<img
						src={activeNft.owner.profile_img_url}
						alt=""
						className="ownerImage"
					/>
				</div>
				<div className="ownerNameAndHandle">
					<div>{activeNft.owner.address}</div>
					<div className="ownerHandle">@devhuy1011</div>
				</div>
				<div className="ownerLink">
					<img src={instagram} alt="" />
				</div>
				<div className="ownerLink">
					<img src={twitter} alt="" />
				</div>
				<div className="ownerLink">
					<img src={more} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Main;
