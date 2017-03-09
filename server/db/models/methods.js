import db from '../config';

const Methods = db.Model.extend({
	tableName: 'methods',
	hasTimeStamps: false
})

export default Methods;