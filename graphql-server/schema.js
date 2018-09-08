export const typeDefs = `
  type Query {
    message: String,
    widgets: [Widget]
  }

  type Widget {
    id: ID,
    name: String,
    description: String,
    color: String,
    size: String,
    price: Float,
    quantity: Int
  }
`;
