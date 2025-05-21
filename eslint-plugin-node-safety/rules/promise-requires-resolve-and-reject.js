
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Promise ska både resolve och reject',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Promise saknar antingen resolve eller reject-anrop.'
    }
  },
  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name !== 'Promise') return;

        const func = node.arguments[0];
        if (func && func.type === 'FunctionExpression') {
          const identifiers = func.params.map(p => p.name);
          const source = context.getSourceCode().getText(func.body);

          const hasResolve = identifiers[0] && source.includes(identifiers[0]);
          const hasReject = identifiers[1] && source.includes(identifiers[1]);

          if (!hasResolve || !hasReject) {
            context.report({ node, messageId: 'default' });
          }
        }
      }
    };
  }
};