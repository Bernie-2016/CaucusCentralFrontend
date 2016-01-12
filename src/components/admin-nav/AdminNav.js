require('./admin-nav.scss');
import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as sessionActions    from 'actions/session';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export class AdminNav extends React.Component {
  render () {
    return (
      <nav className='container admin-nav-container'>
        <ul className='container admin-nav list-inline'>
          <li><Link to='/admin' className='btn btn-primary'>Precincts</Link></li>
          <li><Link to='/admin/users' className='btn btn-primary'>Users</Link></li>
        </ul>
        <ul className='container admin-nav list-inline admin-nav-downloads'>
          <li><Link to='#' className='btn btn-primary'>Download CSV</Link></li>
          <li><Link to='#' className='btn btn-primary'>Upload CSV</Link></li>
          <li>
            <button onClick={() =>{this.props.actions.signOut(this.props.session.token)}}>Sign Out</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNav);
