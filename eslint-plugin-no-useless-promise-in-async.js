module.exports = {
  rules: {
    'no-useless-promise-in-async': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Avoid Promise.resolve/reject in async-functions',
        },
        messages: {
          avoidPromiseResolveReject: 'Avoid {{ method }} in async-function, return the value directly instead.',
        },
        schema: [],
      },
      create(context) {
        return {
          FunctionDeclaration(node) {
            if (!node.async) return;

            context.getScope().through.forEach(ref => {
              const id = ref.identifier;
              if (
                id.name === 'Promise' &&
                id.parent &&
                id.parent.type === 'MemberExpression' &&
                ['resolve', 'reject'].includes(id.parent.property.name)
              ) {
                context.report({
                  node: id.parent,
                  messageId: 'avoidPromiseResolveReject',
                  data: {
                    method: `Promise.${id.parent.property.name}`,
                  },
                });
              }
            });
          },

          // Same for FunctionExpression and ArrowFunctionExpression
          'FunctionExpression[async=true], ArrowFunctionExpression[async=true]'(node) {
            const sourceCode = context.getSourceCode();
            const text = sourceCode.getText(node);

            if (/Promise\.(resolve|reject)\(/.test(text)) {
              context.report({
                node,
                message: 'Avoid Promise.resolve/reject in async function, return the value directly instead.',
              });
            }
          }
        };
      },
    },
  },
};
