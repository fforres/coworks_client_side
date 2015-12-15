import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#'>Coworks.cl</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href='#'>Link</NavItem>
        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1}>About</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href='#'>
           <i className='fa fa-fw fa-home'/>
        </NavItem>
        <NavItem eventKey={2} href='#'>
          <i className='fa fa-fw fa-location-arrow'/>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
