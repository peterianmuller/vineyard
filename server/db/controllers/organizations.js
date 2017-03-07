import Organizations from '../models/organizations';
import Users from '../models/users';

export const newOrganization = (params) => {
  return new Organizations({
    name: params.name,
    phone_number: params.phoneNumber,
    tier: params.tier,
    address_id: params.address
  }).save();
}

export const getOrganization = (params) => {
  return new Organizations({ name: params.name }).fetch();
};

export const findOrCreateNewOrg = (params) => {
  getOrganization(params)
  .then((org) => {
    if(!org) {
      return newOrganization(params).fetch();
    } else {
      return org;
    }
  })
};

export const getAllOrgs = (params) => {
  return Organizations.forge().fetchAll()
  .then((orgs) => {
    console.log('orgs collection from getAllOrgs: ', orgs)
    return orgs;
  });
}

//hypothetically, this should send a json tree of all the vineyard data for this org
export const getAllOrgVineyardData = (params) => {
  //should return all vineyards and their blocks
  console.log('inside getAllOrgVineyardData', params);
  return new Users({username: params})
  .fetch()
  .then((user) => {
    console.log('user.attributes is: ', user.attributes);
    let org_id = String(user.attributes.organization_id);
    new Organizations({id: org_id})
      .fetch({
        withRelated: ['vineyards.blocks.rows.clones']
      })
      .then((data) => {
        if(data) {
          console.log('this the vineyard data returned from the db', JSON.stringify(data))
          return data;    
        }
      })
      .catch((err) => {
        console.log('catch inside getAllOrgVineyardData:', err);
      })
  })  
}