import knex from 'knex';
import bookshelf from 'bookshelf';


const sequelize = new Sequelize('vineyard', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

export default sequelize;
