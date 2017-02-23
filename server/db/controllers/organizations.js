import Organizations from '../models/organizations';

const newOrganization = (params) => {
  return new Organizations({
    name: params.name,
    phone_number: params.phoneNumber,
    tier: params.tier
  });
}

const getOrganization = (params) => {
  return new Organizations({ name: params.name }).fetch();
};

/*==================need to refactor to BS/KNX=======================*/
// const getOrganizations = (req, res, next) => {
//   return Organizations.findAll()
//   .then((organizations) => {
//     if (organizations) {
//       // QUESTION: BETTER TO USE RES.SEND?
//       res.json(organizations);
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not find organizations ', err);
//   });
// };
// // TODO: FIGURE OUT WHETHER TO USE UPDATE, OR TO FIND THE ORGANIZATION AND CHANGE THE DIFFERENT ATTRIBUTE.
// const updateOrganization = (req, res, next) => {};
// // TODO: TEST IF THIS METHOD OF DELETION WORKS
// const deleteOrganization = (req, res, next) => {
//   return Organizations.find({
//     where: {
//       name: req.body.name
//     }
//   })
//   .then((organization) => {
//     if (organization) {
//       organization.destroy();
//       console.log('organization deleted');
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not delete organization ', err);
//   });
// };
/*==================need to refactor to BS/KNX=======================*/

export default {
  newOrganization,
  getOrganization
  // getOrganizations,
  // updateOrganization,
  // deleteOrganization
};
