import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import NftLists from "./components/NftLists";
import Main from "./components/Main";

function App() {
	const [ntfData, setNtfData] = useState([]);
	const [selectedNft, setSelectedNft] = useState(0);

	useEffect(() => {
		const getMyNft = async () => {
			const res = await axios.get(
				"https://testnets-api.opensea.io/assets?asset_contract_address=0x7AD9557b26129c5e971716635C4d0DbB90BA1d65&order_direction=asc"
			);
			setNtfData(res.data.assets);
		};
		getMyNft();
	}, []);

	return (
		<div className="App">
			<Header />
			{ntfData.length > 0 ? (
				<>
					<Main ntfListData={ntfData} selectedNft={selectedNft} />
					<NftLists
						ntfData={ntfData}
						setSelectedNft={setSelectedNft}
					/>
				</>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default App;
