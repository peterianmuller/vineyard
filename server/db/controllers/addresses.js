import Addresses from '../models/addresses';

// QUESTION: ALSO, IS IT BETTER TO NAME THE FILES ADDRESSESMODEL.JS AND ADDRESSESCONTROLLER.JS?

// QUESTION: ARE THESE THE BASIC FUNCTION: NEW, GET, GETALL, UPDATE, DELETE?
const newAddress = (params) => {
  return new Addresses({
    street: params.street,
    street_2: params.street2,
    city: params.city,
    state: params.state,
    zip: params.zip,
    country: params.country
  });
};

/*==================need to refactor to BS/KNX=======================*/
const getAddress = (req, res, next) => {};
// QUESTION: WOULD WE EVER NEED TO RETRIEVE ALL ADDRESSES?
const getAddresses = (req, res, next) => {};
const updateAddress = (req, res, next) => {};
const deleteAddress = (req, res, next) => {};
/*==================need to refactor to BS/KNX=======================*/

export default {
  newAddress
  // getAddress,
  // getAddresses,
  // updateAddress,
  // deleteAddress
};
