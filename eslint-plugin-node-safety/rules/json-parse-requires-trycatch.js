
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'JSON.parse utan try/catch kan kasta',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Använd try/catch runt JSON.parse för att undvika krasch.'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' &&
            node.callee.object.name === 'JSON' &&
            node.callee.property.name === 'parse') {
          let parent = node.parent;
          while (parent && parent.type !== 'TryStatement') {
            parent = parent.parent;
          }
          if (!parent) {
            context.report({ node, messageId: 'default' });
          }
        }
      }
    };
  }
};