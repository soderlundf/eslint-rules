
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Glömt await i async test-funktion',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Async test måste vänta in await.'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        const name = node.callee.name;
        if (['test', 'it'].includes(name)) {
          const fn = node.arguments[1];
          if (fn && fn.async && fn.body.body.every(stmt => stmt.type !== 'ExpressionStatement' || stmt.expression.type !== 'AwaitExpression')) {
            context.report({ node, messageId: 'default' });
          }
        }
      }
    };
  }
};