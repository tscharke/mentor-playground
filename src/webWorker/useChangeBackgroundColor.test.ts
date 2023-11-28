import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { Color, retrieveNewColorOfList, useChangeBackgroundColor } from './useChangeBackgroundColor.ts';

// Mock the return-values of the `random`-function (of the `helper`-module)
// to work with the corresponding values within this test-suite
jest.mock('./helper', () => ({
	random: jest
		.fn()
		// the 1. test-case need no mock, because the `random`-function wasn't call internally
		.mockReturnValueOnce(0)
		.mockReturnValueOnce(1)
		.mockReturnValueOnce(2)
		.mockReturnValueOnce(0)
		.mockReturnValueOnce(2)
		.mockReturnValueOnce(2)
		.mockReturnValueOnce(2)
		.mockReturnValueOnce(0)
		.mockReturnValueOnce(0),
}));

describe('useChangeBackgroundColorOfSection', () => {
	test('should retrieve the only color from a list with a single color', () => {
		expect(retrieveNewColorOfList(['green'])).toEqual('green');
	});

	test('should retrieve a different color from a list with a multiple colors', () => {
		const colors: Color[] = ['red', 'yellow', 'green'];
		const firstNewColor = retrieveNewColorOfList(colors);
		const secondNewColor = retrieveNewColorOfList(colors);
		const thirdNewColor = retrieveNewColorOfList(colors);
		expect(firstNewColor).toEqual('red');
		expect(secondNewColor).toEqual('yellow');
		expect(thirdNewColor).toEqual('green');
	});

	test('should not choose the same color twice', () => {
		const colors: Color[] = ['red', 'yellow', 'green'];
		const firstNewColor = retrieveNewColorOfList(colors);
		const secondNewColor = retrieveNewColorOfList(colors);
		expect(firstNewColor).toBe('red');
		expect(secondNewColor).toBe('green');
	});

	test('should change the background-color of an element', () => {
		// Creates mock for the internal used `useRef`.
		// This is needed to simulate an element and make the condition truthy.
		jest.spyOn(React, 'useRef').mockReturnValue({ current: { style: { backgroundColor: 'white' } } });

		const colors: Color[] = ['red', 'yellow', 'green'];
		const { result } = renderHook(() => useChangeBackgroundColor(colors));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toBe('red');
	});

	test('does not change any background-color due to a missing element', () => {
		// Creates mock for the internal used `useRef`.
		// In this case, we want to simulate what no element exists (that makes the condition falsy).
		jest.spyOn(React, 'useRef').mockReturnValue({ current: null });

		const colors: Color[] = ['red', 'yellow', 'green'];
		const { result } = renderHook(() => useChangeBackgroundColor(colors));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toBeUndefined();
	});

	afterAll(() => {
		jest.resetAllMocks();
	});
});
