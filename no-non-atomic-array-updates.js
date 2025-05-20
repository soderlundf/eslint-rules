module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent non-atomic array updates. Use reference swapping instead.',
      category: 'Best Practices'
    },
    messages: {
      nonAtomicArrayUpdate: 'Non-atomic array update detected. Use atomic reference swap instead.'
    },
    schema: []
  },

  create(context) {
    const mutatingMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

    return {
      AssignmentExpression(node) {
        if (
          node.left.type === 'MemberExpression' &&
          node.left.object.type === 'Identifier'
        ) {
          context.report({ node, messageId: 'nonAtomicArrayUpdate' });
        }
      },

      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.property.type === 'Identifier' &&
          mutatingMethods.includes(node.callee.property.name)
        ) {
          context.report({ node, messageId: 'nonAtomicArrayUpdate' });
        }

        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.property.name === 'forEach'
        ) {
          const callback = node.arguments[0];
          if (callback && (callback.type === 'FunctionExpression' || callback.type === 'ArrowFunctionExpression')) {
            context.getSourceCode().getTokens(callback.body).forEach(token => {
              if (token.value === '=' || token.value === '.push') {
                context.report({ node, messageId: 'nonAtomicArrayUpdate' });
              }
            });
          }
        }
      },

      ForStatement(node) {
        const source = context.getSourceCode().getText(node.body);
        if (source.match(/\.push\s*\(|\[[^\]]+\]\s*=|\.splice\s*\(/)) {
          context.report({ node, messageId: 'nonAtomicArrayUpdate' });
        }
      },

      ForOfStatement(node) {
        const source = context.getSourceCode().getText(node.body);
        if (source.match(/\.push\s*\(|\[[^\]]+\]\s*=|\.splice\s*\(/)) {
          context.report({ node, messageId: 'nonAtomicArrayUpdate' });
        }
      }
    };
  }
};
