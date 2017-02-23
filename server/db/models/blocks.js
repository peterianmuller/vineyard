import db from '../config';
import Vineyard from './vineyards';

const Blocks = db.Model.extend({
	tableName: 'blocks',
	hasTimestamps: true,
	vineyards: () => {
		return this.belongsTo(Vineyards);
	}
});

export default Blocks;
