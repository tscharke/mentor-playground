# `useReducer`-Hook

With this React-Hook, it is possible to manage a **state** in a functional component.
And, **and this is the crucial thing**, by changing this state, it is possible to
force a re-rendering of the component by changing this state.

This React-Hook thus makes a component **STATEFUL**.

This React-Hook does the same thing as the `useState`-hook.
Only that we are using the concept from [Redux](https://redux.js.org) - the [**Reducer**](#reducer).

Before going into what exactly a reducer is and how we use this React-Hook, I'll
reiterate the purpose of it all:

- It's about giving a component a state.
- It's about changing that state causes that component to be re-rendered. _If the state stays the same, that component is not re-rendered._

With this React-Hook, the only way (the concept) to decide if a state should change is different.

## Reducer

Let's start with the namesake of this React-Hook - the Reducer.

A **Reducer** is a "normal" TypeScript function with exactly two parameters and **always returns
one state** as a result.

The meaning by "normal" TypeScript function is: It's a plain TypeScript function.
No matter if it is a "first citizen"
function or an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

What is important is that this function expects two parameters in exactly this order:

- The 1st parameter is the (current/initial) state (`state`).
- The 2nd parameter is the [`action`](#action)-Object send/dispatched to the reducer.

The result, after performing this function, is a `state` (again).
This returned state must correspond to the structure of the state given by the 1st parameter.

### The Task

The task of the reducer is to create a new state when it feels **responsible** for it.

How does it come now to this **responsibility**? Well by the [`Action`](#action)!

The Reducer receives the current/initial `state` and the [`Action`](#action) sent to it.
With this information, the Reducer creates a new state.
Or, if it feels not responsible, return the foreshadowed `state`.

From a technical point of view, a reducer feels responsible if there is an implementation to
the `type` of an action.
To describe it not too complicated 🤷‍, I use the following code example:

```typescript
switch (action.type) {
	// Responsible to handle the action INIT
	case 'INIT':
		// do whatever is needed…
		return newState;
	// Responsible to handle the action DELETE_ITEM_WITH_ID
	case 'DELETE_ITEM_WITH_ID':
		const retrievedIdOfItem = action.payload.id;
		// do whatever is needed…
		return newState;
	// Not responsible, so return the same state
	default:
		return state;
}
```

| ☝️Keep in mind ☝️                                                                                                                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The result of a Reducer must be a **new** TypeScript object/array/primitiv for the component **to be re-rendered**. If the returned object/array/primitiv is the **same**, this will **not** result in a **re-rendering** of the component. |

### Definition of a Reducer

```typescript
// A function with two paramaters and return value
type reducer = (state: State, action: Action) => State;
```

## State

A **state** can be any TypeScript object/array/primitiv you want to display and change within your component.

## Action

An **Action** is a plain Object, often called PoJO (**P**lain **O**ld **J**avaScript **O**bject), which
has at least the _Key_ `type` and beyond that can have further _keys_, which are called `payload`.

The concept and name _Action_ are adapted from [Redux;](https://redux.js.org) in fact, it is even a concept
from the [Flux-Pattern](https://facebookarchive.github.io/flux).

### Definition of an Action

```typescript
// Plain variant
type Action = {
	type: string;
};

// Variant with an optional error
type Action = {
	type: string;
	// An Action can contain an optional error that a reducer should be able
	// to handle. However, I've hardly seen this variant until today. And we
	// will not use it here.
	error?: Error;
};

// Variant in which the payload is "grouped" in the seperate key with name `payload`
type Action = {
	type: string;
	// I use the type `any` here to describe what any kind of payload is possible
	// and depends on your needs. Please specify the type specifically for you.
	payload: any;
};

// Variant with "inline" payload
type Action = {
	type: string;
	[key: string]: any;
};
```

## Usage

### Import

This React-Hook comes with the React-Library and must therefore be _named import_'ed before it can be used.

```typescript
// Import Hook
import { useReducer } from 'react';
```

### Call

From now on, the React-Hook can use like the following:

```typescript
// Usage Hook inside a functional component
const [stateProducedByReducer, dispatch] = useReducer(reducer, initialState);
```

As you can see, this React-Hook expects the two parameters:

1. The `reducer`-function ([see above](#reducer)).
2. A first/default `state`. Mostly called `initialState`. <br/>Or more precise: The first `state` the component represents.

### Results

The result of this `useReducer`-Hook also follows a pattern which is already known from the `useState`-Hook.
It returns an array with the following two values:

1. The (current/initial) `state` produced/returned by the [Reducer](#reducer) and can be any object/array/primitiv.
2. A function with which we can stimulate a Reducer to change the state.<br/> Or better saying: `dispatch`'ing Actions to the Reducer.

Like most other React-Hooks, this one uses the pattern of returning the two values as an array.
This leads to a consistent readability and usage.
And allow to access the two values with [Array-Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Dispatching Actions

To close the circle now, I show here exemplary how [Actions](#action) are `dispatch`'ed to the [Reducer](#reducer):

```typescript
// Dispatch an action
dispatch({ type: 'INIT' });

// Dispatch an action with "grouped" payload
dispatch({ type: 'DELETE_ITEM_WITH_ID', payload: { id: 4711 } });

// Dispatch an action with payload
dispatch({ type: 'DELETE_ITEM_WITH_ID', id: 4711 });
```

#### 💡Keep in mind

- A commonly seen pattern is to use UPPERCASE strings as `type`s. It serves the distinction and is not obligatory.
- In the end, every `string` is allowed that makes the code comprehensible and maintainable. Because the `type` is a string at the end that has to be considered in the reducer.

## Showcase

By using a list of tasks I explain the `useReducer` React-Hook.

In this example, I start with a list of three tasks that are in the three different progresses:

- _Open_
- _In progress_
- _Done_

The progress of each task must be changed by the user itself.
For this purpose, the component provides three buttons, which - by clicking by the user - sends an [**Action**](#action).

The [**Reducer**](#reducer) has one functionality: Create a new list of tasks and change the progress of the
corresponding task (identifiable by a unique ID), depending on the _Action_.

To make the application look a bit more "realistic," following pattern can change the progress of a task:

| Progress️ of task | Open | In progress | Done |
| :---------------- | :--: | :---------: | :--: |
| Open              |      |     ✅      |      |
| In progress       |  ✅  |             |  ✅  |
| Done              |  ✅  |             |      |

To have a bit of "UI logic" and make the application a bit more realistic, there's a plain
function that computes the further possible switching-progress.
This makes it based on the current progress of a task, according to the above-described logic.
With this, it is possible to activate or deactivate the buttons to change the progress of a task.

This kind of "UI logic" could also be (co)made by the _Reducer_. For the simplification of the example,
yet, I've decided for an extra and independent function 😉

## What you will find in this folder

- [The Component](UseReducerComponent.tsx) uses the `useReduce`-Hook and displays the table with all Tasks and User-Actions.
- The [Reducer-Function](reducer.ts) aka the **Reducer** itself 😉.
- The [Test](reducer.test.ts) of the reducer.
- The outsourced…
  - [type-definition](interfaces.ts) and
  - [styles](useReducerStyle.css) to not blood the component.
- This [description](UseReducer.md).

## Further readings

- [React's doc about `useReducer`](https://react.dev/reference/react/useReducer)
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Redux](https://redux.js.org)
- [Flux-Pattern](https://facebookarchive.github.io/flux)
