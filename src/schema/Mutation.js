
  const { objectType } = require('@nexus/schema');

  exports.default = objectType({
    name: 'Mutation',
    definition(t) {
  
      t.crud.createOnePost({ alias: 'createOnePost' });
      t.crud.updateOnePost({ alias: 'updateOnePost' });
      t.crud.updateManyPost({ alias: 'updateManyPost' });
      t.crud.deleteOnePost({ alias: 'deleteOnePost' });
      t.crud.deleteManyPost({ alias: 'deleteManyPost' });


      t.crud.createOneTest1({ alias: 'createOneTest1' });
      t.crud.updateOneTest1({ alias: 'updateOneTest1' });
      t.crud.updateManyTest1({ alias: 'updateManyTest1' });
      t.crud.deleteOneTest1({ alias: 'deleteOneTest1' });
      t.crud.deleteManyTest1({ alias: 'deleteManyTest1' });


      t.crud.createOneTest2({ alias: 'createOneTest2' });
      t.crud.updateOneTest2({ alias: 'updateOneTest2' });
      t.crud.updateManyTest2({ alias: 'updateManyTest2' });
      t.crud.deleteOneTest2({ alias: 'deleteOneTest2' });
      t.crud.deleteManyTest2({ alias: 'deleteManyTest2' });


      t.crud.createOneTest3({ alias: 'createOneTest3' });
      t.crud.updateOneTest3({ alias: 'updateOneTest3' });
      t.crud.updateManyTest3({ alias: 'updateManyTest3' });
      t.crud.deleteOneTest3({ alias: 'deleteOneTest3' });
      t.crud.deleteManyTest3({ alias: 'deleteManyTest3' });


      t.crud.createOneTest4({ alias: 'createOneTest4' });
      t.crud.updateOneTest4({ alias: 'updateOneTest4' });
      t.crud.updateManyTest4({ alias: 'updateManyTest4' });
      t.crud.deleteOneTest4({ alias: 'deleteOneTest4' });
      t.crud.deleteManyTest4({ alias: 'deleteManyTest4' });


      t.crud.createOneTest5({ alias: 'createOneTest5' });
      t.crud.updateOneTest5({ alias: 'updateOneTest5' });
      t.crud.updateManyTest5({ alias: 'updateManyTest5' });
      t.crud.deleteOneTest5({ alias: 'deleteOneTest5' });
      t.crud.deleteManyTest5({ alias: 'deleteManyTest5' });


      t.crud.createOneTest6({ alias: 'createOneTest6' });
      t.crud.updateOneTest6({ alias: 'updateOneTest6' });
      t.crud.updateManyTest6({ alias: 'updateManyTest6' });
      t.crud.deleteOneTest6({ alias: 'deleteOneTest6' });
      t.crud.deleteManyTest6({ alias: 'deleteManyTest6' });


      t.crud.createOneUser({ alias: 'createOneUser' });
      t.crud.updateOneUser({ alias: 'updateOneUser' });
      t.crud.updateManyUser({ alias: 'updateManyUser' });
      t.crud.deleteOneUser({ alias: 'deleteOneUser' });
      t.crud.deleteManyUser({ alias: 'deleteManyUser' });


      t.crud.createOneijijij({ alias: 'createOneIjijij' });
      t.crud.updateOneijijij({ alias: 'updateOneIjijij' });
      t.crud.updateManyijijij({ alias: 'updateManyIjijij' });
      t.crud.deleteOneijijij({ alias: 'deleteOneIjijij' });
      t.crud.deleteManyijijij({ alias: 'deleteManyIjijij' });


      t.crud.createOnejijijijijij({ alias: 'createOneJijijijijij' });
      t.crud.updateOnejijijijijij({ alias: 'updateOneJijijijijij' });
      t.crud.updateManyjijijijijij({ alias: 'updateManyJijijijijij' });
      t.crud.deleteOnejijijijijij({ alias: 'deleteOneJijijijijij' });
      t.crud.deleteManyjijijijijij({ alias: 'deleteManyJijijijijij' });

    },
  });
  