import React from "react";

const HeaderTitle = ({ title }: { title: string }) => {
	return (
		<h2 className='text-white text-lg text-start'>
			{title}
		</h2>
	);
};

export default HeaderTitle;
