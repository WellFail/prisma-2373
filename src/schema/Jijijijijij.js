
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'jijijijijij',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  