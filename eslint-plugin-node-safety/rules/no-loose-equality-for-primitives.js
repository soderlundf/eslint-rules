module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Använd === istället för ==',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Undvik typomvandlande jämförelser.'
    }
  },
  create(context) {
    return {
      // TODO: implement rule
    };
  }
};
