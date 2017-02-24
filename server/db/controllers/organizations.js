import Organizations from '../models/organizations';

export const newOrganization = (params) => {
  return new Organizations({
    name: params.name,
    phone_number: params.phoneNumber,
    tier: params.tier,
    address_id: params.address
  });
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
