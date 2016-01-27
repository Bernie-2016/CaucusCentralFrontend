import React                    from 'react';
import { Link }                 from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export class AdminNav extends React.Component {
  render () {
    return (
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
            <NavItem eventKey={2} href='/admin/users'>Users</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} href='/admin/profile'>Profile</NavItem>
            <NavItem eventKey={4} onClick={this.props.signOut} href='#'>Sign Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AdminNav;

