module.exports = (test) => {
  test(` 1 + 2;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "+",
          left: {
            type: "NumericLiteral",
            value: 1,
          },
          right: {
            type: "NumericLiteral",
            value: 2,
          },
        },
      },
    ],
  });

  // left-associate
  test(` 1 + 2 + 3;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "+",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: {
              type: "NumericLiteral",
              value: 1,
            },
            right: {
              type: "NumericLiteral",
              value: 2,
            },
          },
          right: {
            type: "NumericLiteral",
            value: 3,
          },
        },
      },
    ],
  });

  // Precedence of operations:
  test(` 1 + 2 * 3;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "+",
          left: {
            type: "NumericLiteral",
            value: 1,
          },
          right: {
            type: "BinaryExpression",
            operator: "*",
            left: {
              type: "NumericLiteral",
              value: 2,
            },
            right: {
              type: "NumericLiteral",
              value: 3,
            },
          },
        },
      },
    ],
  });

  // (1 + 2) * 3;
  test(` (1 + 2) * 3;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "*",
          left: {
            type: "BinaryExpression",
            operator: "+",
            left: {
              type: "NumericLiteral",
              value: 1,
            },
            right: {
              type: "NumericLiteral",
              value: 2,
            },
          },
          right: {
            type: "NumericLiteral",
            value: 3,
          },
        },
      },
    ],
  });
};
