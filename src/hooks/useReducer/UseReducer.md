# useReducer-Hook

By using a list of tasks I explain the `useReducer` React-Hook.

In this example, I start with a list of three tasks that are in the three different progresses:
_Open_, _In progress_ or _Done_.

The progress of each task must be changed by the user itself.
For this purpose, the component provides three buttons, which - by clicking by the user - sends a
so-called [**Action**](#action).

The [**Reducer**](#reducer) has one functionality: Create a new list of tasks and change the progress of the
corresponding task (identifiable by a unique ID), depending on the _Action_.

To make the application look a bit more "realistic," following pattern can change the progress of a task:

- A task with progress "open" can only be set progress "In progress".
- A task in progress "In progress" can be set to progress "Open" or progress "Done".
- A task in progress "Done" can only be set to progress "Open".

To give the component itself a bit of "UI logic", I've decided to build a plain function that, based on
the current progress of a task, displays the further possible switching-progress according to the above
logic. With this, it is possible to activate or deactivate the buttons to change the progress of a task.

This kind of "UI logic" could also be (co)made by the _Reducer_. For the simplification of the example,
however, I've decided for an additional and independent function 😉

## Usage

This hook comes with the React-Library and must therefore be (named) imported from this module (additionally) before it
can be used.

```typescript
// Import Hook
import { useReducer } from 'react';

…
// Usage Hook inside a functional component
const [stateProducedByReducer, dispatch] = useReducer(reducer, initialState);
…
// Dispatch an action, handeld by the reudcer
dispatch( { type: "FIRST_ACTION", payload: { foo: "bar" } } );
…
```

The React-Hook also follows a pattern which is already known from the `useState` React-Hook. It returns an array with
two values as a result.

The first value of the result (`index[0]`) is the "state" produced by the [Reducer](#reducer) The second value of the
result (`index[1]`) returns a function, which is later used to send [Action](#action)s - we call this function `dispatch`.

## Action

The concept and the name **Action** are adapted from [Redux](https://redux.js.org), in fact it is even a concept
from [Flux-Pattern](https://facebookarchive.github.io/flux).

An _Action_ is a plain JavaScript-Object, often called PoJO (**P**lain **O**ld **J**avaScript **O**bject), which
has at least the _Key_ `type` and beyond that can have further _keys_, which are called "payload".

### Definition of an Action

```typescript
// Simplest varaint
type Action = {
	type: string;
	// An Action can contain an optional error that a reducer should be able to handle.
	// However, I've hardly seen this variant until today. We will not use it here.
	error?: Error;
};

// Varaint with seperate payload
type Action = {
	type: string;
	// I use any here to describe what any kind of payload is possible and depends on your needs.
	// Please specify the type specifically for you
	payload: any;
};

// Varaint with "inline" payload
type Action = {
	type: string;
	// I use any here to describe what any kind of payload is possible and depends on your needs.
	// Please specify the type specifically for you
	[key: string]: any;
};
```

## Reducer

A **Reducer** is a "normal" TypeScript function with exactly two parameters, which **always returns a new state** as a result:

- The 1st argument is the (current) state (`state`).
- The 2nd argument is a function with which we send/dispatch _Actions_ (`dispatch`).

| ☝️Important ☝️                                                                                                                                                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The result of a _Reducer_ must be a **new** TypeScript object/array/primitiv for the component to be re-rendered. If the returned object/array/primitiv is the **same**, this will not result in a re-rendering of the component. |

### Definition of a Reducer

```typescript
type reducer = (state: State, action: Action) => State;
```

## What you will find in this folder

- [The Component](UseReducerComponent.tsx) which uses the React-Hook `useReduce` and displays the table with all Tasks and User-Actions.
- The [Reducer-Function](reducer.ts) aka the **Reducer** (itself).
- The [Test](reducer.test.ts) of the reducer.
- The outsourced…
  - [type-definition](interfaces.ts) and
  - [styles](useReducerStyle.css) to not blood the component.
- This [description](UseReducer.md).
