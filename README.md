# Mentor Playground

This repository contains a collection of code pieces to show the concepts of
[React](https://react.dev) & [TypeScript](https://www.typescriptlang.org) in a
pragmatic way by following the source code and the tests.

I call it (my) _Mentor Playground_, because I use all snippets during training and mentoring.

The goal is to demonstrate **concepts** and **techniques** that can be replicated and adopted.

So there is an executable app (at [Codesandbox](https://githubbox.com/tscharke/mentor-playground)),
that can also run locally on your machine ([see below](#-setup-on-your-machine)). The focus is still on the `code` and `tests`
and not on a fancy UI/UX with enterprise-relevant features 😉

Therefore, it is essential to look at the output on the `console` along with the code.
In other words: **Always have your developer tools open** 😁

| 🚧 Please be aware…                                                                                                                                 |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| That everything in this repository is a _work in progress_ and is constantly changing and improving. Therefore, there is never a finished version. |

## 🚀 Mission

The idea, or better vision, is to eventually provide all snippets with verbose and spoken
tests that are so self-explanatory that no further comments on the code (or console) are needed.

## 💻 Setup (on your machine)

```bash
# Check out the main-branch of this repository and switch into this directory
git clone git@github.com:tscharke/mentor-playground.git && cd "$(basename "$_" .git)"

# Install all dependencies
pnpm install 

# Run development-server
pnpm run start
```

## 👀 What will you find?

| Name                                                                        | Folder                  | Description |
|-----------------------------------------------------------------------------|-------------------------|-------------|
| _(Simple)_&nbsp;Components                                                  | `/src/simpleComponents` |             |
| Hooks                                                                       | `/src/hooks`            |             |
| Styled Components                                                           | `/src/style`         |             |
| Forms                                                                       | `/src/forms`            |             |
| Errors                                                                      | `/src/errorHandling`    |             |
| Suspense                                                                    | `/src/suspense`         |             |
| Book App ([Bookmonkey API](https://github.com/workshops-de/bookmonkey-api)) | `/src/book`             |             |

## 🤝 You would like to contribute?

tbd 🤷‍
