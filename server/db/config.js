import Sequelize from 'sequelize';

const db = new Sequelize('vineyard', 'postgres', '1234', {
  dialect: 'postgres',
  port: 5432
});

export default db;
