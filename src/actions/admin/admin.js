import * as c from 'constants/admin';

export default {
  download_csv: (file) => ({ 
    type : c.DOWNLOAD_CSV,
    file
  }),
  download_csv_error: (error) => ({ 
    type : c.DOWNLOAD_CSV_ERROR,
    error
  }),
  download_csv_success: (response) => ({ 
    type : c.DOWNLOAD_CSV_SUCCESS, 
    response 
  }),
  upload_csv: (file) => ({ 
    type : c.UPLOAD_CSV,
    file
  }),
  upload_csv_error: (error) => ({ 
    type : c.UPLOAD_CSV_ERROR, 
    error
  }),
  upload_csv_success: (response) => ({ 
      type : c.UPLOAD_CSV_SUCCESS 
  }),
  add_user: (user) => ({ 
    type : c.ADD_USER,
    user
  }),
  add_user_error: (error) => ({ 
    type : c.ADD_USER_ERROR 
  }),
  add_user_success: (response) => ({ 
    type : c.ADD_USER_SUCCESS, 
    response
  }),
  remove_user: (user_id) => ({ 
    type : c.REMOVE_USER,
    user_id
  }),
  remove_user_error: (error) => ({ 
    type : c.REMOVE_USER_ERROR, 
    error
  }),
  remove_user_success: (response) => ({ 
    type : c.REMOVE_USER_SUCCESS, 
    response
  })
};
