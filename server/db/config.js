import original from 'knex';
import bookshelf from 'bookshelf';

import seed from './seed/seed';

// FOR DEVELOPMENT:
const knex = original({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    user: null,
    password: null,
    database: 'vineyard'
  },
  debug: true
});
// FOR PRODUCTION:
// const knex = original({
//   client: 'pg',
//   connection: {
//     host: 'vineyarddb.ct23pvub5oym.us-west-1.rds.amazonaws.com',
//     port: '5432',
//     user: 'vineyardadmin',
//     password: 'zydecovineyard',
//     database: 'vineyard'
//   },
//   debug: true
// })


const db = bookshelf(knex);
db.knex.schema.hasTable('addresses')
.then((exists) => {
	if(!exists) {
		db.knex.schema.createTable('addresses', (address) => {
		  console.log('creating tables');
			address.increments('id').primary();
			address.string('street', 255).notNullable();
			address.string('street_2', 255);
			address.string('city', 255).notNullable();
			address.string('state', 255).notNullable();
			address.string('zip', 255).notNullable();
			address.string('country', 255).notNullable();
		})
		.createTable('organizations', (org) => {
			org.increments('id').primary();
			org.string('name', 255).notNullable();
			org.string('phone_number', 255).notNullable();
			org.string('tier', 255).notNullable();
			org.integer('address_id').references('addresses.id').notNullable();
		})
		.createTable('vineyards', (vineyard) => {
			vineyard.increments('id').primary();
			vineyard.string('name', 255).notNullable();
			// vineyard.string('phone_number', 255).notNullable();
			vineyard.string('appellation', 255).notNullable();
			vineyard.integer('organization_id').references('organizations.id').notNullable();
			vineyard.integer('address_id').references('addresses.id').notNullable();
		})
		.createTable('polygons', (poly) => {
			poly.increments('id').primary();
			poly.string('name', 30).unique().notNullable();
			poly.integer('org_id').notNullable();
		})
		.createTable('blocks', (block) => {
			block.increments('id').primary();
			block.string('name', 255).notNullable();
			block.integer('vineyard_id').references('vineyards.id');
			block.integer('polygon_id').references('polygons.id');
		})
		//need to add gis geocolumn to this table!!!!
		.createTable('varietals', (varietal) => {
			varietal.increments('id').primary();
			varietal.string('name', 255).notNullable();
		})
		.createTable('clones', (clone) => {
			clone.increments('id').primary();
			clone.string('name', 255).notNullable();
			clone.integer('varietal_id').references('varietals.id').notNullable();
		})
		.createTable('rows', (row) => {
			row.increments('id').primary();
			row.string('number', 255).notNullable();
			row.integer('clone_id').references('clones.id').notNullable();
			row.integer('block_id').references('blocks.id');
		})
		.createTable('users', (user) => {
			user.increments('id').primary();
			user.string('firstname', 255).notNullable();
			user.string('lastname', 255).notNullable();
			user.string('password', 255).notNullable();
			user.string('username', 255).unique().notNullable();
			user.string('phone_number', 255).notNullable();
			user.string('email', 255).unique().notNullable();
			user.date('birthdate', 255).notNullable();
			user.enu('account_restrictions', ['Owner', 'Manager', 'Employee']).notNullable();
			user.integer('organization_id').references('organizations.id').notNullable();
		})
		.createTable('methods', (method) => {
			method.increments('id').primary();
			method.string('name', 255).unique().notNullable();
		})
		.createTable('analysis', (data) => {
			data.increments('id').primary();
			data.integer('method_id').references('methods.id').notNullable();
			data.integer('row_id').references('rows.id').notNullable();
			data.bigInteger('date').notNullable();
			data.float('result', 20, 20).notNullable();
		})
		.createTable('notes', (note) => {
			note.increments('id').primary();
			note.string('title', 255).unique().notNullable();
			note.string('text', 5000).notNullable();
			note.date('date_time', 255).notNullable();
			note.string('latitude', 255).notNullable();
			note.string('longitude', 255).notNullable();
			note.string('image_url');
			note.integer('note_author_id').references('users.id');
		})
		.createTable('coordinates', (coord) => {
			coord.increments('id').primary();
			coord.decimal('lat', 18, 14).notNullable();
			coord.decimal('lon', 19, 14).notNullable();
			coord.integer('polygon_id').references('polygons.id');
			coord.integer('note_id').references('notes.id');
		})
		.createTable('alerts', (alert) => {
			alert.increments('id').primary();
			alert.string('text', 5000).notNullable();
			alert.string('latitude', 255).notNullable();
			alert.string('longitude', 255).notNullable();
			alert.date('alert_time', 255).notNullable();
			alert.integer('alert_author_id').references('users.id').notNullable();
		})
		.createTable('rooms', (room) => {
			room.increments('id').primary();
			room.string('room_name', 255).notNullable();
		})
		.createTable('messages', (message) => {
			message.increments('id').primary();
      message.string('author_name', 255).notNullable();
			message.string('text', 2000).notNullable();
			message.integer('message_author_id').references('users.id').notNullable();
			message.integer('room_id').references('rooms.id').notNullable();
      message.timestamp('created_at').notNullable().defaultTo(db.knex.raw('now()'));
		})
    .createTable('rooms_users', roomUser => {
      roomUser.increments('id').primary();
      roomUser.integer('room_id').references('rooms.id').notNullable();
      roomUser.integer('user_id').references('users.id').notNullable();
    })
    .createTable('organizations_polygons', (coordsPolys) => {
    	coordsPolys.increments('id').primary();
    	coordsPolys.integer('org_id').references('organizations.id').notNullable();
    	coordsPolys.integer('poly_id').references('polygons.id').notNullable();
    })
		.then(() => {
		  console.log('Tables created successfully, seeding commence!');
		  return seed()
		  .then(() => {
		  	console.log('DB seeded successfully!');
		  })
		  .catch((err)=> {
		  	console.log('Error with db seeding: ', err);
		  })

		})
		.catch((err) => {
			console.log('Error with table implementation: ', err);
		})
	}
})
.catch((err) => {
	console.log('error with check existance of table: ', err);
})

export default db;
