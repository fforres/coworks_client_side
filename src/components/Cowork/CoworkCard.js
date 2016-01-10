import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import style from './CoworkCard.scss';
import { Link } from 'react-router';
import { Loading, Error404 } from 'components';

const mapStateToProps = (state) => {
  return {
    myCoworks: state.coworks.myCoworks,
    uid: state.account.userData.uid
  };
};

class CoworkCard extends Component {
  static propTypes = {
    myCoworks: PropTypes.any,
    cowork: PropTypes.obj,
    uid: PropTypes.string,
    unsetMyCoworks: PropTypes.func,
    nombre: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { cowork } = this.props;
    if (cowork === null || !cowork) {
      return (
        <Loading />
      );
    }
    if (cowork) {
      return (
        <div className='col-sm-4 col-md-3 '>
          <div className={style.card}>
            <div className={style['card-image-container']}>
              <img className={style['card-image'] + ' img-responsive'} src='http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png'/>
              <span className={style['card-title']}></span>
            </div>
            <div className={style['card-user']}>
              <img className={style['user-pic'] + ' img-responsive'} src='http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'/>
            </div>
            <div className={style['card-content']}>
              <p className={style['card-content-text']}>{cowork.nombre}</p>
            </div>
            <div className={style['card-action']}>
              <Link to={'/cowork/' + cowork.nombre} className={style['card-action-link']}>Perfil</Link>
            </div>
          </div>
        </div>
      );
    }
    return (
      <Error404 />
    );
  }
}

export default connect(mapStateToProps, coworksActions)(
  CoworkCard
);
