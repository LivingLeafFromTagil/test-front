require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({message: 'good start for frontender'})
})

const start = async() => {
  try {
    await sequelize.authenticate().then(()=>(console.log('good')));
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started, port: ${PORT}`))
  } catch(e) {
    console.log(e);
  }
};

start();
