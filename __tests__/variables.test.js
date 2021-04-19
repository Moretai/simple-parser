module.exports = (test) => {
  test(`let x;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: null,
          },
        ],
      },
    ],
  });

  test(`let x = 2;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: {
              type: "NumericLiteral",
              value: 2,
            },
          },
        ],
      },
    ],
  });

  test(`let x, y = 3;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: null,
          },
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "y",
            },
            init: {
              type: "NumericLiteral",
              value: 3,
            },
          },
        ],
      },
    ],
  });

  test(`let x = y = 3;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: {
              type: "AssignmentExpression",
              operator: "=",
              left: {
                type: "Identifier",
                name: "y",
              },
              right: {
                type: "NumericLiteral",
                value: 3,
              },
            },
          },
        ],
      },
    ],
  });
};
