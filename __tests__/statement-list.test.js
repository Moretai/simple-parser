module.exports = (test) => {
  // NumericLiteral
  test(
    `
  /**
    * asa
    */
  4;
  "hello";
 `,
    {
      type: "Program",
      body: [
        {
          type: "ExpressionStatement",
          expression: {
            type: "NumericLiteral",
            value: 4,
          },
        },
        {
          type: "ExpressionStatement",
          expression: {
            type: "StringLiteral",
            value: "hello",
          },
        },
      ],
    }
  );
};
