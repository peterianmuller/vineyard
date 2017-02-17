import Organizations from '../models/organizations';

const newOrganization = (req, res, next) => {
  return Organizations.create({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    tier: req.body.tier
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
    console.log('could not find orginzation ', err);
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
    console.log('could not find orginzations ', err);
  });
};
// TODO: FIGURE OUT WHETHER TO USE UPDATE, OR TO FIND THE ORGANIZATION AND CHANGE THE DIFFERENT ATTRIBUTE.
const updateOrganization = (req, res, next) => {
  return Organizations.
};

const deleteOrganization = (req, res, next) => {
  return Organizations.find({
    where: {
      name: req.body.name
    }
  })
  .then((organization) => {
    if (organization) {
      organization.destroy();
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
