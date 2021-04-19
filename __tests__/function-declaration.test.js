module.exports = (test) => {
  test(
    ` def sum(x, y) {
    return x + y;
  }`,
    {
      type: "Program",
      body: [
        {
          type: "FunctionDeclaration",
          name: {
            type: "Identifier",
            name: "sum",
          },
          params: [
            {
              type: "Identifier",
              name: "x",
            },
            {
              type: "Identifier",
              name: "y",
            },
          ],
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "ReturnStatement",
                argument: {
                  type: "BinaryExpression",
                  operator: "+",
                  left: {
                    type: "Identifier",
                    name: "x",
                  },
                  right: {
                    type: "Identifier",
                    name: "y",
                  },
                },
              },
            ],
          },
        },
      ],
    }
  );
};
