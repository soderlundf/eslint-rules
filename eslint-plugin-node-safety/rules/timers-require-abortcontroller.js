module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Timers utan AbortController',
      category: 'Best Practices'
    },
    schema: [],
    messages: {
      default: 'Använd AbortController för moderna timers.'
    }
  },
  create(context) {
    return {
      // TODO: implement rule
    };
  }
};
