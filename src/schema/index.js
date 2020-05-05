
const { nexusPrismaPlugin } = require('nexus-prisma');
const { makeSchema, objectType } = require('@nexus/schema');

const Query = require('./Query').default;
const Mutation = require('./Mutation').default;

const Post = require('./Post').default;
const Test1 = require('./Test1').default;
const Test2 = require('./Test2').default;
const Test3 = require('./Test3').default;
const Test4 = require('./Test4').default;
const Test5 = require('./Test5').default;
const Test6 = require('./Test6').default;
const User = require('./User').default;
const Ijijij = require('./Ijijij').default;
const Jijijijijij = require('./Jijijijijij').default;

const DMMF = objectType({
  name: 'DMMF',
  definition(t) {
    t.id('id');
    t.string('dmmf');
  },
})

exports.default = makeSchema({
  types: [Post, Test1, Test2, Test3, Test4, Test5, Test6, User, Ijijij, Jijijijijij, Query, Mutation, DMMF],
  outputs: {},
  plugins: [nexusPrismaPlugin()],
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'photon',
      }
    ],
    contextType: 'ctx.Context',
  },
});
