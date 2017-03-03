import chai from 'chai';
import * as loginActions from '../../../client/src/actions/login'; 
import * as noteActions from '../../../client/src/actions/noteForm';
import * as dataActions from '../../../client/src/actions/dataArray';

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

  it('should create an action to set note fields', () => {

    const expectedActionTitle = {
      type: "SET_NOTE_FORM_TITLE",
      value: "Note Title"
    };

    const expectedActionUsername = {
      type: 'SET_NOTE_FORM_USERNAME',
      value: 'username'
    }

    const expectedActionVineyard = {
      type: 'SET_NOTE_FORM_VINEYARD',
      value: 'Bedrock'
    } 

    const expectedActionBlock = {
      type: 'SET_NOTE_FORM_BLOCK',
      value: '7'
    } 

    const expectedActionRow = {
      type: 'SET_NOTE_FORM_ROW',
      value: '15'
    }

    const expectedActionRowStart = {
      type: 'SET_NOTE_FORM_ROWSTART',
      value: '0'
    }

    const expectedActionRowEnd = {
      type: 'SET_NOTE_FORM_ROWEND',
      value: '20'
    }

    const expectedActionLat = {
      type: 'SET_NOTE_FORM_LAT',
      value: '122.1256'
    }

    const expectedActionLon = {
      type: 'SET_NOTE_FORM_LON',
      value: '-22.7'
    }

    const expectedActionTextArea = {
      type: 'SET_NOTE_FORM_TEXTAREA',
      value: 'This row is looking bee-you-ti-ful'
    }


    expect(noteActions.setNoteFormItem('title', 'Note Title')).to.deep.equal(expectedActionTitle);
    expect(noteActions.setNoteFormItem('username', 'username')).to.deep.equal(expectedActionUsername);
    expect(noteActions.setNoteFormItem('vineyard', 'Bedrock')).to.deep.equal(expectedActionVineyard);
    expect(noteActions.setNoteFormItem('block', '7')).to.deep.equal(expectedActionBlock);
    expect(noteActions.setNoteFormItem('row', '15')).to.deep.equal(expectedActionRow);
    expect(noteActions.setNoteFormItem('rowstart', '0')).to.deep.equal(expectedActionRowStart);
    expect(noteActions.setNoteFormItem('rowend', '20')).to.deep.equal(expectedActionRowEnd);
    expect(noteActions.setNoteFormItem('lat', '122.1256')).to.deep.equal(expectedActionLat);
    expect(noteActions.setNoteFormItem('lon', '-22.7')).to.deep.equal(expectedActionLon);
    expect(noteActions.setNoteFormItem('textarea', 'This row is looking bee-you-ti-ful')).to.deep.equal(expectedActionTextArea);

  })
  
  it('should have an action to input a form in the database', () => {
   
    noteActions.postNote({
      title: 'title',
      text: 'this row is bee-you-ti-ful',
      location: '3',
      image: ''
    }, '/');

  });

  it('should have an action to clear note fields after a note has been submitted', () => {
    // const expectedActionClear = {
    //   type: 'CLEAR_NOTE_FORM_FIELDS' 
    // }:
    // expect()
  });
  
});
