import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from '../../redux/modules/account/account';
import { actions as modalActions } from '../../redux/modules/account/modal';
import { Modal } from 'react-bootstrap';
import style from './LoginModal.scss';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
import { Ref } from 'utils/firebase/firebaseComponent';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.account.loggedIn,
    isModalShown: state.account.isModalShown,
    userData: state.account.userData,
    logInFormShown: state.accountModal.logInFormShown
  };
};

class LoginModal extends Component {
  static propTypes = {
    isModalShown: PropTypes.bool,
    updateMapCenter: PropTypes.func,
    showLoginModal: PropTypes.func,
    hideLoginModal: PropTypes.func,
    toggleLoginForm: PropTypes.func,
    logIn: PropTypes.func,
    logInFormShown: PropTypes.bool
  }

  componentDidMount () {
  }

  render () {
    const theForm = ()=>{
      if (this.props.logInFormShown) {
        return (<LoginForm/>);
      }
      return (<RegisterForm/>);
    };

    return (
      <Modal
          {...this.props}
          show={this.props.isModalShown}
          onHide={this.props.hideLoginModal}
          dialogClassName='custom-modal'
        >
          <div className={style.modal_container}>
            <div className={style.omb_login}>
              <h3 className={style.omb_authTitle}>Ingresa con tus redes sociales </h3>
              <div className={style.omb_socialButtons + ' row '}>
                <div className='col-xs-4'>
                  <a onClick={()=>{this.doLogin('facebook');}} href='#' className={style['omb_btn-facebook'] + ' ' + style.omb_socialLink + ' btn btn-lg btn-block'}>
                    <i className='fa fa-fw fa-facebook'></i>
                    <span className='hidden-xs'>Facebook</span>
                  </a>
                </div>
                <div className='col-xs-4'>
                  <a onClick={()=>{this.doLogin('twitter');}} href='#' className={style['omb_btn-twitter'] + ' ' + style.omb_socialLink + ' btn btn-lg btn-block'}>
                    <i className='fa fa-fw fa-twitter'></i>
                    <span className='hidden-xs'>Twitter</span>
                  </a>
                </div>
                <div className='col-xs-4'>
                  <a onClick={()=>{this.doLogin('google');}} href='#' className={style['omb_btn-google'] + ' ' + style.omb_socialLink + ' btn btn-lg btn-block'}>
                    <i className='fa fa-fw fa-google-plus'></i>
                    <span className='hidden-xs'>Google+</span>
                  </a>
                </div>
              </div>

              <div className={style.omb_loginOr}>
                <div className='col-xs-12'>
                  <hr className={style.omb_hrOr}/>
                  <span className={style.omb_spanOr}>Con tu nombre de usuario </span>
                  <span className={style.omb_spanOr_sub}><a href='#' onClick={()=>{this.toggleLoginForm();}}> (O regístrate acá)</a></span>
                </div>
              </div>

              <div className='col-xs-12 '>
                <div className={style.show_in_modal + ' col-xs-12 col-sm-6 col-sm-offset-3'}>
                    {theForm()}
                </div>
              </div>

              <div className='col-xs-12 col-sm-6 col-sm-offset-3'>
                <div className='col-xs-12'>
                  <p className={style.omb_forgotPwd}>
                    <a href='#'>Olvidaste tu contraseña?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Modal>
    );
  }

  doLogin (provider) {
    const props = {...this.props};
    Ref.authWithOAuthPopup(provider, (err, data) => {
      if (!err) {
        props.logIn(data);
      }
    });
  }

  toggleLoginForm () {
    this.props.toggleLoginForm();
  }
}

export default connect(mapStateToProps, modalActions)(
  connect(mapStateToProps, accountActions)(
    LoginModal
  )
);
