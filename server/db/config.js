import Sequelize from 'sequelize';

export default new Sequelize('vineyard', null, null, {
  dialect: 'postgres',
  port: 5432
});
