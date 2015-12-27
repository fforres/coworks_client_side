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
    loginLocal: PropTypes.func,
    addNotification: PropTypes.func
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
          this.props.addNotification({
            title:'Wow!',
            message:'El email ingresado es inválido :(',
            level:'warning'
          });
          break;
        case 'INVALID_PASSWORD':
          this.props.addNotification({
            title:'Wow!',
            message:'Password Incorrecto! :(',
            level:'warning'
          });
          break;
        case 'INVALID_USER':
          this.props.addNotification({
            title:'Wow!',
            message:'Esa cuenta de usuario no existe en nuestros registros.\n¿Seguro que está bien escrito?',
            level:'warning'
          });
          break;
        default:
          this.props.addNotification({
            title:'Houston!',
            message:'Hay problemas al intentar ingresar con tu cuenta. \nComunícate con el equipo de soporte para poder ayudarte',
            level:'error'
          });
        }
      } else {
        this.props.addNotification({
          title:'Welcome!',
          message:'Genial! Ya estás autenticado :D',
          level:'success'
        });
        this.props.loginLocal(authData);
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
