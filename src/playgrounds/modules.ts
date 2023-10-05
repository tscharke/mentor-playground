// @ts-nocheck

// Anonymous closure.
(() => {
	const variableInsideTheClosure = 'We keep these variables private inside this closure scope';

	console.log(variableInsideTheClosure);
})();

// Closure with import from "outside"
((globalVariable) => {
	const variableInsideTheClosure = 'We keep these variables private inside this closure scope';

	// Do something with the given global variable
	const sum = 1 + globalVariable;

	console.log(variableInsideTheClosure);
	console.log(sum);
})(/*globalVariable*/ 4711);

// An Object-Interface
const myModule = (() => {
	const variableInsideTheClosure = 'We expose these variables outside this closure scope';

	// Expose these functions via an interface while hiding
	// the implementation of the module within the function() block

	return {
		exposeValue: variableInsideTheClosure,
	};
})();
console.log(myModule.exposeValue);

/* CommonJS */
function myModule2() {
	const variableInsideTheClosure = 'We keep these variables private inside this closure scope';

	this.exposeValue = 'We expose these variables outside this closure scope';

	this.exposeFunction = function () {
		return variableInsideTheClosure;
	};
}

module.exports = myModule2;

const myModuleInstance = new myModule2();
const a = myModuleInstance.exposeValue;
const b = myModuleInstance.exposeFunction();

/* AMD */
/*
define([], function () {
  const variableInsideTheClosure =
    "We keep these variables private inside this closure scope";

  return {
    exposeValue: "We expose these variables outside this closure scope",
    exposeFunction: function () {
      return variableInsideTheClosure;
    }
  };
});
*/

/* UMD */
/*
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["myModule"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("myModule"), require("myOtherModule"));
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory(root.myModule);
  }
})(this, function (myModule) {
  const variableInsideTheClosure =
    "We keep these variables private inside this closure scope";

  return {
    exposeValue: "We expose these variables outside this closure scope",
    exposeFunction: function () {
      return variableInsideTheClosure;
    }
  };
});
*/

/* Native Modules */

export const exposeFunction = () => {};
