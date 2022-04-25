/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Exchange from "../pages/exchange";
import Image from "./image";

// Exchange Listing for medium view and above
const ListCard = ({ exchange, index }) => {
	const { id, name, image, url, country, trust_score_rank } = exchange;
	return (
		<>
			<tr className='bg-white'>
				<td className='p-5'>{index}</td>
				<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
					<Link
						to={`exchanges/${id}`}
						element={<Exchange />}
						className='flex items-center cursor-pointer'>
						<Image image={image} />
						<p className='px-3 text-gray-900 font-bold'>{name}</p>
					</Link>
				</td>
				<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
					{country}
				</td>
				<td className='p-3 text-sm text-gray-700 whitespace-nowrap hover:underline hover:underline-offset-2'>
					<a href={url} className='p-1.5'>
						{url}
					</a>
				</td>
				<td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
					{trust_score_rank}
				</td>
			</tr>
		</>
	);
};

export default ListCard;
