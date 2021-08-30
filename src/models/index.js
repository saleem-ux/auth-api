'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const userModel = require('./users.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : 'postgres://vwemkgfp:eSpjjvnj3aEyuhrjsJdGANJZq78bgpB8@chunee.db.elephantsql.com/vwemkgfp';

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

const sequelize = new Sequelize(DATABASE_URL,DATABASE_CONFIG);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes),
};