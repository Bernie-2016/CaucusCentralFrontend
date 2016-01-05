import * as c from 'constants/admin';
import fetch from 'isomorphic-fetch';

const dummyUsers = [
        {
          id:0,
          name:'Joseph Cotton',
          email:'joeycotton@gmail.com',
          type:'Admin',
          precinct:'N/A'
        },
        {
          id:1,
          name:'Orson Welles',
          email:'foiegras4lyfe@msn.com',
          type:'Precinct Captain',
          precinct:'1'
        },
        {
          id:2,
          name:'Dorothy Comingore',
          email:'dorothy.c49@yahoo.com',
          type:'Precinct Captain',
          precinct:'2'
        },
        {
          id:3,
          name:'Fats Waller',
          email:'thomas@yahoo.com',
          type:'Precinct Captain',
          precinct:'3'
        }
      ];

const dummyPrecincts = [
            {
              name:'Precinct 1',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 2',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 3',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 4',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 5',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 6',
              county:'Pike',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 7',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 8',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 9',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 10',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 11',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            },
            {
              name:'Precinct 12',
              county:'Polk',
              total_delegates:200,
              total_attendance:500,
              sanders_delegates_won: 120,
              sanders_attendance: 220,
            }
          ];



const get_precincts_request = () => ({
  type : c.GET_PRECINCTS_REQUEST
})
const get_precincts_success = function(response) {
  console.log('IN HERE', response);
  return {
    type : c.GET_PRECINCTS_SUCCESS,
    payload : response
  };
};

const get_precincts_error = (error) => ({
   type : c.GET_PRECINCTS_ERROR,
  payload: error 
})

//ASYNC ACTION.
const get_precincts = () => { 
    return dispatch => {
      dispatch(get_precincts_request());

      fetch('http://private-anon-458efa517-caucuscentral.apiary-mock.com/api/v1/precincts')
          .then(function(response) {
              if (response.status >= 400) {
                dispatch(get_precincts_error('Could not retrieve precinct data'));
              }
              return response.json();
          })
          .then(function(precincts) {
              dispatch(get_precincts_success(precincts));
          });
    };
}

const get_users_request = () => ({
  type : c.GET_USERS_REQUEST
})
const get_users_success = (response) => ({
   type : c.GET_USERS_SUCCESS,
   payload: response 
})
const get_users_error = (error) => ({
   type : c.GET_USERS_ERROR,
   error: error 
})

//ASYNC ACTION.
const get_users = () => {
  return dispatch => {
    dispatch(get_users_request());
    fetch('http://private-anon-458efa517-caucuscentral.apiary-mock.com/api/v1/users')
          .then(function(response) {
              if (response.status >= 400) {
                dispatch(get_users_error('There was an error retrieving the users'));
              }
              return response.json();
          })
          .then(function(users) {
              dispatch(get_users_success(users));
          });
  };
}

const add_user_request = () => ({
  type : c.ADD_USER_REQUEST
})
const add_user_success = (response) => ({
   type : c.ADD_USER_SUCCESS,
   payload: response 
})
const add_user_error = (error) => ({
   type : c.ADD_USER_ERROR,
   payload: error 
})

//ASYNC ACTION.  USING TIMEOUT AS A DUMMY TEST FOR NOW
const add_user = (user_info) => {
  return dispatch => {
    dispatch(add_user_request());
    setTimeout(function() {
      if (true) {
        dispatch(add_user_success(user_info));
      } else {
        dispatch(add_user_error('There was an error adding the user'));
      }
    }, 1000);
  };
}

const remove_user_request = () => ({
  type : c.REMOVE_USER_REQUEST
})
const remove_user_success = (response) => ({
   type : c.REMOVE_USER_SUCCESS,
   payload: response 
})
const remove_user_error = (error) => ({
   type : c.REMOVE_USER_ERROR,
   error: error 
})

//ASYNC ACTION.  USING TIMEOUT AS A DUMMY TEST FOR NOW
const remove_user = (user_id) => {
  return dispatch => {
    dispatch(remove_user_request());
    setTimeout(function() {
      if (true) {
        dispatch(remove_user_success([]));
      } else {
        dispatch(remove_user_error([]));
      }
    }, 1000);
  };
}

const download_csv_request = () => ({
  type : c.DOWNLOAD_CSV_REQUEST
})
const download_csv_success = (response) => ({
   type : c.DOWNLOAD_CSV_SUCCESS,
   payload: response 
})
const download_csv_error = (error) => ({
   type : c.DOWNLOAD_CSV_ERROR,
   error: error 
})

//ASYNC ACTION.  USING TIMEOUT AS A DUMMY TEST FOR NOW
const download_csv = (file) => {
  return dispatch => {
    dispatch(download_csv_request());
    setTimeout(function() {
      if (true) {
        dispatch(download_csv_success([]));
      } else {
        dispatch(download_csv_error('There was an error downloading the CSV'));
      }
    }, 1000);
  };
}

const upload_csv_request = () => ({
  type : c.UPLOAD_CSV_REQUEST
})
const upload_csv_success = (response) => ({
   type : c.UPLOAD_CSV_SUCCESS,
   payload: response 
})
const upload_csv_error = (error) => ({
   type : c.UPLOAD_CSV_ERROR,
   payload: error 
})

//ASYNC ACTION.  USING TIMEOUT AS A DUMMY TEST FOR NOW
const upload_csv = (file) => {
  return dispatch => {
    dispatch(upload_csv_request());
    setTimeout(function() {
      if (true) {
        dispatch(upload_csv_success([]));
      } else {
        dispatch(upload_csv_error('There was an error uploading the CSV'));
      }
    }, 1000);
  };
}

export default {
  get_users,
  get_users_request,
  get_users_success,
  get_users_error,
  get_precincts,
  get_precincts_request,
  get_precincts_success,
  get_precincts_error,
  add_user,
  add_user_request,
  add_user_error,
  add_user_success,
  remove_user,
  remove_user_request,
  remove_user_error,
  remove_user_success,
  download_csv,
  download_csv_request,
  download_csv_error,
  download_csv_success,
  upload_csv,
  upload_csv_request,
  upload_csv_error,
  upload_csv_success
};
