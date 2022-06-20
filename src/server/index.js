require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index')
const cors = require('cors');
const errorHandler = require('./middleware/errorHandlerMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
//обработка ошибок через middleware
app.use(errorHandler);

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
