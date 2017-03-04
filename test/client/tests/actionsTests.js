import chai from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import store from '../../../client/src/store';

import * as loginActions from '../../../client/src/actions/login'; 
import * as noteActions from '../../../client/src/actions/noteForm';
import * as dataActions from '../../../client/src/actions/dataArray';
import * as dataFormItemActions from '../../../client/src/actions/dataForm';
import * as userMapActions from '../../../client/src/actions/mapVis';
import * as noteFormActions from '../../../client/src/actions/noteForm';


var expect = chai.expect;

describe('Actions', () => {
  describe('Login', () => {
    var sandbox;
    var server;

    beforeEach(() => {
      sandbox = sinon.sandbox.create();
      server = sandbox.useFakeServer();
    });

    afterEach(() => {
      server.restore();
      sandbox.restore();
    });

    it('should create an action to set login item',  () => {
      const expectedActionPassword = {
        type: "SET_LOGIN_PASSWORD",
        value: "password"
      };

      const expectedActionUsername = {
        type: "SET_LOGIN_USERNAME",
        value: "username"
      };

      expect(loginActions.setLoginItem('password', 'password'))
        .to.deep.equal(expectedActionPassword);
      expect(loginActions.setLoginItem('username', 'username'))
        .to.deep.equal(expectedActionUsername);
    });

    it('should send HTTP request with username and password', (done) => {
      store.dispatch(loginActions.loginUser({username: 'username', password: 'password'}))
        .then(resp => {
          console.log(resp);
          done();

        });
      setTimeout(() => server.respond([200,
        { 'Content-Type': 'application/json' },
        '[]']), 0);
    });

  });

  describe('Notes', () => {
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

    it('should have an action to clear note fields', () => {
      const expectedActionClear = {
        type: 'CLEAR_NOTE_FIELDS' 
      }
      expect(noteActions.clearNoteFields()).to.deep.equal(expectedActionClear);
    });
  });

  describe('Data form', () => {
    it('should have an action to clear data form fields', () => {
      const expectedActionClear = {
        type: 'CLEAR_DATA_FIELDS'
      }
      expect(dataActions.clearDataFields()).to.deep.equal(expectedActionClear);
    });

    it('should have an action to clear data form fields', () => {
      const expectedActionClear = {
        type: 'CLEAR_DATA_FIELDS'
      }
      expect(dataActions.clearDataFields()).to.deep.equal(expectedActionClear);
    });


    it('should have an action to update specific properties from different rows', () => {
      const expectedActionAddDataToArray = {
        value: 5, key: 1, type: "SET_DATA_INPUT_ROW"
      }

      expect(dataActions.addDataToArray(1, 'row', 5)).to.deep.equal(expectedActionAddDataToArray);

    });

    it('should have an action to add rows to data input form', () => {
      const expectedActionAddRow = {
        type: "ADD_ROW"
      }

      expect(dataActions.addRowToTable()).to.deep.equal(expectedActionAddRow);

    });

    xit('should have an action that posts arrays of data objects to the databse', () => {
      return dataActions.postDataArray([{
        vineyard: '',
        block: '',
        varietal: '',
        clone: '',
        pH: '',
        brix: '',
        NaOH: '',
        date: '',
        titratable: '',
        row: ''
      }])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    });
  });

  it('should have an action to add a plot to the map', () => {
    const expectedActionAddPlot = {
        type: 'ADD_MAP_POINT',
        value: {label:'label', coords:[{lat:124.222, lng:-45}, {lat:130, lng:-33.1}]}
      }

    expect(userMapActions.addMapDataPoint({label:'label', coords:[{lat:124.222, lng:-45}, {lat:130, lng:-33.1}]})).to.deep.equal(expectedActionAddPlot);      
  
  });

  describe('Map Visualization', () => {
    it('should have an action to clear plot points form the mapVis', () => {
      const expectedActionClear = {
        type: 'CLEAR_MAP_POINTS'
      }
      expect(userMapActions.clearDataPoints()).to.deep.equal(expectedActionClear);
    });

    xit('should have an action to post map points to db')
  });

  describe('Weather', () => {
    it('should have an action to get weather data', () => {
      noteFormActions.getWeather({lat:122.33, lon: -38}, false);
    });
  });
  
  describe('Messenger', () => {
    
  });
});
