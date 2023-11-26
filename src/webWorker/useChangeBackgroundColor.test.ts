import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useChangeBackgroundColor } from './useChangeBackgroundColor';

const LIST_OF_COLORS = ['red', 'green'];

describe('useChangeBackgroundColorOfSection - Hook', () => {
	it('changes the background-color of a given section', () => {
		jest.spyOn(React, 'useRef').mockReturnValue({ current: { style: { backgroundColor: 'white' } } });

		const { result } = renderHook(() => useChangeBackgroundColor(LIST_OF_COLORS));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toEqual('green');
	});

	it('not changes any background-color, because of a missing section', () => {
		jest.spyOn(React, 'useRef').mockReturnValue({ current: null });

		const { result } = renderHook(() => useChangeBackgroundColor(LIST_OF_COLORS));
		act(() => result.current.changeBackgroundColor());
		expect(result.current.reference.current?.style.backgroundColor).toBeUndefined();
	});

	beforeEach(() => {
		jest.spyOn(Math, 'floor').mockReturnValue(1);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.resetAllMocks();
	});
});
