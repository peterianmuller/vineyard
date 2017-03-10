import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { ControlLabel, FormControl } from 'react-bootstrap';
import { Form, Segment, Input } from 'semantic-ui-react';
import MainNavBar from '../../../client/src/components/MainNavBar';
import NameBirthdateInput from '../../../client/src/components/NameBirthdateInput';
import NoteForm from '../../../client/src/components/Form';
import NoteFormInput from '../../../client/src/components/NoteFormInput';


describe('Components', () => {
  describe('<MainNavBar />', () => {
    it('should have icon and children as props', () => {
      const wrapper = mount(<MainNavBar />);   
      //var props = wrapper.props();
      console.log('what are these props', Array.isArray(Object.keys(props)));
      
      //expect(Object.keys(props).join(' ')).to.equal('icon children');
      //expect(Object.keys(props).length).to.equal(1);
      //expect(Object.keys(props)[0]).to.equal('children');
    });
  });
  
  describe('<NameBirthdateInput />', () => {
    it('should render 4 Form.Input', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.find(Form.Input)).to.have.length(4);
    });
  
    it('should render 2 Form.Group', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.find(Form.Group)).to.have.length(2);
    });
  
    it('should have labels for email, first name, last name, and birthdate', () => {
      const wrapper = 
        shallow(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      var textNodes = [];

      wrapper.find(Form.Input).forEach((item)=>{
        textNodes.push(item.node.props.label);
      });

      //wrapper.find(Form.Input).forEach(item => { textNodes.push(item.node.props.label) });

  
      expect(textNodes).to.deep.equal(['Email', 'First name', 'Last name', 'Birthdate']);
    });
  
    it('should have props signup and setItem', () => {
      const wrapper = 
        mount(<NameBirthdateInput setItem={ () => {} } signup={ {
          username: '',
          password: '',
          'confirm_password': '',
          email: '',
          'first_name': '',
          'last_name': '',
          'birth_day': '',
          'birth_month': '',
          'birth_year': ''
        } }/>);
  
      expect(wrapper.props().signup).to.deep.equal({
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
  
      expect(wrapper.props().setItem).to.be.a('function');
    });
  
  });

  describe('<NoteFormInput />', () => {

    it('should render 1 input element', () => {
      const wrapper = mount(<NoteFormInput title='Note Title' field='title'/>);      
      expect(wrapper.find(Input)).to.have.length(1);
            
    });

    it('should have classname and children as props', () => {
      const wrapper = shallow(<NoteFormInput title='Note Title' field='title'/>);   
      var props = wrapper.props();
      expect(Object.keys(props).join(' ')).to.equal('className children');
    })
  
  });

  describe('<Form />', () => {
    
    it('should render 2 instances of <NoteFormInput>', () => {
      const wrapper = shallow(<NoteForm note={{
        date: '',
      }}
      login={{username: ''}}/>);
      var props = wrapper.props();
      console.log('what are da props', props);
      expect(wrapper.find(NoteFormInput)).to.have.length(2);
    });

  });

});
