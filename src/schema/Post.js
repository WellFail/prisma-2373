
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Post',
    definition(t) {
      t.model.author();
      t.model.authorId();
      t.model.content();
      t.model.createdAt();
      t.model.id();
      t.model.published();
      t.model.title();
      t.model.updatedAt();
    },
  });
  