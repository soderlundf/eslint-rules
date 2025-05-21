
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Förbjud blandning av module.exports och exports',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Blanda inte module.exports och exports.'
    }
  },
  create(context) {
    let usedModuleExports = false;
    let usedExports = false;

    return {
      AssignmentExpression(node) {
        if (node.left.type === 'MemberExpression') {
          const objectName = node.left.object.name;
          if (objectName === 'module') usedModuleExports = true;
          if (objectName === 'exports') usedExports = true;

          if (usedModuleExports && usedExports) {
            context.report({ node, messageId: 'default' });
          }
        }
      }
    };
  }
};