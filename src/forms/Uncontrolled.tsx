import React, { useRef } from 'react';

const Uncontrolled = () => {
	const inputElement = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (inputElement.current) {
			// Retrieve the value out of the "real" DOM
			const enteredValue = inputElement.current.value;
			// Do something with the value
			alert('Entered Value: ' + enteredValue);

			// Reset field
			// inputElement.current.value = "";
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Username (Uncontrolled):</label>
			<input type="text" id="username" defaultValue="Max Mustermann" ref={inputElement} />
			<button>Submit</button>
		</form>
	);
};

export default Uncontrolled;
