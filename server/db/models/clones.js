import db from '../config';
import Varietals from './varietals';

const Clones = db.Model.extend({
	tableName: 'clone',
	hasTimestamps: false,
	varietal: () => {
		return this.belongsTo(Varietals)
	}
});

