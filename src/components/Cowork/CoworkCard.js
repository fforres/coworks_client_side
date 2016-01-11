import React, { Component, PropTypes } from 'react';
import style from './CoworkCard.scss';
import { Link } from 'react-router';
import { Loading, Error404 } from 'components';

class CoworkCard extends Component {
  static propTypes = {
    cowork: PropTypes.obj,
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
      if (!cowork.images) {
        cowork.images = {};
        if (!cowork.images.profile) {
          cowork.images.profile = 'http://epho.com.au/wp-content/uploads/2014/01/media_dummy-user-800x0.jpg';
        }
        if (!cowork.images.background) {
          cowork.images.background = 'http://epho.com.au/wp-content/uploads/2014/01/media_dummy-user-800x0.jpg';
        }
      }
      return (
        <div className='col-sm-4 col-md-3 '>
          <div className={style.card}>
            <div className={style['card-image-container']}>
              <img className={style['card-image'] + ' img-responsive'} src='http://material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/materialdesign_introduction.png'/>
              <span className={style['card-title']}></span>
            </div>
            <div className={style['card-user']}>
              <img className={style['user-pic'] + ' img-responsive'} src={cowork.images.profile}/>
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

export default CoworkCard;
