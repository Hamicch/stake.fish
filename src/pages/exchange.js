/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import axios from "axios";
import Loading from "../component/loader";
import Image from "../component/image";

const Exchange = () => {
	const navigate = useNavigate();
	const params = useParams();

	const [exchange, setExchange] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	let dollarUSLocale = Intl.NumberFormat("en-US");

	const URL = `https://api.coingecko.com/api/v3/exchanges/${params.id}`;

	useEffect(() => {
		getExchange();
	}, []);

	// Fetch exchange data
	const getExchange = async () => {
		try {
			const response = await axios.get(URL);
			setExchange(response.data);
			setError(error);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div className='p-5'>
					{/* back button  */}
					<div className='py-2 px-3 lg:hidden'>
						<button onClick={() => navigate(-1)}>
							<HiArrowSmLeft size={25} />
						</button>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-1 gap-4 p-4 rounded-lg'>
						{/* Logo and Trust Score  */}
						<div className='flex justify-between'>
							{/* images  */}
							<div className='flex pr-5'>
								<Image image={exchange.image} />
								<span className='pl-3 text-lg text-gray-900 font-bold'>
									{exchange.name}
									<p className='text-sm text-gray-700'>
										{exchange.country}
									</p>
								</span>
							</div>

							{/* trust score */}
							<div className='flex flex-col justify-between text-center'>
								<p className='text-sm text-gray-800 font-bold capitalize flex flex-col'>
									Trust rank
								</p>
								<p className='text-sm text-gray-500'>
									{exchange.trust_score_rank}
								</p>
							</div>
						</div>

						{/* Statistics/Activities  */}
						<div className='flex justify-between mt-6 p-5 h-36 bg-slate-200 rounded-2xl'>
							<div className='flex flex-col justify-between'>
								<p className='text-lg text-gray-400 font-semibold'>
									Activity
								</p>
								<p className='text-2xl text-black font-bold'>
									₿{" "}
									{dollarUSLocale.format(
										exchange.trade_volume_24h_btc_normalized.toFixed(
											0
										)
									)}
									K
								</p>
								<p className='text-gray-400'>
									24h volume normalized
								</p>
							</div>
						</div>

						{/* Exchanges Details  */}
						<div className='flex justify-between mt-6 p-5 h-auto bg-slate-200 rounded-2xl overflow-hidden'>
							<div className='flex flex-col justify-between space-y-6 w-full'>
								<div className='flex justify-between'>
									{/* Decscription  */}
									<p className='text-lg text-gray-400 font-semibold'>
										About
									</p>
									{/* Year of Establishment  */}
									<p className='text-gray-500'>
										Established:
										<span className='text-gray-800 font-medium'>
											{" "}
											{exchange.year_established}
										</span>
									</p>
								</div>
								<p className='text-base'>
									{exchange.description}
								</p>

								{/* Website */}
								<a
									href='https://www.binance.com'
									className='text-gray-500 hover:underline-offset-4'>
									<p className='text-ellipsis overflow-hidden'>
										{exchange.url}
									</p>
								</a>
							</div>
						</div>

						{/* social media links */}
						<div className='flex items-center justify-evenly'>
							<div className='w-48 flex items-center justify-evenly'>
								<span>
									<AiFillTwitterCircle size={25} />
								</span>
								<span>
									<AiFillGithub size={25} />
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Exchange;
