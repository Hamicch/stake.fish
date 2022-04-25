import React from "react";

const Loading = () => {
	return (
		<>
			<div className='bg-gray-200 flex justify-center items-center min-h-screen min-w-min'>
				<div
					className='w-14 h-14 rounded-full animate-spin
                    border-4 border-solid border-gray-100 border-t-transparent'></div>
			</div>
		</>
	);
};
export default Loading;
