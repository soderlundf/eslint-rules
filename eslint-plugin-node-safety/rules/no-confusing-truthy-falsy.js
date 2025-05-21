module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Flaggar uttryck där truthy/falsy jämförelser är otydliga eller potentiellt felaktiga',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      confusing: 'Undvik att använda otydliga truthy/falsy-jämförelser: "{{ code }}"'
    }
  },
  create(context) {
    return {
      IfStatement(node) {
        const src = context.getSourceCode().getText(node.test);
        if (
          node.test.type === 'UnaryExpression' &&
          node.test.operator === '!' &&
          node.test.argument.type === 'MemberExpression' &&
          node.test.argument.property.name === 'length'
        ) {
          context.report({
            node,
            messageId: 'confusing',
            data: { code: src }
          });
        }
        if (
          node.test.type === 'BinaryExpression' &&
          (node.test.operator === '==' || node.test.operator === '!=') &&
          (node.test.left.value === false || node.test.right.value === false)
        ) {
          context.report({
            node,
            messageId: 'confusing',
            data: { code: src }
          });
        }
      }
    };
  }
};
