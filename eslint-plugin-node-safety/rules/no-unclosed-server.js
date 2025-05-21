
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Server skapad utan att hantera stängning',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'http.createServer() bör hantera .close()'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === 'MemberExpression' &&
            node.callee.object.name === 'http' &&
            node.callee.property.name === 'createServer') {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};