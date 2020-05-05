
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'Test',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  