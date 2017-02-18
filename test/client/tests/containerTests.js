import React from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';
import { connect, Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import store from '../../../client/src/store';
import App from '../../../client/src/containers/App';
import MainNavBar from '../../../client/src/components/MainNavBar';
import NameBirthdateInput from '../../../client/src/components/NameBirthdateInput';
import Login from '../../../client/src/containers/Login';
import Signup from '../../../client/src/containers/Signup';

describe('Containers', () => {

  describe('<App />', () => {
    it('should have login and signup props', () => {
      const wrapper = mount(
        <Provider store={store}>
          <App>
            <div />
          </App>
        </Provider>);

      const props = wrapper.childAt(1).props();

      expect(props.login).to.deep.equal({ username: '', password: '' });
      expect(props.signup).to.deep.equal({
        username: '',
        password: '',
        'confirm_password': '',
        email: '',
        'first_name': '',
        'last_name': '',
        'birth_day': '',
        'birth_month': '',
        'birth_year': ''
      });
    });

    it('should render a navbar component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <App>
            <div />
          </App>
        </Provider>);

      expect(wrapper.find(MainNavBar).length).to.equal(1);
    });

  });

  describe('<Login />', () => {
    it('should have two forms', () => {
      const wrapper = shallow(<Login login={ { username: '', password: '' } } />);

      expect(wrapper.find(FormControl).length).to.equal(2);
    });

    it('should have titles username and password', () => {
      const wrapper = shallow(<Login login={ { username: '', password: '' } } />);
      
      var arr = [];
      wrapper.find(ControlLabel).forEach(item => { arr.push(item.childAt(0).text()) });

      expect(arr).to.deep.equal(['Username', 'Password']);
    });
  });

  describe('<Signup />', () => {
    it('should have three input forms', () => {
      const wrapper = shallow(<Signup signup={ { username: '', password: '' } } />);

      expect(wrapper.find(FormControl).length).to.equal(3);
    });

    it('should have labels for username, password, and confirm pass', () => {
      const wrapper = shallow(<Signup signup={ { username: '', password: '' } } />);

      var arr = [];
      wrapper.find(ControlLabel).forEach(item => { arr.push(item.childAt(0).text()) });

      expect(arr).to.deep.equal(['Username', 'Password', 'Confirm Password']);
    });

    it('should render one NameBirthdateInput', () => {
      const wrapper = mount(<Signup signup={ { username: '', password: '' } } />);

      expect(wrapper.find(NameBirthdateInput).length).to.equal(1);
    });
  });
});
