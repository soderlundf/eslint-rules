module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Mutation av globalt objekt (global, process)',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Undvik att ändra globala objekt.'
    }
  },
  create(context) {
    return {
      // TODO: implement rule
    };
  }
};
