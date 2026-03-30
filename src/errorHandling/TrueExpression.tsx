import { ReactNode } from 'react';

type Properties = {
	expression: boolean;
	children: ReactNode;
};

export const TrueExpression = ({ children, expression }: Properties) => (expression ? children : null);
