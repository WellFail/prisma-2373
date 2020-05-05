
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'qdwdqwdwd',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  