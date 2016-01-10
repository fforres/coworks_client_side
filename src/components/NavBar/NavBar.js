import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as accountActions } from 'redux/modules/account/account';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

import UserNugget from './UserNugget/UserNugget.js';
const mapStateToProps = (state) => {
  return {
    loggedIn: state.account.loggedIn,
    isModalShown: state.account.isModalShown,
    userData: state.account.userData
  };
};

class NavBar extends Component {
  static propTypes = {
    updateMapCenter: PropTypes.func,
    showLoginModal: PropTypes.func,
    userData: PropTypes.object,
    logIn: PropTypes.func,
    loggedIn: PropTypes.bool.isRequired
  };

  render () {
    const logInSnippet = () => {
      if (!this.props.loggedIn) {
        return (
          <Navbar.Form pullLeft>
            <Button onClick={()=>{
              this.props.showLoginModal();
            }}> Ingresa </Button>
          </Navbar.Form>
        );
      }
      return (
        <UserNugget {...this.props.userData} />
      );
    };
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/' className=''>
            Coworks.cl
            </Link>
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
            <li role='presentation'>
              <Link to='/' className=''>
                <i className='fa fa-fw fa-home' ></i>
              </Link>
            </li>
            <NavItem eventKey={2} href='#' onClick={()=>{this.centerMe();}}>
              <i className='fa fa-fw fa-location-arrow'/>
            </NavItem>
            {logInSnippet()}
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
        console.log(err);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }
}

export default connect(mapStateToProps, coworksActions)(
  connect(mapStateToProps, accountActions)(
    NavBar
  )
);
