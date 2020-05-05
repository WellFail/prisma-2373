
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'qwewqe',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  