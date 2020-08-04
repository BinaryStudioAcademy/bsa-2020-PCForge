/* eslint-disable prettier/prettier */
import express from 'express';
import sequelize from './db/connection';
import { UserModel } from './models/index';

const app = express();
const port = process.env.APP_PORT || 5001;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log(UserModel.associations)
    UserModel.findByPk(1, {
      include: [UserModel.associations.comments],
      rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
    })
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
