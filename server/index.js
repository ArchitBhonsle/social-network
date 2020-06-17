const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {
  useNewUrlParser    : true,
  useUnifiedTopology : true,
  useCreateIndex     : true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

/* 
  All the routes should be imported from the routes directory. Eg.
  const puipuiRouter = require('./routes/puipui');
  app.use('/puipui', puipuiRouter);
  This puts all the routes in the puipui.js file on the /puipui route
*/

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
