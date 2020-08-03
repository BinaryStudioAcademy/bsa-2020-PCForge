import express from 'express';
import sequelize from './db/connection';

const app = express();
const port = process.env.APP_PORT || 5001;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
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
