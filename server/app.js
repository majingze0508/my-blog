const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const emailRouter = require('./Routes/emailRouter');

const port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/email', emailRouter);



app.listen(port, () => {
  console.log('the api server is running on ', port);
});
