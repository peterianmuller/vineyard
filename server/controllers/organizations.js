import { newOrganization, getOrganization, getAllOrgs, getAllOrgVineyardData } from '../db/controllers/organizations';
import { newAddress, getAddressByStreet } from '../db/controllers/addresses';

function formatPhoneNumber (phoneNumber) {
  return phoneNumber.replace(/\s+|-|\)|\(/g, '');
}

export function createOrganization(req, res, next) {
  const paramsAddress = {
    street: req.body.street.toLowerCase(),
    street_2: req.body.street_2.toLowerCase(),
    city: req.body.city.toLowerCase(),
    state: req.body.state.toLowerCase(),
    zip: req.body.zip,
    country: req.body.country.toLowerCase()
  }
  return newAddress(paramsAddress)
  .then((address) => {
    console.log(address, "this is the new address")
    getAddressByStreet(paramsAddress.street)
    .then((address) => {
      return address.id;
    })
    .then((addressId) => {
      console.log(req.body, "inside org create")
      console.log(addressId, "address id just created")
      const params = {
        name: req.body.name.toLowerCase(),
        phoneNumber: req.body.phone_number,
        tier: req.body.tier,
        address: addressId
      };
        return newOrganization(params)
        .then((organization) => {
          if (organization) {
            res.json(organization);
          } else {
            next();
          }
        }).catch((err) => {
          console.log('error adding organization: ', err);
        });  
    });
  });

}

export function fetchAllOrgs (req, res, next) {
  return getAllOrgs()
  .then((orgs) => {
    res.json(orgs);
  })
}

export function fetchAllOrgVineyardData (req, res, next) {
  //console.log('req params in fetchAllOrgs is: ', req);
  //console.log('res in fetchAllOrgs is: ', res);
  console.log('req query: ', req.query.name);
  return getAllOrgVineyardData(req.query.name)
  .then ((vineyard_data) => {
    //this will be saved as a cache/localstorage
    console.log('vineyard_data is: ', vineyard_data);
    res.json(vineyard_data);
  })
}

