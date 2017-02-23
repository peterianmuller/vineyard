//knex refactor in progress
import knex from 'knex';
import bookshelf from 'bookshelf';

knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    password: null,
    database: null
  },
  debug: true

});

const db = bookshelf(knex);

////////create tables////////////

/*==================addresses====================*/
db.knex.schema.createTableIfNotExists('Addresses', (address) => {
	address.increment('id').primary();
	address.string('street', 255).notNullable();
	address.string('street_2', 255);
	address.string('city', 255).notNullable();
	address.string('state', 255).notNullable();
	address.string('zip', 255).notNullable();
	address.string('country', 255).notNullable();
});

/*==================Organizations====================*/

db.knex.schema.createTableIfNotExists('Organizations', (org) => {
	org.increment('id').primary();
	org.string('name', 255).notNullable();
	org.string('phone_number', 255).notNullable();
	org.enu('tier', ['Hobbyist', 'Small', 'Large']);
});

/*==================VINEYARDS====================*/

db.knex.schema.createTableIfNotExists('Vineyards', (vineyard) => {
	vineyard.increment('id').primary();
	vineyard.string('name', 255).notNullable();
	vineyard.string('phone_number', 255).notNullable();
	vineyard.string('appellation', 255).notNullable();
	vineyard.string('organizaton', 255).references('Organizations.id').notNullable();
	vineyard.string('address', 255).references('Addresses.id').notNullable();
});

/*==================BLOCKS====================*/
db.knex.schema.createTableIfNotExists('Blocks', (block) => {
	block.increment('id').primary();
	block.string('number', 255).notNullable();
	block.string('vineyard', 255).references('Vineyards.id');
});

/*==================ROWS====================*/
db.knex.schema.createTableIfNotExists('Rows', (row) => {
	row.increment('id').primary();
	row.string('number', 255).notNullable();
	row.string('point1', 255).notNullable();
	row.string('point2', 255).notNullable();
	row.string('clone', 255).notNullable();
	row.string('varietal', 255).references('Varietals.id').notNullable();
	row.string('rootstock', 255).notNullable();
	row.enu('status', [
			'Pruned',
      'Bud-break',
      'Flowering',
      'Veraison',
      'Pre-harvest',
      'Post-harvest'
      ]).notNullable();
	row.string('block', 255).references('Blocks.id');
});

/*==================VARIETALS====================*/

db.knex.schema.createTableIfNotExists('Varietals', (varietal) => {
	varietal.increment('id').primary();
	varietal.string('name', 255).notNullable();
});

/*==================USERS====================*/

db.knex.schema.createTableIfNotExists('Users', (user) => {
	user.increment('id').primary();
	user.string('firstname', 255).notNullable();
	user.string('lastname', 255).notNullable();
	user.string('password', 255).notNullable();
	user.string('username', 255).unique().notNullable();
	user.string('phone_number', 255).notNullable();
	user.string('email', 255).unique().notNullable();
	user.date('birthdate', 255).notNullable();
	user.enu('account_restrictions', ['Owner', 'Manager', 'Employee']).notNullable();
	user.string('organization').references('Organizations.id').notNullable();
});

/*==================NOTES====================*/
db.knex.schema.createTableIfNotExists('Notes', (note) => {
	note.increment('id').primary();
	note.string('title', 255).notNullable();
	note.string('text', 5000).notNullable();
	note.data('date_time', 255).notNullable();
	note.string('latitude', 255).notNullable();
	note.string('longitude', 255).notNullable();
	note.string('image_url');
	note.string('author', 255).references('Users.id').notNullable();
});

/*==================ALERTS====================*/
db.knex.schema.createTableIfNotExists('Alerts', (alert) => {
	alert.increment('id').primary();
	alert.string('text', 5000).notNullable();
	alert.string('latitude', 255).notNullable();
	alert.string('longitude', 255).notNullable();
	alert.data('alert_time', 255).notNullable();
	alert.string('author', 255).references('Users.id').notNullable();
});

/*==================MESSAGES====================*/
db.knex.schema.createTableIfNotExists('Messages', (message) => {
	message.increment('id').primary();
	message.string('text', 2000).notNullable();
	message.string('author', 255).references('Users.id').notNullable();
});

export default db;
