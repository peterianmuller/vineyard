import Sequelize from 'sequelize';

export default new Sequelize('vineyard', 'postgres', '1234', {
  dialect: 'postgres',
  port: 5432
});
