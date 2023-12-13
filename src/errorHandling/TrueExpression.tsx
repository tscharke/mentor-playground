type Properties = {
	expression: boolean;
	children: JSX.Element;
};

export const TrueExpression = ({ children, expression }: Properties) => (expression === true ? children : null);
