# Basics

## Iterators

An iterator is a function that an object provides to loop/run over it or something in it.

For example, if we want to loop over individual letters that are in an array,
the first idea that comes to mind is to use the `for-of` keyword, like this:

```typescript
const arrayOfLetters = ['A', 'B', 'C']

for (const letter of arrayOfLetters) {
  console.log(letter) // A, B, C
}
```

It seems that the "magic" 💫, the ability to iterate over the array, exists within the `for-of` keyword.
But this is not the case; it is the array itself that provides this ability.

In other words, any object that wants to make it possible to iterate over it has to provide this functionality itself.
What it provides, we call an **Iterator**.

### Iterator Protocol

To provide an iterator, an object must return a function at the object-property/key
[`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator).
This is a **well-known Symbol**, in this context a _static property_ and part of the "Iterator Protocol".

An implementation of that looks like this:

```typescript
const ownObject = {
  [Symbol.iterator]: () => {
    // The Implementation
  }
}
```

The user of the iterator, or the "caller", does so like this:

```typescript
const iterator = arrayOfLetters[Symbol.iterator]()
```

Be cautious. This line of code calls the function associated with the object property/key `Symbol.iterator`.
However, it does not automatically start the iteration process. The function at object-property/key
`Symbol.iterator` returns an object, referred to as an iterator. Among other properties, this iterator provides
a `next` function. This `next` function must be called subsequently to retrieve the results of each iteration.

#### Iterator Functionality

To run/start an iteration, we need a bit more. In this case, another function that does the iteration or
provides the functionality to iterate. An essential part of the "Iterator Protocol" is the `next` function.

This `next` function does whatever needs to be done to iterate and returns this kind of object each time we
call it:

```typescript
// Definition
type ResultOfNext = {
  value: any | undefined
  done: boolean
}
```

And yes, I am aware that `any` includes `undefined` 🤷‍. But with this explicit definition, I want to emphasize that the
`next` function must return `{ value: undefined, done: true }` if there's nothing more to iterate, or there are other
cases why no more value should be provided.

Given the complexity of this concept, let's preview an example of an object `ownObject` with a `Symbol.iterator`
function. In the iterator function, a `next` function is returned. This `next` function, when invoked, returns a
letter from the `foo` property of `ownObject` for each call until it has returned all the letters. Once all letters
have been returned, it indicates completion by returning `{ value: undefined, done: true }`.

```typescript
const ownObject = {
  foo: 'bar',
  [Symbol.iterator]: function () {
    let counter = 0;
    
    return {
      next: () => {
        if (counter === this.foo.length) {
          return { value: undefined, done: true };
        }
        return { value: this.foo[counter++], done: false };
      }
    }
  }
}
```

And there has to be another side to this: the one calling each iteration (the "caller") of the `next` function, like
this:

```typescript
iterator.next() // { value: 'A', done: false }
```

To comply with the "Iterator Protocol", every call of the `next` function returns an object that corresponds to the
definition described (as `ResultOfNext` above).

As you can imagine, to get all the letters from the array we started this description with, you have to call the
`next` function multiple times – like this:

```typescript
iterator.next() // { value: 'A', done: false }
iterator.next() // { value: 'B', done: false }
iterator.next() // { value: 'C', done: false }
iterator.next() // { value: undefined, done: true }
```

#### Conclusion

- Any object that wants to make it possible to iterate over it has to provide this functionality itself.
- To have a standard way of behaving, you have to follow the [Iterator Protocol](#iterator-protocol).
- To follow the [Iterator Protocol](#iterator-protocol) you have to provide:
  - a function at the object-property/key [`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
  - This function returns, among other things, a `next` function
  - This `next` function returns the object definition `{ value: any | undefined, done: boolean }` every time it is called
  - The _value_ can be anything but must be `undefined` when the iterations end
  - The value of _done_ must be `false` if the iterator has more iterations to provide, otherwise `true`.
  - The JavaScript types `Array` and `String` have already built in an iterator-function that can be used.
  - If you try to iterator over an object without a implementation for an iterator, you get this error: <br/>
    `Type WHATEVER must have a [Symbol.iterator]() method that returns an iterator.`

### Using an Iterator with the `for-of` loop / The "magic" 💫

Think back to our code, where this description started:

```typescript
const arrayOfLetters = ['A', 'B', 'C']

for (const letter of arrayOfLetters) {
  console.log(letter) // A, B, C
}
```

With your knowledge about the [Iterator Functionality](#iterator-functionality) and the [Iterator Protocol](#iterator-protocol), you can perceive that the `for-of` keyword, under the hood:

- Gets an iterator (like `arrayOfLetters[Symbol.iterator]()`).
- Calls the `next` function until the end.
- Saves the `value` in the variable provided (in our case `letter`).
- Identifies the end of the `next` function based on the returned object `{ value: undefined, done: true }`.

## 👀 What to find

### Iterators

- A [test suit](./iterators.test.ts) that shows…
  - how an iterator is used,
  - what happens if there's no iterator and
  - how to implement your own iterator.

## 📚 Further readings / watching

- [📚 MDN Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [📚 MDN Iterators_and_Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [📽 The Complete Guide to JS Symbols ES6](https://www.youtube.com/watch?v=4J5hnOCj69w)
- ️[📽 Iterators in JavaScript](https://youtu.be/W4brAobC2Hc?si=cqBaFy3MNIJKUqwu)

## ❤️ Thanks & Love to…

- [Mattias aka MPJ](https://github.com/mpj) of funfunfunctions
