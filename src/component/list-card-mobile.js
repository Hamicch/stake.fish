/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Exchange from "../pages/exchange";
import Image from "./image";

// Exchange Listing for mobile view
const ListCardMobile = ({ exchange }) => {
	const { id, name, image, country, url, trust_score_rank } = exchange;
	return (
		<>
			<div className='flex flex-row justify-between bg-white space-y-3 p-4 rounded-lg shadow'>
				<Link
					to={`exchanges/${id}`}
					element={<Exchange />}
					className='flex items-center'>
					<Image image={image} />
					<span className='px-3'>
						<p className='text-base text-gray-900 font-bold'>
							{name}
						</p>
						<p className='text-xs text-gray-500'>{country}</p>
					</span>
				</Link>
				<div className='text-sm text-right flex flex-col space-y-2 font-medium text-gray-700'>
					<span className='p-1 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-md bg-opacity-50'>
						TRUST RANK {trust_score_rank}
					</span>
					<a href={url} className='text-gray-600'>
						website
					</a>
				</div>
			</div>
		</>
	);
};

export default ListCardMobile;
