
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'adsds',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
    },
  });
  