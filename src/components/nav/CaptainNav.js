import React                    from 'react';
import { Link }                 from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class CaptainNav extends React.Component {
  render() {
    return (
      <div className='row'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/captain'>Caucus Central</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href='/captain/help'>Help</NavItem>
              <NavItem eventKey={2} href='/captain/profile'>Profile</NavItem>
              <NavItem eventKey={3} onClick={this.props.signOut} href='#'>Sign Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
