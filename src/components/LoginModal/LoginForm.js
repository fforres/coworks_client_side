import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from 'redux/modules/account';
import { Modal, Button, Input } from 'react-bootstrap';
import { config } from 'utils/firebase/firebaseReduxSubscriber';
const Ref = config.ref;

const mapStateToProps = (state) => {
  return {
    loggedIn : state.account.loggedIn,
    isModalShown : state.account.isModalShown,
    userData : state.account.userData
  };
};
class NavBar extends Component {
  static propTypes = {
    isModalShown: PropTypes.bool,
    updateMapCenter: PropTypes.func,
    showLoginModal: PropTypes.func,
    hideLoginModal: PropTypes.func,
    registerUser : PropTypes.func
  }

  componentDidMount () {
  }

  render () {
    const userIcon = (<i className='fa fa-fw fa-user'/>);
    const lockIcon = (<i className='fa fa-fw fa-lock'/>);
    return (
      <form>
        <Input type='text' addonBefore={userIcon} />
        <Input type='password' addonBefore={lockIcon} />
        <button className='btn btn-lg btn-primary btn-block' onClick={()=>{this.localLogin();}}>Login</button>
      </form>
    );
  }

  localLogin () {
    console.log(this.props);
    // this.props.loginLocal();
  }

}

export default connect(mapStateToProps, accountActions)(NavBar);
