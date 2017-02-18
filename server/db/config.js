import knex from 'knex';
import bookshelf from 'bookshelf';

// const db ='postgres://user:@localhost:5432/vineyard'
// const sequelize = new Sequelize(db);

const sequelize = new Sequelize('vineyard', 'postgres', '1234', {
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
