const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Org = sequelize.define('org', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
  tin: {type: DataTypes.INTEGER, unique: true},
  info: {type: DataTypes.STRING}
});

const Category = sequelize.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
});

const Region = sequelize.define('region', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
});

const Leader = sequelize.define('leader', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
});

User.hasMany(Org);
Org.belongsTo(User);

Leader.hasMany(Org);
Org.belongsTo(Leader);

Region.hasMany(Org);
Org.belongsTo(Region);

Category.hasMany(Org);
Org.belongsTo(Category);

module.exports = {
  User,
  Leader,
  Region,
  Category,
  Org,
}