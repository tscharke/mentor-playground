import { useSyncExternalStore } from 'react';
import type { Listener, Store, StoreValue, UseFunctionsToMutateStoreValue } from './interfaces';

export const DEFAULT_STORE_VALUE: StoreValue = 'Default';

/**
 * Represents a store that holds a value and provides methods to manipulate and retrieve the value.
 * @returns {Store} - The store object.
 */
const store = ((): Store<StoreValue> => {
	const listeners = new Set<Listener>();
	let value: StoreValue = DEFAULT_STORE_VALUE;

	const emitChanges = () => {
		for (const listener of listeners) {
			listener();
		}
	};

	return {
		/**
		 * Subscribes a component to the store.
		 *
		 * @param {Listener} listener - The interesting component to be informed.
		 * @returns {ReturnType<Store<number>['subscribe']>} - A function to unsubscribe the component from the store.
		 */
		subscribe: (listener: Listener): ReturnType<Store<number>['subscribe']> => {
			listeners.add(listener);

			// Unsubscribe the component from the store
			return (): void => {
				listeners.delete(listener);
			};
		},
		/**
		 * Retrieves the current value.
		 * @returns {StoreValue} The value of the store.
		 */
		getSnapshot: (): StoreValue => value,
		/**
		 * Retrieves the current value if the component was rendered on the server.
		 * @returns {StoreValue} The value of the server snapshot.
		 */
		getServerSnapshot: (): StoreValue => value,
		/**
		 * Change the value with a random number and inform interested components.
		 * @returns {void}
		 */
		changeValue: (): void => {
			value = Math.random().toString();
			emitChanges();
		},
		/**
		 * Set the value back to "default" and inform interested components.
		 * @returns {void}
		 */
		resetValue: (): void => {
			value = DEFAULT_STORE_VALUE;
			emitChanges();
		},
	};
})();

/**
 * Retrieves the current value from the external store.
 *
 * @function useStoreValue
 * @returns {StoreValue} The current value from the external store.
 */
export const useStoreValue = (): StoreValue =>
	useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

/**
 * Returns an object that contains functions to mutate the value on the external store.
 *
 * @returns {UseFunctionsToMutateStoreValue} An object containing functions to mutate the store value.
 */
export const useFunctionsToMutateStoreValue = (): UseFunctionsToMutateStoreValue => {
	const { changeValue, resetValue } = store;

	return {
		changeValue,
		resetValue,
	};
};
