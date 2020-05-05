
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Test4',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.test3s();
      t.model.updatedAt();
    },
  });
  