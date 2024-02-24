/*
  @see https://github.com/testing-library/react-testing-library
*/
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import ComponentWithState from './ComponentWithState';

describe('ComponentWithState', () => {
	test('if counter increases by clicking the button', async () => {
		render(<ComponentWithState />);

		const button = screen.getByRole('button');
		expect(button).toHaveTextContent('Counter: 0');

		await userEvent.click(button);
		expect(button).toHaveTextContent('Counter: 1');

		await userEvent.click(button);
		expect(button).toHaveTextContent('Counter: 2');
	});
});
