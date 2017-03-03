import db from '../config';
import Addresses from './addresses';
import Organizations from './organizations';
import Blocks from './blocks';

const Vineyards = db.Model.extend({
  tableName: 'vineyards',
  hasTimestamps: true,
  organization: function() {
    return this.belongsTo(Organizations);
  },
  addresses: function() {
    return this.hasOne(Addresses);
  },
  blocks: function() {
    return this.hasMany(Blocks);
  }
});

export default Vineyards;
 