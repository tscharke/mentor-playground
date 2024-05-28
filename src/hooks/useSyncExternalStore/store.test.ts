import { act, renderHook } from '@testing-library/react';
import { DEFAULT_STORE_VALUE, useFunctionsToMutateStoreValue, useStoreValue } from './store';

describe('External Store', () => {
	test('if the store retrieves the default value', () => {
		const { result } = renderHook(() => useStoreValue());
		expect(result.current).toEqual(DEFAULT_STORE_VALUE);
	});

	test('if the store changes and resets the value', () => {
		jest.spyOn(global.Math, 'random').mockReturnValue(123456789);
		// Extract function to mutate the stored value
		const {
			result: {
				current: { changeValue, resetValue },
			},
		} = renderHook(() => useFunctionsToMutateStoreValue());
		const { result } = renderHook(() => useStoreValue());

		expect(result.current).toEqual(DEFAULT_STORE_VALUE);
		act(() => {
			changeValue();
		});
		expect(result.current).toEqual('123456789');
		act(() => {
			resetValue();
		});
		expect(result.current).toEqual(DEFAULT_STORE_VALUE);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});
});
