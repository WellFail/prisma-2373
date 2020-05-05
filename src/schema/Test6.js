
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test6',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.test5s();
      t.model.updatedAt();
    },
  });
  