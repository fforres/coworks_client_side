import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from 'redux/modules/account/account';
import { actions as modalActions } from 'redux/modules/account/modal';
import { Modal, Button, Input } from 'react-bootstrap';
import { config } from 'utils/firebase/firebaseReduxSubscriber';
import style from './LoginModal.scss';
const Ref = config.ref;
console.log(config);

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
    Ref : PropTypes.func
  }

  componentDidMount () {
  }

  render () {
    const userIcon = (<i className='fa fa-fw fa-user'/>);
    const lockIcon = (<i className='fa fa-fw fa-lock'/>);
    return (
      <form>
        <Input type='text' placeholder='Usuario' wrapperClassName={style.show_in_modal} addonBefore={userIcon} ref='username' />
        <Input type='password' placeholder='Contraseña' wrapperClassName={style.show_in_modal} addonBefore={lockIcon} ref='password' />
        <button className='btn btn-lg btn-primary btn-block' onClick={(e)=>{
          e.preventDefault();
          this.localRegister(Ref);
        }}>Regístrate</button>
      </form>
    );
  }

  localRegister (r) {
    r.createUser({
      email: this.refs.username.refs.input.value,
      password: this.refs.password.refs.input.value
    }, (error, userData) => {
      if (error) {
        console.log('Error creating user: ', error);
      } else {
        console.log('Successfully created user account with uid: ', userData.uid);
      }
    });
  }

}

export default connect( mapStateToProps, modalActions)(
  connect(mapStateToProps, accountActions)(NavBar)
);
