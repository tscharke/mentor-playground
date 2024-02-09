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

Yes, 😃 there's an executable App (at [Codesandbox](https://githubbox.com/tscharke/mentor-playground)),
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
pnpm install

# Run/Start the development-server
pnpm run start
```

🤩 After starting the development-server, the application is showing up under [http://localhost:3000](http://localhost:3000).

## 👀 What to find

- [(Simple) Components](./src/simpleComponents) ([`./src/simpleComponents`](./src/simpleComponents))
- [React-Hooks…](./src/hooks) [`src/hooks`](./src/hooks)
  - useState
    - [`./src/hooks/UseState.tsx`](./src/hooks/UseState.tsx)
    - [`./src/hooks/ComponentWithState.tsx`](./src/hooks/ComponentWithState.tsx)
    - [`./src/hooks/ComponentWithStateAndChildren.tsx`](./src/hooks/ComponentWithStateAndChildren.tsx)
  - [useEffect](./src/hooks/ComponentUseEffectHook.tsx) [`./src/hooks/ComponentUseEffectHook.tsx`](./src/hooks/ComponentUseEffectHook.tsx)
  - [useReducer](./src/hooks/useReducer/UseReducer.md) [`./src/hooks/useReducer`](./src/hooks/useReducer)
  - useContext
    - [`./src/hooks/UseContext1.tsx`](./src/hooks/UseContext1.tsx)
    - [`./src/hooks/UseContext2.tsx`](./src/hooks/UseContext2.tsx)
    - [`./src/hooks/UseContext3.tsx`](./src/hooks/UseContext2.tsx)
  - [useFetchDataFromAPI (a Custom-Hook)](./src/hooks/CustomHook.tsx) [`./src/hooks/CustomHook.tsx`](./src/hooks/CustomHook.tsx)
  - [useRef](./src/hooks/UseRefHook.tsx) [`./src/hooks/UseRefHook.tsx`](./src/hooks/UseRefHook.tsx)
  - [useMemo](./src/hooks/UseMemo.tsx) [`./src/hooks/UseMemo.tsx`](./src/hooks/UseMemo.tsx)
  - [useCallback](./src/hooks/UseCallback.tsx) [`./src/hooks/UseCallback.tsx`](./src/hooks/UseCallback.tsx)
  - [use](./src/hooks/use) [`./src/hooks/use/UseHookOverview.tsx`](./src/hooks/use/UseHookOverview.tsx)
- [Styled Components](./src/style) [`./src/style`](./src/style)
- [Forms](./src/forms) [`./src/forms`](./src/forms)
- [Errors](./src/errorHandling) [`./src/errorHandling`](./src/errorHandling)
- [Suspense](./src/suspense) [`./src/suspense`](./src/suspense)
- [BookMonkey API](./src/book) [`./src/book`](./src/book)
- [Web Worker](./src/webWorker/README.md) [`./src/webWorker`](./src/webWorker)
- [Iterators & Generators](./src/basics/README.md) [`./src/basics`](./src/basics)
- [Playgrounds](./src/playgrounds) [`./src/playgrounds`](./src/playgrounds)
  - [Factorial of a number](./src/playgrounds/factorial.test.ts) [`./src/playgrounds/factorial.test.ts`](./src/playgrounds/factorial.test.ts)
  - [Left padding of numbers](./src/playgrounds/leftPadding.test.ts) [`./src/playgrounds/leftPadding.test.ts`](./src/playgrounds/leftPadding.test.ts)

## 🤝 You would like to contribute?

I love if you want to contribute to this project.
To do so, please follow the steps described [here](CONTRIBUTING.md) - thank you very much ❤️🙏

## ❤️🙏 Love & Thanks

- My thanks for the photo displayed on social media goes to: [Desola Lanre-Ologun](https://unsplash.com/de/@disruptxn)

