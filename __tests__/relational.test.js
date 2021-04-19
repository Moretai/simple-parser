module.exports = (test) => {
  test(`x > 0;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: ">",
          left: {
            type: "Identifier",
            name: "x",
          },
          right: {
            type: "NumericLiteral",
            value: 0,
          },
        },
      },
    ],
  });

  test(`x + 3 > 4;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: ">",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: {
              type: "Identifier",
              name: "x",
            },
            right: {
              type: "NumericLiteral",
              value: 3,
            },
          },
          right: {
            type: "NumericLiteral",
            value: 4,
          },
        },
      },
    ],
  });
};
