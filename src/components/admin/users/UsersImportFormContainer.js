import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UsersImportForm        from './UsersImportForm';
import UsersImportReport      from './UsersImportReport';
import adminActions           from 'actions/admin/';
import Papa                   from 'papaparse';
import _                      from 'lodash';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UsersImportFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.props.actions.getAllPrecincts({token: this.props.session.token});
  }

  onSelect(e) {
    // Parse CSV into JSON array.
    Papa.parse(e.target.files[0], {
      complete: (results) => {
        let userJson = _.map(results.data, (user) => {
          if(user.length === 4) {
            return {
              code: user[0],
              county: user[1],
              precinct: user[2],
              email: user[3]
            }
          }
        });

        this.setState({users: _.compact(userJson)});
      }
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.actions.importUsers({
      token: this.props.session.token,
      users: this.state.users
    });
  }

  render() {
    if(this.props.adminUsers.imported) {
      return (
        <div className='row'>
          <div className='col-md-12'>
            <UsersImportReport {...this.props} /> 
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='row'>
          <div className='col-md-6'>
            <UsersImportForm 
              users={this.state.users} 
              onSelect={(e) => this.onSelect(e) } 
              onSubmit={(e) => this.onFormSubmit(e) } 
              {...this.props} />
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersImportFormContainer);
