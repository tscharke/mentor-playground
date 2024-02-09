import { ReactNode } from 'react';

export const Headline = ({ children }: { children: ReactNode }) => (
	<div style={{ textDecoration: 'underline', fontSize: 20 }}>{children}</div>
);

export const SubTitle = ({ children, disappearPrefix = false }: { children: ReactNode; disappearPrefix?: boolean }) => (
	<h2>
		<pre style={{ display: 'inline-block' }}>{children}</pre>
		{disappearPrefix ? null : '-Component'}
	</h2>
);
