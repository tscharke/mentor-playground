import { useRef } from 'react';
import { random } from './helper.ts';

export type Color = 'aqua' | 'lightgreen' | 'gold' | 'lightblue' | 'silver' | 'red' | 'green' | 'yellow';

let lastColorIndex: number | null = null;

/**
 * Chose a random color out of the given list of colors.
 * And ensures that the last chosen color isn't used (if there is more than one color to choose from).
 *
 * @param {Color[]} listOfColors The list of colors to retrieve from.
 * @returns {Color} The randomly chosen color.
 */
export const retrieveNewColorOfList = (listOfColors: Color[]): Color => {
	if (listOfColors.length === 1) {
		return listOfColors[0];
	}

	let newColorIndex;
	do {
		newColorIndex = random(listOfColors.length);
	} while (newColorIndex === lastColorIndex);
	lastColorIndex = newColorIndex;

	return listOfColors[newColorIndex];
};

/**
 * With this hook, the background-color can be set to a random value.
 * In addition, the reference must be set to the HTML-Element whose background-color is to be changed.
 * Without a reference to an HTML Element, nothing happens.
 *
 * @param {Color[]} listOfColors A list of predefined HTML-Colors
 * @returns {{ reference: RefObject<HTMLDivElement>, changeBackgroundColor: () => void }} An object including…
 * 					- The `reference` to set by the HTML-Element
 *					- The function with which the background-color can be changed to a random value
 */
export const useChangeBackgroundColor = (listOfColors: Color[]) => {
	const reference = useRef<HTMLDivElement>(null);

	const changeBackgroundColorOfReference = () => {
		if (reference.current) {
			reference.current.style.backgroundColor = retrieveNewColorOfList(listOfColors);
		}
	};

	return { reference, changeBackgroundColor: changeBackgroundColorOfReference };
};
