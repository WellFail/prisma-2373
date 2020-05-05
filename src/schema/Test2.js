
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test2',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.test1();
      t.model.test1Id();
      t.model.updatedAt();
    },
  });
  