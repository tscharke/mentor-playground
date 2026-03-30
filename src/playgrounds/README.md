# Playgrounds

A collection of pragmatic playground snippets and tests for TypeScript/JavaScript concepts.

Most snippets are intended to be executed in the browser and inspected via the console output.

## 👀 What to find

- The [overview component](./PlaygroundsOverview.tsx) with a click target that loads the playground entry.
  It renders the playground area and triggers a lazy import so you can inspect runtime output in the browser console.

- The [entry file](./index.ts) imports and runs these snippets:
  - [shallowCopy](./shallowCopy.ts)
    Shows that object spread only creates a shallow clone, so nested objects still share references.
  - [scope](./scope.ts)
    Demonstrates `var` function scope and the classic loop/`setTimeout` closure pitfall.
  - [promises](./promises.ts)
    Compares `Promise.all`, `Promise.race`, and `Promise.allSettled` with async timing behavior.
  - [functions](./functions.ts)
    Contrasts declaration/expression/arrow functions and static vs instance-level function properties.
  - [reducer](./reducer.ts)
    Uses typed `Array.prototype.reduce` to filter/transform data with inline and external reducer functions.
  - [asyncReducer](./asyncReducer.ts)
    Applies async reduction over fetched data and explains why the accumulator becomes a `Promise`.

- Additional standalone playground snippets:
  - [modules](./modules.ts)
    Walks through module patterns (IIFE, CommonJS, AMD, UMD, native modules) and closure-based encapsulation.
  - [interfacesAndUtilityTypes](./interfacesAndUtilityTypes.ts)
    Shows index signatures and `Record` usage to model constrained and dynamic object shapes.
  - [usageOfInterfaces component example](./usageOfInterfaces.tsx)
    Separates public and private props to model component API boundaries with composed interfaces.

- Test-based playgrounds:
  - [factorial](./factorial.test.ts)
    Tests iterative vs recursive factorial implementations including boundary and error cases.
  - [left padding](./leftPadding.test.ts)
    Validates numeric left-padding logic across positive/negative integers, floats, and signed zero.
  - [invert tree](./invertTree.test.ts)
    Implements and verifies recursive inversion of a binary tree while omitting undefined child keys.

## 📚 Further readings

- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [TypeScript Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
