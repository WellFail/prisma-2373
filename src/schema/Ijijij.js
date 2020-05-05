
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'ijijij',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  