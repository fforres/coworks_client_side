import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from '../../redux/modules/account';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, SplitButton, DropdownButton } from 'react-bootstrap';
import { actions as coworksActions } from '../../redux/modules/coworks';
import LoginModal from '../LoginModal/LoginModal.js';

const mapStateToProps = (state) => {
  return {
    loggedIn : state.account.loggedIn,
    isModalShown : state.account.isModalShown,
    userData : state.account.userData
  };
};

const mapStateToPropsActions = (state) => {
  return {};
};


class NavBar extends Component {
  static propTypes = {
    updateMapCenter : PropTypes.func,
    showLoginModal  : PropTypes.func,
    hideLoginModal  : PropTypes.func,
    logIn           : PropTypes.func,
    loggedIn        : PropTypes.bool.isRequired
  }

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
      } else {
        return (
          <DropdownButton bsStyle='default' title='Default' key={'i'} id={'dropdown-basic-0'}>
            <MenuItem eventKey={1.1}>Action</MenuItem>
            <MenuItem eventKey={1.2}>Another action</MenuItem>
            <MenuItem eventKey={1.3} active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.5}>Separated link</MenuItem>
           </DropdownButton>
        );
      }
    };
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
