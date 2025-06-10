import sequelize from 'sequelize';

export const database = new sequelize.Sequelize({
  database:"mercadaouberlandia_db",
  username:"root",
  password: null,
  host:"localhost",
  dialect: 'mysql'
  },);