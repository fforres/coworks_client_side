import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from '../../redux/modules/account';
import { Modal, Button } from 'react-bootstrap';
import style from './LoginModal.scss';
import LoginForm from './LoginForm.js';
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
    return (
      <Modal
          {...this.props}
          show={this.props.isModalShown}
          onHide={this.props.hideLoginModal}
          dialogClassName='custom-modal'
        >
        <Modal {...this.props} show={this.props.isModalShown} onHide={this.props.hideLoginModal} dialogClassName='custom-modal'>
          <div className={style.modal_container}>
            <div className={style.omb_login}>
              <h3 className={style.omb_authTitle}>Login or <a href='#'>Sign up</a></h3>
              <div className={style.omb_socialButtons + ' row '}>
                <div className='col-xs-4'>
                  <a onClick={()=>{this.doLogin('facebook');}} href='#' className={style['omb_btn-facebook'] + ' ' +  style.omb_socialLink + ' btn btn-lg btn-block'}>
                    <i className='fa fa-fw fa-facebook'></i>
                    <span className='hidden-xs'>Facebook</span>
                  </a>
                </div>
                <div className='col-xs-4'>
                  <a onClick={()=>{this.doLogin('twitter');}} href='#' className={style['omb_btn-twitter'] + ' ' +  style.omb_socialLink + ' btn btn-lg btn-block'}>
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
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                  <hr className={style.omb_hrOr}/>
                  <span className={style.omb_spanOr}>or</span>
                </div>
              </div>

              <div className='col-xs-12 '>
                <div className='col-xs-12 col-sm-6 col-sm-offset-3'>
                    <LoginForm />
                </div>
              </div>

              <div className='col-xs-12 col-sm-6 col-sm-offset-3'>
                <div className='col-xs-12'>
                  <p className={style.omb_forgotPwd}>
                    <a href='#'>Forgot password?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>

      </Modal>
    );
  }
  doLogin (provider) {
    const props = {...this.props};
    ref.authWithOAuthPopup(provider, (err, data) => {
      if (!err) {
        props.registerUser(data);
      }
    });
  }
}

export default connect(mapStateToProps, accountActions)(NavBar);
