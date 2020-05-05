
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test3',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.testManyToOne();
      t.model.testManyToOneId();
      t.model.updatedAt();
    },
  });
  