
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'setInterval utan clearInterval hantering',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'setInterval används utan att dess ID sparas för eventuell clearInterval.'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.name === 'setInterval' &&
          !(node.parent.type === 'VariableDeclarator' || node.parent.type === 'AssignmentExpression')
        ) {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};