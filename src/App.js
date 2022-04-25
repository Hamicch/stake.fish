import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Exchanges from "./pages/exchanges";
import Exchange from "./pages/exchange";
import Loading from "./component/loader";
import axios from "axios";

const App = () => {
	const [exchanges, setExchanges] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const URL = "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1";

	// Previousely used a setTimeout to update the Exchanges at intervals
	// But this is not really necessary as the data does not change as often as i thought
	useEffect(() => {
		getExchange();
	}, []);

	// Fetch exchange data
	const getExchange = async () => {
		try {
			const response = await axios.get(URL);
			setExchanges(response.data);
			setError(error);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	// application routes
	return (
		<Layout>
			<Routes>
				<Route
					path='/'
					element={
						loading ? (
							<Loading />
						) : (
							<Exchanges exchanges={exchanges} />
						)
					}
				/>
				<Route path='/exchanges' element={<Exchange />}>
					<Route path=':id' element={<Exchange />} />
				</Route>
			</Routes>
		</Layout>
	);
};

export default App;
