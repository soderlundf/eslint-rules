
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Returnerade promises ska användas',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Promise returneras men används inte.'
    }
  },
  create(context) {
    return {
      ExpressionStatement(node) {
        if (
          node.expression.type === 'CallExpression' &&
          node.expression.callee.type === 'Identifier'
        ) {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};