import React                    from 'react';
import { Link }                 from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export class AdminNav extends React.Component {
  render () {
    return (
      <div className='row'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/admin'>Caucus Central</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href='/admin'>States</NavItem>
              <NavItem eventKey={2} href='/admin/users'>Captains &amp; Organizers</NavItem>
              <NavItem eventKey={3} href='/admin/audits'>Audits</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={4} href='/admin/profile'>Profile</NavItem>
              <NavItem eventKey={5} onClick={this.props.signOut} href='#'>Sign Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AdminNav;

