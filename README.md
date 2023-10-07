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

The idea, or better my vision, with this repository is to make code snippets available in a format of components, tests,
(utility) functions, etc. available. All code should show detailed concepts, approach and ideas in handling and using React
with TypeScript.

Thereby, the comprehensibility and self-explanation within the code is in the foreground. It will make it possible, even for
beginners, to find inspiration. It's important to note that I am showing some ways and approaches here. There is generally not
one right  or one wrong way (apart from "real" mistakes 😉).

At the moment, it shows mostly my approaches that I see in my daily work and in training and mentoring. I.e., if the respective
concept/idea is understood, I would encourage each of you to use your own style and writing in the implementation. So be sure to
look at other people's implementations, adopt (parts of) their style, use styles you have established as a team, and so on.

This repository is a start and should grow 💪.

Feel free to post your ideas or questions in the form of issues. Often a single sentence is enough (e.g., the title of an issue).

Of course, I'm als happy about any pull request (PR) that adds concepts, corrects errors, simplifies things or describes things
better - whatever comes to your mind 🥳. The steps to follow to contribute to this project you can find [here](CONTRIBUTING.md).

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

I love if you want to contribute to this project.
To do so, please follow the steps described [here](CONTRIBUTING.md) - thank you very much ❤️🙏
