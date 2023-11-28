# WebWorker

## 👀 What to find

- [The Component](WebWorker.tsx) uses a `WebWorker`,
  - implements an `Event` to respond to the WebWorker's reply
  - and displays the steps to follow.
- The [Test](useChangeBackgroundColor.test.ts) of the custom-hook.
- The outsourced…
  - [`useChangeBackgroundColor`-Custom-Hook](useChangeBackgroundColor.ts) to set a random background-color of the referenced HTML-Element,
  - [Explanation-Component](Explanation.tsx) that describes the steps to follow,
  - [styles](styles.css) to not blood the component,
- This [description](README.md).

## 📚 Further readings

- [MDN Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [Arrange, Act and Assert Pattern: The Three A’s of Unit Testing](https://dev.to/robmarshall/arrange-act-and-assert-pattern-the-three-as-of-unit-testing-2n7k)
- [React's `useRef`](https://react.dev/reference/react/useRef)
- [Jest's `mock-functions`](https://jestjs.io/docs/mock-functions)
