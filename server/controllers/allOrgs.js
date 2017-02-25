import { getAllOrgs } from '../db/controllers/organizations';

export function getAllOrgsFrom(req, res, next) {
  return getAllOrgs()
  .then((orgs) => {
    if(orgs) {
      res.json(orgs)
    } else {
      next();
    }
  }).catch((err) => {
    console.log('error retrieving all organizations: ', err);
  })
}