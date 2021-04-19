module.exports = (test) => {
  test(
    `
  if (x) {
    x = 12;
  } else {
    x += 1;
  }
`,
    {
      type: "Program",
      body: [
        {
          type: "IfStatement",
          test: {
            type: "Identifier",
            name: "x",
          },
          consequent: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: {
                    type: "Identifier",
                    name: "x",
                  },
                  right: {
                    type: "NumericLiteral",
                    value: 12,
                  },
                },
              },
            ],
          },
          alternate: {
            type: "BlockStatement",
            body: [
              {
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "+=",
                  left: {
                    type: "Identifier",
                    name: "x",
                  },
                  right: {
                    type: "NumericLiteral",
                    value: 1,
                  },
                },
              },
            ],
          },
        },
      ],
    }
  );

  test(`if (x) if(y){} else {}`, {
    type: "Program",
    body: [
      {
        type: "IfStatement",
        test: {
          type: "Identifier",
          name: "x",
        },
        consequent: {
          type: "IfStatement",
          test: {
            type: "Identifier",
            name: "y",
          },
          consequent: {
            type: "BlockStatement",
            body: [],
          },
          alternate: {
            type: "BlockStatement",
            body: [],
          },
        },
        alternate: null,
      },
    ],
  });
};
