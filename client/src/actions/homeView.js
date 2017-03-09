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

//for populating the local store with org vineyard info
export const testOrgs = () => {
  axios.get('/api/organization/information', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      name: this.props.auth.username
    }
  })  
  .then((res) => {
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
    console.log('error getting org vineyard information: ', err);
  })
}