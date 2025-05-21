
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Förbjuder användning av fs.readFileSync och liknande',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Använd asynkrona fs-metoder istället för sync-metoder.'
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name === 'fs' &&
          /Sync$/.test(node.callee.property.name)
        ) {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};