import express from 'express';

const app = express();
const port = process.env.APP_PORT || 5001;

app.get('/', (req, res) => {
  res.send('/placeholder');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log(`server is listening on ${port}`);
});
