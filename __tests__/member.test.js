module.exports = (test) => {
  test(`x.y;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
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
      },
    ],
  });

  test(`x['z'];`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "MemberExpression",
          computed: true,
          object: {
            type: "Identifier",
            name: "x",
          },
          property: {
            type: "StringLiteral",
            value: "z",
          },
        },
      },
    ],
  });

  test(` x.y.z['f'];`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "MemberExpression",
          computed: true,
          object: {
            type: "MemberExpression",
            computed: false,
            object: {
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
            property: {
              type: "Identifier",
              name: "z",
            },
          },
          property: {
            type: "StringLiteral",
            value: "f",
          },
        },
      },
    ],
  });

  test(`x.y.z['f'] = 1;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: "AssignmentExpression",
          operator: "=",
          left: {
            type: "MemberExpression",
            computed: true,
            object: {
              type: "MemberExpression",
              computed: false,
              object: {
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
              property: {
                type: "Identifier",
                name: "z",
              },
            },
            property: {
              type: "StringLiteral",
              value: "f",
            },
          },
          right: {
            type: "NumericLiteral",
            value: 1,
          },
        },
      },
    ],
  });
};
