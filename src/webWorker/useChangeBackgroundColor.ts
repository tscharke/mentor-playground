import { useRef } from 'react';

/**
 * Returns a random number from the given range.
 *
 * @param min {number} The beginning of the range
 * @param max {number} The end of the range
 * @returns {number} A random number from the given range
 */
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1 + min));

/**
 * Chose a random color out of the given list of colors.
 * And ensures that the last chosen color isn't used (if there is more than one color to choose from).
 *
 * @param {string[]} listOfColors A list of valid HTML-Colors
 * @returns {string} The randomly chosen color
 */
let lastColorIndex = 0;
const retrieveNewColorOfList = (listOfColors: string[]) => {
	let newColorIndex = -1;

	do {
		newColorIndex = random(0, listOfColors.length - 1);
	} while (newColorIndex === lastColorIndex);
	lastColorIndex = newColorIndex;

	return listOfColors[newColorIndex];
};

/**
 * With this hook, the background-color can be set to a random value.
 * In addition, the reference must be set to the HTML-Element whose background-color is to be changed.
 * Without a reference to an HTML Element, nothing happens.
 *
 * @param {string[]} listOfColors A list of valid HTML-Colors
 * @returns {{ reference: RefObject<HTMLDivElement>, changeBackgroundColor: () => void }} An object including…
 * 					- The `reference` to set by the HTML-Element
 *					- The function with which the background-color can be changed to a random value
 */
export const useChangeBackgroundColor = (listOfColors: string[]) => {
	const reference = useRef<HTMLDivElement>(null);

	const changeBackgroundColorOfReference = () => {
		if (reference.current) {
			reference.current.style.backgroundColor = retrieveNewColorOfList(listOfColors);
		}
	};

	return { reference, changeBackgroundColor: changeBackgroundColorOfReference };
};
