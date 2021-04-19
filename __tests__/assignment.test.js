module.exports = (test) => {
  test(`x = 2;`, {
    type: "Program",
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
            value: 2,
          },
        },
      },
    ],
  });

  test(`x *= 2;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "AssignmentExpression",
          operator: "*=",
          left: {
            type: "Identifier",
            name: "x",
          },
          right: {
            type: "NumericLiteral",
            value: 2,
          },
        },
      },
    ],
  });

  // test(`x = 2 + 3;`, {
  //   type: "Program",
  //   body: [
  //     {
  //       type: "ExpressionStatement",
  //       expression: {
  //         type: "AssignmentExpression",
  //         operator: "=",
  //         left: {
  //           type: "Identifier",
  //           name: "x",
  //         },
  //         right: {
  //           type: "BinaryExpression",
  //           operator: "+",
  //           left: {
  //             type: "NumericLiteral",
  //             value: 2,
  //           },
  //           right: {
  //             type: "NumericLiteral",
  //             value: 3,
  //           },
  //         },
  //       },
  //     },
  //   ],
  // });

  // test(`x = y = 3;`, {
  //   type: "Program",
  //   body: [
  //     {
  //       type: "ExpressionStatement",
  //       expression: {
  //         type: "AssignmentExpression",
  //         operator: "=",
  //         left: {
  //           type: "Identifier",
  //           name: "x",
  //         },
  //         right: {
  //           type: "AssignmentExpression",
  //           operator: "=",
  //           left: {
  //             type: "Identifier",
  //             name: "y",
  //           },
  //           right: {
  //             type: "NumericLiteral",
  //             value: 3,
  //           },
  //         },
  //       },
  //     },
  //   ],
  // });
};
