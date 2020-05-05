
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test1',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.testOnetoOne();
      t.model.updatedAt();
    },
  });
  