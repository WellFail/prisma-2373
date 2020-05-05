
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test5',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.testManyToManies();
      t.model.updatedAt();
    },
  });
  