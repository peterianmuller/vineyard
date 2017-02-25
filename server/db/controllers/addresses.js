import Addresses from '../models/addresses';

// QUESTION: ALSO, IS IT BETTER TO NAME THE FILES ADDRESSESMODEL.JS AND ADDRESSESCONTROLLER.JS?

// QUESTION: ARE THESE THE BASIC FUNCTION: NEW, GET, GETALL, UPDATE, DELETE?
export const newAddress = (params) => {
  return new Addresses({
    street: params.street,
    street_2: params.street2,
    city: params.city,
    state: params.state,
    zip: params.zip,
    country: params.country
  }).save();
};

/*==================need to refactor to BS/KNX=======================*/
export const getAddressByStreet = (params) => {
  return new Addresses({
    street: params
  })
  .fetch()
  .then( function(address) {
    console.log('address found from fetch: ', address);
    return address;
  })

};
