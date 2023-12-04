import { act, renderHook } from '@testing-library/react';
import _ from 'lodash';
import React from 'react';
import { Color, retrieveNewColorOfList, useChangeBackgroundColor } from './useChangeBackgroundColor';

/**
	Mock the whole `lodash` library, uses the original implementation (requireActual)
	and mock the `shuffle` only (to spy on them later).
 */
jest.mock('lodash', () => ({
	...jest.requireActual('lodash'),
	shuffle: jest.fn(),
}));

/**
 * Spy function for the 'shuffle' method of the `lodash` library.
 *
 * The 'mockedShuffle' variable is a Jest function spy, which allows you
 * to track calls to the `shuffle`-method and provide custom behavior.
 *
 * @type {jest.SpyInstance}
 */
const mockedShuffle: jest.SpyInstance = jest.spyOn(_, 'shuffle');

describe('useChangeBackgroundColorOfSection', () => {
	test('should retrieve the only color from a list with a single color', () => {
		// Needs no return-value of the spied `mockedShuffle`-function,
		// cause in this case the internal `shuffle`-method wasn't called.
		const colors: Color[] = ['green'];
		const newColor = retrieveNewColorOfList(colors);
		expect(newColor).toEqual('green');
	});

	test('should retrieve a different color from a list with a multiple colors', () => {
		// Mocks the return-values of the spied `mockedShuffle`-function for each internal call of the `shuffle`-method.
		mockedShuffle.mockReturnValueOnce(['red']).mockReturnValueOnce(['yellow']).mockReturnValueOnce(['green']);
		const colors: Color[] = ['red', 'yellow', 'green'];

		const firstNewColor = retrieveNewColorOfList(colors);
		const secondNewColor = retrieveNewColorOfList(colors);
		const thirdNewColor = retrieveNewColorOfList(colors);

		expect(firstNewColor).toEqual('red');
		expect(secondNewColor).toEqual('yellow');
		expect(thirdNewColor).toEqual('green');
	});

	test('should not choose the same color twice', () => {
		// Mocks the return-values of the spied `mockedShuffle`-function for each internal call of the `shuffle`-method.
		mockedShuffle.mockReturnValueOnce(['red']).mockReturnValueOnce(['green']);
		const colors: Color[] = ['red', 'yellow', 'green'];

		const firstNewColor = retrieveNewColorOfList(colors);
		const secondNewColor = retrieveNewColorOfList(colors);

		expect(firstNewColor).toBe('red');
		expect(secondNewColor).toBe('green');
	});

	test('should change the background-color of an element', () => {
		// Mocks the return-values of the spied `mockedShuffle`-function for each internal call of the `shuffle`-method.
		mockedShuffle.mockReturnValueOnce(['red']);
		// Mocks the return-value of Reacts `useRef`-function to simulate an element and make the condition truthy.
		jest.spyOn(React, 'useRef').mockReturnValue({ current: { style: { backgroundColor: 'white' } } });

		const colors: Color[] = ['red', 'yellow', 'green'];
		const { result } = renderHook(() => useChangeBackgroundColor(colors));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toBe('red');
	});

	test("should not change any background-color of an element, because there's no reference to an element", () => {
		// Mocks the return-values of the spied `mockedShuffle`-function for each internal call of the `shuffle`-method.
		mockedShuffle.mockReturnValueOnce(['red']);
		// Mocks the return-value of Reacts `useRef`-function to simulate an element and make the condition truthy.
		jest.spyOn(React, 'useRef').mockReturnValue({ current: null });

		const colors: Color[] = ['red', 'yellow', 'green'];
		const { result } = renderHook(() => useChangeBackgroundColor(colors));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toBeUndefined();
	});

	afterEach(() => {
		mockedShuffle.mockRestore();
	});
});
