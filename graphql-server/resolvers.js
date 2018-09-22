import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    widgets: (_1, _2, { restURL }) =>
      fetch(`${restURL}/widgets`)
        .then(res => res.json()),
  },
};
