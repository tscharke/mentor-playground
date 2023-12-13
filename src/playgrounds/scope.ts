/* eslint no-var: "off" */

console.log('---[Scope|Start]---');
var foo = 123;

//if (false) {
if (true) {
	var bar = 'test';
	console.log('Scope 1:', foo, bar);
}
console.log('Scope 2:', foo, bar);

// *******************
// What is the output?
// *******************
const arr = [10, 11, 12, 13, 14];
for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		// console.log(`Output: Index = ${i} ->`, arr[i]);
		console.log('What is the output of index and arr[i]');
	}, 0);
}
console.log('---[Scope|End]---');
