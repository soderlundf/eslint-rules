
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Förhindrar att async-funktioner anropas utan await',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Async-funktion anropas utan await eller .then.'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.parent.type !== 'AwaitExpression' &&
          !(node.parent.type === 'CallExpression' && node.parent.callee.property?.name === 'then')
        ) {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};