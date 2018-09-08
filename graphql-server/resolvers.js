import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    widgets: () =>
      fetch('http://localhost:3040/widgets')
        .then(res => res.json()),
  },
};
