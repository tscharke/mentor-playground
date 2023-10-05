type TNode = {
  value: string;
  left?: TNode;
  right?: TNode;
};

type Tree = TNode;

const invertTree = (node: TNode) => {
  if (!node) {
    return node;
  }

  const { value, left, right } = node;

  const leftNode = invertTree(left);
  const rightNode = invertTree(right);

  return {
    value,
    // Conditionally add properties/keys to this object
    ...(leftNode && { right: leftNode }),
    ...(rightNode && { left: rightNode })
  };

  /*
    This approche returns a of `undefined`-properties.
    Like…

    {
       value: "foo",
       left: undefined,
       right: undefined,
    }
    
    return {
      value,
      left: rightNode,
      right: leftNode,
    };
    */
};

test("invert tree", () => {
  const tree: Tree = {
    value: "root",
    left: {
      value: "1. left node",
      left: {
        value: "1.1. left mode"
      }
    },
    right: {
      value: "1. right node"
    }
  };

  const result = invertTree(tree);
  expect(result).toEqual({
    value: "root",
    left: {
      value: "1. right node"
    },
    right: {
      value: "1. left node",
      right: {
        value: "1.1. left mode"
      }
    }
  });
});
