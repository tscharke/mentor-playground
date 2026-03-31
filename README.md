# Mentor Playground

This is a collection of code snippets to show the concepts of [React](https://react.dev) with [TypeScript](https://www.typescriptlang.org) **in a pragmatic way**.

All `code snippets` are available in kind of Components, Tests, (Utility) Functions, etc.

The goal is to show replicating and adaptable **concepts** and **techniques**.

Thereby, the comprehensibility and self-explanation within the code is in the foreground.
It will make it possible, even for beginners, to find inspiration.

So, you need to look at the output on the `console` along with the code.
In other words: **Always have your developer tools open** 😁

It's important to note that I am showing some ways and approaches here.
There is no generally right or wrong way (apart from "real" mistakes 😉).

## 🧑‍🎨 Can we see something?

Yes, 😃 there's an executable App (at [Codesandbox](https://stackblitz.com/github/tscharke/mentor-playground?file=README.md)),
that can also run locally on your machine ([see below](#-setup-on-your-machine)).

**Keep in mind**: The focus is still on the `code` and `tests` and not on a fancy UI/UX with enterprise-relevant features 😉

## 🚀 Mission

This repository is a start and should grow 💪.

Feel free to post your ideas or questions in the form of issues. Often a single sentence is enough (e.g., the title of an issue).

I am happy about every pull request (PR) from you too.
Regardless if it adds concepts, corrects errors, simplifies things or describes things
better—whatever comes to your mind 🥳.

The steps to follow to contribute to this project you can find [here](CONTRIBUTING.md).

|                                                           🚧 Please be aware…                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------: |
| Everything in this repository is a _work in progress_. It's constantly changing and improving. So, there is never a finished version 🤷. |

## 💻 Setup (on your machine)

```bash
# Check out the main-branch of this repository and switch into this directory
git clone git@github.com:tscharke/mentor-playground.git && cd "$(basename "$_" .git)"

# Install all dependencies
yarn install

# Start the BookMonkey API in a separate terminal
yarn run start:api

# Run/Start the development-server
yarn run start:server

# Optional: start API and frontend together
yarn run start
```

🤩 After starting the development-server, the application is showing up under [http://localhost:3000](http://localhost:3000).

The BookMonkey API is installed locally via `package.json` and starts on [http://localhost:4730](http://localhost:4730).

## 👀 What to find

### [(Simple) Components](./src/simpleComponents)

Basic examples of React components to get started:

- [`FirstComponent.tsx`](./src/simpleComponents/FirstComponent.tsx) – a minimal functional component
- [`SecondComponent.tsx`](./src/simpleComponents/SecondComponent.tsx) – a slightly more advanced component
- [`PassProperties.tsx`](./src/simpleComponents/PassProperties.tsx) – demonstrates how to pass props to components

### [React-Hooks](./src/hooks)

#### `useState`

- [`UseState.tsx`](./src/hooks/UseState.tsx) – basic state management with `useState`
- [`ComponentWithState.tsx`](./src/hooks/ComponentWithState.tsx) – a component that holds and updates local state
- [`ComponentWithStateAndChildren.tsx`](./src/hooks/ComponentWithStateAndChildren.tsx) – state combined with child components

#### `useEffect`

- [`ComponentUseEffectHook.tsx`](./src/hooks/ComponentUseEffectHook.tsx) – side effects and the lifecycle of a functional component

#### [`useReducer`](./src/hooks/useReducer/UseReducer.md)

A `useReducer` works like `useState`, but uses the **Reducer** concept from Redux to manage state changes.
A **Reducer** is a plain TypeScript function `(state, action) => state` that decides — based on the dispatched `Action` — whether and how the state changes.

- [`UseReducerComponent.tsx`](./src/hooks/useReducer/UseReducerComponent.tsx) – component that uses the `useReducer`-Hook; renders a task-list with buttons to change each task's progress (_Open → In progress → Done_)
- [`reducer.ts`](./src/hooks/useReducer/reducer.ts) – the Reducer function itself
- [`reducer.test.ts`](./src/hooks/useReducer/reducer.test.ts) – tests for the Reducer
- [`interfaces.ts`](./src/hooks/useReducer/interfaces.ts) – shared type definitions

#### `useContext`

- [`UseContext1.tsx`](./src/hooks/UseContext1.tsx), [`UseContext2.tsx`](./src/hooks/UseContext2.tsx), [`UseContext3.tsx`](./src/hooks/UseContext3.tsx) – three progressive examples showing how to create and consume a React Context

#### Custom Hook

- [`CustomHook.tsx`](./src/hooks/CustomHook.tsx) – a custom `useFetchDataFromAPI` hook that encapsulates data-fetching logic

#### `useRef`

- [`UseRefHook.tsx`](./src/hooks/UseRefHook.tsx) – accessing and manipulating DOM elements with `useRef`

#### `useMemo`

- [`UseMemo.tsx`](./src/hooks/UseMemo.tsx) – memoising expensive computations to avoid unnecessary recalculations

#### `useCallback`

- [`UseCallback.tsx`](./src/hooks/UseCallback.tsx) – stabilising function references to prevent unnecessary re-renders

#### `useSyncExternalStore`

- [`UseExternalStoreComponent.tsx`](./src/hooks/useSyncExternalStore/UseExternalStoreComponent.tsx) – subscribing to an external store in a concurrent-safe way

### [Styled Components](./src/style)

- Examples of styling React components using CSS Modules and Styled Components

### [Forms](./src/forms)

- [`Controlled.tsx`](./src/forms/Controlled.tsx) – controlled form inputs (React manages the value)
- [`Uncontrolled.tsx`](./src/forms/Uncontrolled.tsx) – uncontrolled form inputs (DOM manages the value via `useRef`)

### [Error Handling](./src/errorHandling)

- [`ErrorBoundary.tsx`](./src/errorHandling/ErrorBoundary.tsx) – class-based Error Boundary to catch render errors
- [`ErrorHandlingDemo.tsx`](./src/errorHandling/ErrorHandlingDemo.tsx) – demonstrates how an Error Boundary wraps components
- [`Fallback.tsx`](./src/errorHandling/Fallback.tsx) – the fallback UI shown when an error is caught

### [Suspense](./src/suspense)

- [`SuspenseDemo.tsx`](./src/suspense/SuspenseDemo.tsx) – lazy-loading components with `React.Suspense` and `React.lazy`
- [`UserList.tsx`](./src/suspense/UserList.tsx) – data-fetching with Suspense using a custom resource helper

### [Book Management / Workshop](./src/book)

- A small book-management feature that connects to the local [BookMonkey API](https://github.com/workshops-de/bookmonkey-api) (`http://localhost:4730`)
- Demonstrates Redux-style state management: [`actions.ts`](./src/book/actions.ts), [`reducer.ts`](./src/book/reducer.ts), [`reduxStore.ts`](./src/book/reduxStore.ts)
- [`BookList.tsx`](./src/book/BookList.tsx) & [`BookItem.tsx`](./src/book/BookItem.tsx) – list and detail components
- [`hooks.ts`](./src/book/hooks.ts) – custom hooks to interact with the store

### [Web Worker](./src/webWorker/README.md)

Demonstrates how to offload work to a background thread using the Web Workers API:

- [`WebWorker.tsx`](./src/webWorker/WebWorker.tsx) – component that spawns a Web Worker, listens to its reply via an `Event`, and displays the steps to follow
- [`worker.ts`](./src/webWorker/worker.ts) – the actual worker script running in the background
- [`useChangeBackgroundColor.ts`](./src/webWorker/useChangeBackgroundColor.ts) – custom hook that sets a random background colour on a referenced HTML element
- [`useChangeBackgroundColor.test.ts`](./src/webWorker/useChangeBackgroundColor.test.ts) – tests for the custom hook
- [`Explanation.tsx`](./src/webWorker/Explanation.tsx) – component describing the steps to follow

### [Iterators & Generators](./src/basics/README.md)

Explains the **Iterator Protocol** and **Generators** in depth — with code examples and test suites:

- **Iterators**: Any object that wants to be iterable must implement `[Symbol.iterator]()`, which returns a `next()` function yielding `{ value, done }` objects.
  Built-in types like `Array` and `String` already include this — so `for-of` works on them out of the box.
  - [`iterators.test.ts`](./src/basics/iterators.test.ts) – shows how to use iterators, what happens without one, and how to implement your own
- **Generators**: Functions declared with `function*` that automatically produce an iterator.
  - [`generators.test.ts`](./src/basics/generators.test.ts) – covers `function*` syntax, generator implementation, and the connection to iterators

### [Playgrounds](./src/playgrounds/README.md)

A collection of pragmatic TypeScript/JavaScript snippets — most output to the browser console:

- [`shallowCopy.ts`](./src/playgrounds/shallowCopy.ts) – object spread creates only a shallow clone; nested objects still share references
- [`scope.ts`](./src/playgrounds/scope.ts) – `var` function scope and the classic `loop + setTimeout` closure pitfall
- [`promises.ts`](./src/playgrounds/promises.ts) – compares `Promise.all`, `Promise.race`, and `Promise.allSettled`
- [`functions.ts`](./src/playgrounds/functions.ts) – declaration vs expression vs arrow functions; static vs instance-level properties
- [`reducer.ts`](./src/playgrounds/reducer.ts) – typed `Array.prototype.reduce` with inline and external reducer functions
- [`asyncReducer.ts`](./src/playgrounds/asyncReducer.ts) – async reduction over fetched data and why the accumulator becomes a `Promise`
- [`modules.ts`](./src/playgrounds/modules.ts) – module patterns: IIFE, CommonJS, AMD, UMD, native modules, and closure-based encapsulation
- [`interfacesAndUtilityTypes.ts`](./src/playgrounds/interfacesAndUtilityTypes.ts) – index signatures and `Record` to model constrained and dynamic object shapes
- [`usageOfInterfaces.tsx`](./src/playgrounds/usageOfInterfaces.tsx) – separating public/private props to model component API boundaries
- [`factorial.test.ts`](./src/playgrounds/factorial.test.ts) – iterative vs recursive factorial including boundary and error cases
- [`leftPadding.test.ts`](./src/playgrounds/leftPadding.test.ts) – numeric left-padding across positive/negative integers, floats, and signed zero
- [`invertTree.test.ts`](./src/playgrounds/invertTree.test.ts) – recursive inversion of a binary tree
- [`decorator.test.ts`](./src/playgrounds/decorator.test.ts) – TC39 Stage 3 decorators (class, property, method); execution timing of each decorator type

### [`use`-Hook](./src/use/UseOverview.tsx)

- Examples of React's experimental `use`-Hook for reading resources (Promises, Context) directly inside render

## 🤝 You would like to contribute?

I love if you want to contribute to this project.
To do so, please follow the steps described [here](CONTRIBUTING.md) - thank you very much ❤️🙏

## ❤️🙏 Love & Thanks

My thanks for the photo displayed on social media goes to: [Desola Lanre-Ologun](https://unsplash.com/de/@disruptxn)

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://withnik.com"><img src="https://avatars.githubusercontent.com/u/175385?v=4?s=100" width="100px;" alt="Nik Sumeiko"/><br /><sub><b>Nik Sumeiko</b></sub></a><br /><a href="#mentoring-niksumeiko" title="Mentoring">🧑‍🏫</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

