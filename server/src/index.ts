/* eslint-disable prettier/prettier */
import express from 'express';
import sequelize from './db/connection';
import { CommentModel, CpuModel, GameModel, GpuModel, NewsModel, SocketModel, UserModel } from './models/index';

const app = express();
const port = process.env.APP_PORT || 5001;

sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');
    console.log(UserModel.associations)
    // NewsModel.create({
    //   title: 'News',
    //   content: 'News Content',
    //   image: ''
    // })
    // CommentModel.create({
    //   commentableType: 'news',
    //   commentableId: 1
    // })
    // const user = await UserModel.findByPk(1, {
    //   include: [UserModel.associations.comments],
    //   rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    // })
    // console.log(user);
    // const comment = await CommentModel.findByPk(1, {

    // });
    // const result = await NewsModel.findAll({
    //   include: [
    //     {
    //       model: CommentModel,
    //       where: { commentableType: 'news' }
    //     }
    //   ],
    // })
    // console.log(result[0].comments);
    // await GpuModel.create({
    //   name: 'G1',
    //   interface: 'GI1',
    //   memorySize: 1,
    //   coreClocks: 1,
    //   directx: 'GDX1',
    //   opengl: 'GOGL1',
    //   tdp: 1,
    //   performance: 1
    // })
    // await SocketModel.create({
    //   name: 'S1'
    // })
    // await CpuModel.create({
    //   name: 'C1',
    //   socketId: 1,
    //   clockspeed: 2,
    //   tdp: 2,
    //   cores: 2,
    //   class: 'CC1',
    //   performance: 1
    // });
    // const cpu = await CpuModel.findByPk(1, {
    //   include: [
    //     {
    //       model: SocketModel,
    //       attributes: ['id', 'name']
    //     }
    //   ]
    // });
    // console.log(cpu.socket);
    // await GpuModel.create({
    //   name: 'G2',
    //   interface: 'GI2',
    //   memorySize: 2,
    //   coreClocks: 2,
    //   directx: 'GDX2',
    //   opengl: 'GOGL2',
    //   tdp: 2,
    //   performance: 2
    // })
    // await GameModel.create({
    //   name: 'Game1',
    //   year: 1,
    //   image: 'GI1',
    //   description: 'Game Desc 1',
    //   recommendedCpuId: 1,
    //   recommendedGpuId: 1,
    //   recommendedRamSize: 1,
    //   minimalCpuId: 1,
    //   minimalGpuId: 2,
    //   minimalRamSize: 1
    // });
    const game = await GameModel.findByPk(1)
    console.log(game);
    // UserModel.create({
    //   name: 'A',
    //   password: 'P',
    //   email: 'E',
    //   isAdmin: false
    // }).then(() => {
    //   UserModel.findAll().then(users => console.log(users));
    // })
    // UserModel.findAll().then(users => {
    //   const user = users[0];
      
    // });
    // UserModel.findOne({
    //   group: [
    //     'user.id'
    //   ],
    //   where: { id: 1 },
    //   include: [
    //     UserModel.associations.comments,
    //   ],
    //   rejectOnEmpty: true
    // })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('/placeholder');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log(`server is listening on ${port}`);
});
