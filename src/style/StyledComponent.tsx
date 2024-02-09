import { css, cx } from '@emotion/css';
import { useState } from 'react';
import './demoStyle.css';

const cls1 = css`
	font-size: 1rem;
`;

const cls2 = css`
	font-size: 2rem;
`;

export default function StyledComponent() {
	const [activate, setActivate] = useState(false);

	return (
		<>
			<h2>Styled Component</h2>
			<div style={{ fontSize: '1rem', color: 'green', backgroundColor: 'pink' }}>Some text with inline css</div>
			<div className="myStyle">Some text with a css-class</div>
			<div
				className={css`
					padding: 32px;
					background-color: hotpink;
					font-size: 24px;
					border-radius: 4px;
					&:hover {
						color: yellow;
					}
				`}
			>
				Some text with a emotion-style
			</div>
			<div onClick={() => setActivate((ps) => !ps)} className={cx({ [cls1]: !activate }, { [cls2]: activate })}>
				Some text with a conditional emotion-style
			</div>
		</>
	);
}
