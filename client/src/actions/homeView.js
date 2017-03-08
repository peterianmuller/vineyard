export function setHomeLocation(data){
  return {
    type: "UPDATE_LOCATION",
    value: data
  };
}

export function setFOrC() {
  return {
    type: "SET_F_OR_C",
  };
}


export function testOrgs() {
    var context;
    console.log('test orgs running')
    axios.get('/api/organization/information', {
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token')  
      },
      params: {
        name: context.props.auth.username
      }
    })  
    .then((res) => {
      //here save vinyard name to local storage
      console.log('this is the result from the axios call: ', res.data);
      var vineyards = {
        vineyards: res.data.vineyards
      }
      var org_info = {
        orgs: res.data
      }
      window.localStorage.setItem('vineyards', JSON.stringify(vineyards));
      window.localStorage.setItem('orgs', JSON.stringify(org_info));
    })
    .catch((err)=> {
      console.log(err);
    })
  }