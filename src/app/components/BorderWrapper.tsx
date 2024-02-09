import React from 'react';

export type BorderWrapperProperties = {
	children: React.ReactNode;
	show: boolean;
	type?: 'solid' | 'dotted';
	id?: string;
};

export const BorderWrapper = ({ show, children, type = 'dotted', id }: BorderWrapperProperties) => {
	const preStyle = type === 'dotted' ? '2px dotted' : '1px solid';

	return (
		<div
			id={id}
			style={{
				border: `${preStyle} ${show ? 'green' : 'transparent'}`,
				padding: 3,
			}}
		>
			{children}
		</div>
	);
};
