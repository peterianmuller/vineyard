import chai from 'chai';
import * as loginActions from '../../../client/src/actions/login'; 

var expect = chai.expect;

describe('actions', () => {
  it('should create an action to set login item',  () => {
    const expectedActionPassword = {
      type: "SET_LOGIN_PASSWORD",
      value: "password"
    };

    const expectedActionUsername = {
      type: "SET_LOGIN_USERNAME",
      value: "username"
    };

    expect(loginActions.setLoginItem('password', 'password')).to.deep.equal(expectedActionPassword);
    expect(loginActions.setLoginItem('username', 'username')).to.deep.equal(expectedActionUsername);
  });
});
