/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
// @ts-nocheck
console.log('---[Functions|Start]---');

function functionDeclaration() {}

const functionExpression = function () {};

const functionExpressionWithName = function someName() {};

const arrowFunction = () => {};

const arrowFunctionWithImplicitReturn = () => 'return stuff';

// Function as object
function Bla() {
	this.foo = 'bar';
	this.getInitialProps = () => {
		return { value: 'Implementation at the instance' };
	};
}

Bla.getInitialProps = () => {
	return { value: "Implementation at 'class' (static)" };
};

const newInstance = new Bla();
const result1 = newInstance.getInitialProps();
const result2 = Bla.getInitialProps();
console.log('Functions-Playground', result1, result2);

console.log('---[Functions|End]---');
