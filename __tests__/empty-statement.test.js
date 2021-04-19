module.exports = (test) => {
  // NumericLiteral
  test(
    `
  ;
 `,
    {
      type: "Program",
      body: [
        {
          type: "EmptyStatement",
        },
      ],
    }
  );
};
