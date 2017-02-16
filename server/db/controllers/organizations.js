import Organizations from '../models/organizations';

const newOrganization = (req, res, next) => {
  return Organizations.create({
    // req.body
  })
  .then((organization) => {
    if (organization) {
      // QUESTION: BETTER TO USE RES.SEND?
      res.json(organization);
    }
    next();
  }).catch((err) => {
    console.log('error adding orginzation ', err);
  });
}

const getOrganization = (req, res, next) => {};
const getOrganizations = (req, res, next) => {};
const updateOrganization = (req, res, next) => {};
const deleteOrganization = (req, res, next) => {};

export default {
  newOrganization,
  getOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization
};
