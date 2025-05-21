
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Flaggar delad muterbar state mellan moduler',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Undvik att exportera muterbart objekt direkt från en modul.'
    }
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        if (
          node.left.type === 'MemberExpression' &&
          node.left.object.name === 'module' &&
          node.left.property.name === 'exports' &&
          node.right.type === 'ObjectExpression'
        ) {
          context.report({ node, messageId: 'default' });
        }
      }
    };
  }
};