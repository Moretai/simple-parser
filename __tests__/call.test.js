module.exports = (test) => {
  test(`foo(x, 1);`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "CallExpression",
          callee: {
            type: "Identifier",
            name: "foo",
          },
          arguments: [
            {
              type: "Identifier",
              name: "x",
            },
            {
              type: "NumericLiteral",
              value: 1,
            },
          ],
        },
      },
    ],
  });

  test(`x.y(1,a[1])(c,d);`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "CallExpression",
          callee: {
            type: "CallExpression",
            callee: {
              type: "MemberExpression",
              computed: false,
              object: {
                type: "Identifier",
                name: "x",
              },
              property: {
                type: "Identifier",
                name: "y",
              },
            },
            arguments: [
              {
                type: "NumericLiteral",
                value: 1,
              },
              {
                type: "MemberExpression",
                computed: true,
                object: {
                  type: "Identifier",
                  name: "a",
                },
                property: {
                  type: "NumericLiteral",
                  value: 1,
                },
              },
            ],
          },
          arguments: [
            {
              type: "Identifier",
              name: "c",
            },
            {
              type: "Identifier",
              name: "d",
            },
          ],
        },
      },
    ],
  });
};
