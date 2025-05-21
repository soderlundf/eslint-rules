
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Förbjuder console.log i produktion',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Undvik att använda console.log i produktion. Använd en logger istället.'
    }
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === 'console' && node.property.name === 'log') {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};