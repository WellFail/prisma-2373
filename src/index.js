const { ApolloServer } = require('apollo-server-lambda');

const schema = require('./schema').default;
const prisma = require('./photon').default;
const errors = require('./errors').default;

const lambda = new ApolloServer({
  schema,
  formatError: (err) => errors(err),
  context: ({ event }) => {
    const context = { prisma };

    return context;
  },
  introspection: true,
  tracing: true,
});

exports.server = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const result = await new Promise(resolve =>
    lambda.createHandler({
      cors: { origin: "*" }
    })(event, context, (err, res) => resolve(res))
  );

  return result;
};