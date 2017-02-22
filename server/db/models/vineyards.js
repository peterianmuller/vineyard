import db from '../config';
import Addresses from './addresses';
import Organizations from './organizations';
import Blocks from './blocks';

const Vineyards = db.Model.extend({
  tableName: 'vineyards',
  hasTimestamps: true,
  organization: () => {
    return this.belongsTo(Organizations);
  },
  addresses: () => {
    return this.hasOne(Addresses);
  },
  blocks: () => {
    return this.hasMany(Blocks);
  }
});

export default Vineyards;
