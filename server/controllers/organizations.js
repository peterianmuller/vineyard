import { newOrganization, getOrganization, getAllOrgs } from '../db/controllers/organizations';
import { newAddress } from '../db/controllers/addresses';

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
  .fetch()
  .then((address) => {
    console.log(address.id)
    const params = {
      name: req.body.name.toLowerCase(),
      phoneNumber: formatPhoneNumber(req.body.phoneNumber),
      tier: req.body.tier,
      address_id: address.id
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
  })

}

export function fetchAllOrgs (req, res, next) {
  return getAllOrgs()
  .then((orgs) => {
    res.json(orgs);
  })
}


