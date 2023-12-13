import React from 'react';

/*
  Our first functional component without properties
  and a default export.
*/
const FirstComponent: React.FC = () => {
	return (
		<div style={{ fontSize: '40px' }}>
			<span>This is my first component</span>
		</div>
	);
};

export default FirstComponent;
