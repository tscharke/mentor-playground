import { deleteBookAction } from "../actions";

describe("TypeScript & React Test-Suite", () => {
  test("Simple Unit test, should succeed", () => {
    expect(1 + 1).toEqual(2);
  });

  test("Create an Action to delete a book", () => {
    const isbn = 4711;

    const result = deleteBookAction(isbn);

    expect(result).toEqual({
      type: "DELETE_BOOK",
      payload: 4711
    });
  });

  test("Create an Action to delete a book without a book-id", () => {
    const isbn: any = undefined;

    const result = deleteBookAction(isbn);

    expect(result).toEqual({
      type: "DELETE_BOOK"
    });
  });
});
