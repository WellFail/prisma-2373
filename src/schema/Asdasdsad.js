
  const { objectType } = require('nexus');

  exports.default = objectType({
    name: 'asdASDsad',
    definition(t) {
      t.model.createdAt();
      t.model.id();
      t.model.updatedAt();
      t.model.verylongfieldnamefortestetwobi();
    },
  });
  