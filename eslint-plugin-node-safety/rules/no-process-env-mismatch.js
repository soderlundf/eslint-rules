
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Jämförelser av process.env bör ske mot strängar',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Jämför alltid process.env-variabler med strängar.'
    }
  },
  create(context) {
    return {
      BinaryExpression(node) {
        if (
          (node.left.type === 'MemberExpression' && node.left.object.name === 'process' && node.left.property.name === 'env') ||
          (node.right.type === 'MemberExpression' && node.right.object.name === 'process' && node.right.property.name === 'env')
        ) {
          if (
            (node.left.type === 'Literal' && typeof node.left.value !== 'string') ||
            (node.right.type === 'Literal' && typeof node.right.value !== 'string')
          ) {
            context.report({ node, messageId: 'default' });
          }
        }
      }
    };
  }
};