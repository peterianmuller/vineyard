import Organizations from '../models/organizations';

const newOrganization = (params) => {
  return Organizations.create({
    name: params.name,
    phoneNumber: params.phoneNumber,
    tier: params.tier
  });
}

const getOrganization = (req, res, next) => {
  return Organizations.find({
    where: {
      name: req.body.name
    }
  })
  .then((organization) => {
    if (organization) {
      // QUESTION: BETTER TO USE RES.SEND?
      res.json(organization);
    }
    next();
  }).catch((err) => {
    console.log('could not find organization ', err);
  });
};

const getOrganizations = (req, res, next) => {
  return Organizations.findAll()
  .then((organizations) => {
    if (organizations) {
      // QUESTION: BETTER TO USE RES.SEND?
      res.json(organizations);
    }
    next();
  }).catch((err) => {
    console.log('could not find organizations ', err);
  });
};
// TODO: FIGURE OUT WHETHER TO USE UPDATE, OR TO FIND THE ORGANIZATION AND CHANGE THE DIFFERENT ATTRIBUTE.
const updateOrganization = (req, res, next) => {};
// TODO: TEST IF THIS METHOD OF DELETION WORKS
const deleteOrganization = (req, res, next) => {
  return Organizations.find({
    where: {
      name: req.body.name
    }
  })
  .then((organization) => {
    if (organization) {
      organization.destroy();
      console.log('organization deleted');
    }
    next();
  }).catch((err) => {
    console.log('could not delete organization ', err);
  });
};

export default {
  newOrganization,
  getOrganization,
  getOrganizations,
  updateOrganization,
  deleteOrganization
};
