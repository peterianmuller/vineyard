//AJAX
import axios from 'axios';

export function addEvent(event) {
  return {
    type: "ADD_NOTES",
    value: event
  };
}

export function getNotes() {
  return dispatch => axios.get('/api/note', {
    headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
  })
  .then(resp => {
    return dispatch(setNotes(resp.data));
  })
  .catch(err => {
    console.log('error getting notes: ', err);
  });
}

export function setNotes(data) {
  return {
    type: "GET_NOTES",
    value: data
  };
}

/**
 * Sort notes by date.
 * @function
 * @param {array} data - Finds oldest notes and returnes their locations. This function needs to figure out the oldest locations that haven't been looked at in a while. // parse data and find oldest data by area. Data is returned then. Return data we need and then dispatch reducer on componenet 
 */
export function sortNotesByDate(data) {

  var plots = [];
  var oldest = {time:'', lat:'', lng:'' };

  data.forEach((note) => {
    var dateTimeParsed = [], sortedNotes; 

    dateTimeParsed.push(note.date_time.split('-')[0], note.date_time.split('-')[1], note.date_time.split('-')[2].split('T')[0]);

    plots.push({lat:note.latitude, lng:note.longitude, time: dateTimeParsed, title: note.title,text: note.text});

  });

   plots.push({lat:1, lng:1, time: ['2015','01', '03'], title: 'yas',text: 'yasss'});
   plots.push({lat:1, lng:1, time: ['2017','01', '03'], title: 'yas',text: 'yasss'});

  plots.sort((a,b) => {
    if (a.time[0] < b.time[0] || a.time[1] < b.time[1] || a.time[2] < b.time[2]) {
      return -1;
    } else if (a.time[0] > b.time[0] || a.time[1] > b.time[1] || a.time[2] > b.time[2]) {
      return 1;
    } else {
      return 0;
    }  
  });

  //return data we need and then dispatch reducer on componenet
  return plots;

  // plots is now the array that we want to post to the page
    // in order to post to the page, we need to store this aray in state somewhere

  //perhaps write another reducer for OldestData, populate it as an array and then list out the oldest notes via map
  //eventually turn these old notes into areas on the map

  // reducer created




}
