import Sequelize from 'sequelize';

const db = new Sequelize('vineyard', null, null, {
  dialect: 'postgres',
  port: 5432
});

export default db;
