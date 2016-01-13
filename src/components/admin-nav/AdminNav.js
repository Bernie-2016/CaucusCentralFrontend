import React                  from 'react';
import { Link }               from 'react-router';

export class AdminNav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to='#' className='navbar-brand'>Caucus Central</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to='/admin'>Precincts</Link></li>
              <li><Link to='/admin/users'>Users</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to='#'>Download CSV</Link></li>
              <li><Link to='#'>Upload CSV</Link></li>
              <li><Link to='#' onClick={this.props.signOut}>Sign Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AdminNav;

