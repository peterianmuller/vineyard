import knex from 'knex';
import bookshelf from 'bookshelf';

var db = bookshelf(knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'vineyard'
  }
}));

db.knex.schema.hasTable('organizations').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('organizations', (org) => {
      org.increments('id').primary();
      org.string('name', 255);
      org.string('phone_umber', 20);
      org.string('tier', 255)
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('vineyards').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('vineyards', (vineyard) => {
      vineyard.increments('id').primary();
      vineyard.string('name', 255).notNullable();
      vineyard.string('phone_umber', 255);
      vineyard.string('appellation', 255).notNullable();
    }).then((table) => {
      console.log('Created Table', table);
    });
  }
});

export { db, knex };
