/* eslint-disable react/prop-types */
import React from "react";
import ListCard from "../component/list-card";
import ListCardMobile from "../component/list-card-mobile";

const Exchanges = ({ exchanges }) => {
	return (
		<div className='p-5'>
			<div className='md:px-20'>
				<div className='overflow-auto rounded-lg shadow hidden md:block'>
					{/* table  */}
					<table className='w-full'>
						<thead className='bg-gray-50 border-b-2 border-gray-200 sticky top-0'>
							<tr>
								<th className='p-5 text-sm font-semibold tracking-wide text-left'>
									#
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									Exchange
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									Country
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									Website
								</th>
								<th className='p-3 text-sm font-semibold tracking-wide text-left'>
									Trust Rank
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-100 overflow-y-auto'>
							{/* table row  */}
							{exchanges.map((exchange, index) => {
								return (
									<ListCard
										exchange={exchange}
										key={exchange.id}
										index={index + 1}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			{/* mobile version of table */}
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
				{exchanges.map((exchange) => {
					return (
						<ListCardMobile exchange={exchange} key={exchange.id} />
					);
				})}
			</div>
		</div>
	);
};

export default Exchanges;
