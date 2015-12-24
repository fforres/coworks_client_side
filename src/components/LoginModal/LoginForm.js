import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from 'redux/modules/account/account';
import { actions as modalActions } from 'redux/modules/account/modal';
import { Modal, Button, Input } from 'react-bootstrap';
import style from './LoginModal.scss';
import { Ref } from 'utils/firebase/firebaseComponent';

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
    showLoginModal: PropTypes.func,
    hideLoginModal: PropTypes.func,
    registerUser : PropTypes.func,
    loginLocal : PropTypes.func
  }

  componentWillMount () {
  }

  render () {
    const userIcon = (<i className='fa fa-fw fa-user'/>);
    const lockIcon = (<i className='fa fa-fw fa-lock'/>);
    return (
      <form>
        <Input type='text' placeholder='Usuario' wrapperClassName={style.show_in_modal} addonBefore={userIcon} ref='username' />
        <Input type='password' placeholder='Contraseña' wrapperClassName={style.show_in_modal} addonBefore={lockIcon} ref='password' />
        <button className='btn btn-lg btn-primary btn-block'
          onClick={(e)=>{
            e.preventDefault();
            this.localLogin();
          }}>Ingresa</button>
      </form>
    );
  }

  localLogin () {
    Ref.authWithPassword({
      email: this.refs.username.refs.input.value,
      password: this.refs.password.refs.input.value
    }, (error, authData) => {
      if (error) {
        switch (error.code) {
        case 'INVALID_EMAIL':
          console.log('The specified user account email is invalid.');
          break;
        case 'INVALID_PASSWORD':
          console.log('The specified user account password is incorrect.');
          break;
        case 'INVALID_USER':
          console.log('The specified user account does not exist.');
          break;
        default:
          console.log('Error logging user in:', error);
        }
      } else {
        console.log('Authenticated successfully with payload:', authData);
        this.props.loginLocal(authData);
      }
    });
  }
}

export default connect( mapStateToProps, modalActions)(
  connect(mapStateToProps, accountActions)(NavBar)
);
