import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../redux/modules/coworks';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    coworks : state.coworks.coworks,
    selected : state.coworks.selected,
    hovered : state.coworks.hovered
  };
};

class NavBar extends Component {
  static propTypes = {
    updateMapCenter: PropTypes.func
  }

  render () {
    return (
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
            <NavItem eventKey={2} href='#' onClick={()=>{this.centerMe();}}>
              <i className='fa fa-fw fa-location-arrow'/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  centerMe () {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const success = (pos) => {
        this.props.updateMapCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      };
      const error = (err) => {
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }
}

export default connect(mapStateToProps, coworksActions)(NavBar);
