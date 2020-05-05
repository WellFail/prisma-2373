
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'User',
    definition(t) {
      t.model.createdAt();
      t.model.email();
      t.model.id();
      t.model.name();
      t.model.posts();
      t.model.role();
      t.model.updatedAt();
    },
  });
  