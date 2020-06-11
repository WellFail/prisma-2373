const { objectType, arg, idArg } = require('@nexus/schema');
  const photon = require('../photon').default;
  const uuid = require('uuid').v1;
  const http = require('http')
  const fs = require('fs');

  exports.default = objectType({
    name: 'Query',
    definition(t) {

      t.field('dmmf', {
        type: 'DMMF',
        args: { id: idArg() },
        resolve: async () => {
          let dmmf = process.env.DMMF;
          let dmmfId = process.env.DMMF_ID;
          if (!process.env.DMMF) {
            await photon.connect();
            //@ts-ignore
            process.env.ENGINE_PORT = photon.fetcher.prisma.engine.port;
            
            dmmf = await new Promise((resolve, reject) => {
              http.get('http://localhost:'+ process.env.ENGINE_PORT + '/dmmf', (resp) => {
                let data = '';
                resp.on('data', (chunk) => { data += chunk; });
                resp.on('end', () => { resolve(data) });
              }).on("error", (err) => { reject(err) });
            })
            await photon.disconnect();

            process.env.DMMF = dmmf;
            dmmfId = uuid();
            process.env.DMMF_ID = dmmfId;
          }
          return {
            id: dmmfId,
            dmmf,
          }
        },
      });
  
    t.crud.post({ alias: 'findOnePost' });
    t.crud.posts({ filtering: true , ordering: true, pagination: true, alias: 'findManyPost' });
    t.int('aggregatePost', {
      args: { where: arg({ type: 'PostWhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.post.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test1({ alias: 'findOneTest1' });
    t.crud.test1S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest1' });
    t.int('aggregateTest1', {
      args: { where: arg({ type: 'Test1WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test1.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test2({ alias: 'findOneTest2' });
    t.crud.test2S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest2' });
    t.int('aggregateTest2', {
      args: { where: arg({ type: 'Test2WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test2.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test3({ alias: 'findOneTest3' });
    t.crud.test3S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest3' });
    t.int('aggregateTest3', {
      args: { where: arg({ type: 'Test3WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test3.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test4({ alias: 'findOneTest4' });
    t.crud.test4S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest4' });
    t.int('aggregateTest4', {
      args: { where: arg({ type: 'Test4WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test4.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test5({ alias: 'findOneTest5' });
    t.crud.test5S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest5' });
    t.int('aggregateTest5', {
      args: { where: arg({ type: 'Test5WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test5.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.test6({ alias: 'findOneTest6' });
    t.crud.test6S({ filtering: true , ordering: true, pagination: true, alias: 'findManyTest6' });
    t.int('aggregateTest6', {
      args: { where: arg({ type: 'Test6WhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.test6.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.user({ alias: 'findOneUser' });
    t.crud.users({ filtering: true , ordering: true, pagination: true, alias: 'findManyUser' });
    t.int('aggregateUser', {
      args: { where: arg({ type: 'UserWhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.user.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.ijijij({ alias: 'findOneIjijij' });
    t.crud.ijijijs({ filtering: true , ordering: true, pagination: true, alias: 'findManyIjijij' });
    t.int('aggregateIjijij', {
      args: { where: arg({ type: 'ijijijWhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.ijijij.findMany({ where });
        return data.length;
      },
    });
  

    t.crud.jijijijijij({ alias: 'findOneJijijijijij' });
    t.crud.jijijijijijs({ filtering: true , ordering: true, pagination: true, alias: 'findManyJijijijijij' });
    t.int('aggregateJijijijijij', {
      args: { where: arg({ type: 'jijijijijijWhereInput' }) },
      resolve: async (parent, { where }, { prisma }) => {
        const data = await prisma.jijijijijij.findMany({ where });
        return data.length;
      },
    });
  
    },
  });

  