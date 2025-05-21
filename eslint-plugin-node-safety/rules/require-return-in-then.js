module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'then()-kedja utan return',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'then()-kedjor bör returnera vidare.'
    }
  },
  create(context) {
    return {
      // TODO: implement rule
    };
  }
};
