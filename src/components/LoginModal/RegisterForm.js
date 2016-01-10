import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from 'redux/modules/account/account';
import { actions as modalActions } from 'redux/modules/account/modal';
import { actions as notificationsActions } from 'redux/modules/notifications';
import { Input } from 'react-bootstrap';
import style from './LoginModal.scss';
import { Ref } from 'utils/firebase/firebaseComponent';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.account.loggedIn,
    isModalShown: state.account.isModalShown,
    userData: state.account.userData
  };
};

class NavBar extends Component {
  static propTypes = {
    isModalShown: PropTypes.bool,
    showLoginModal: PropTypes.func,
    hideLoginModal: PropTypes.func,
    registerUser: PropTypes.func,
    addNotification: PropTypes.func
  };

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
          this.localRegister();
        }}>Regístrate</button>
      </form>
    );
  }

  localRegister () {
    Ref.createUser({
      email: this.refs.username.refs.input.value,
      password: this.refs.password.refs.input.value
    }, (error) => {
      if (error) {
        switch (error.code) {
        case 'EMAIL_TAKEN':
          this.props.addNotification({
            title:'Trouble in paradise!',
            message:'El email que ingresaste ya está siendo usado. \n¿Seguro que no tienes una cuenta creada?',
            level:'error'
          });
          break;
        default:
          this.props.addNotification({
            title:'Houston!',
            message:'Hay problemas al intentar crear tu cuenta. \nComunícate con el equipo de soporte para poder ayudarte',
            level:'error'
          });
          break;
        }
      } else {
        this.props.addNotification({
          title:'Yahoo!',
          message:'Tu cuenta está creada! :D \n',
          level:'success'
        });
      }
    });
  }

}

export default connect( mapStateToProps, modalActions)(
  connect(mapStateToProps, accountActions)(
    connect(mapStateToProps, notificationsActions)(
      NavBar
    )
  )
);
