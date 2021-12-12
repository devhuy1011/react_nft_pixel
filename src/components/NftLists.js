import React from "react";
import "./NtfList.scss";
import Collections from "./Collections";

function NftLists({ ntfData, setSelectedNft }) {
	return (
		<div className="ntfList">
			{ntfData?.map((ntf, index) => {
				return (
					<div onClick={() => setSelectedNft(ntf.token_id)}>
						<Collections
							key={ntf.token_id}
							id={ntf.id}
							name={ntf.name}
							traits={ntf.traits}
							image={ntf.image_original_url}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default NftLists;
