import db from '../config';
import Organizations from './organizations';
import Vineyards from './vineyards';


const Addresses = db.Model.extend({
  tableName: 'addresses',
  organizations: () => {
    return this.belongsTo(Organizations);
  },
  vineyards: () => {
    return this.belongsTo(Vineyards);
  }
});

export default Addresses;
