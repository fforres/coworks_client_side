import React, { Component, PropTypes } from 'react';
import style from './CoworkProfile.scss';

class ProfileView extends Component {
  static propTypes = {
    cowork: PropTypes.any
  };

  componentDidMount () {
  }

  render () {
    const { cowork } = this.props;
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
        <div className='col-xs-12'>
          <center>
            <div className='col-md-8 col-md-offset-2'>
              <img
                src={cowork.images.profile}
                className={style.image + ' img-responsive img-circle'}
              />
              <h1 className={style.title + ' col-xs-12'}>{cowork.nombre}</h1>
              <p className={style.bajada + ' col-xs-12'}>{cowork.descripcion.larga}</p>
            </div>
            <hr className='col-md-4 col-md-offset-4'/>
            <div className='col-md-8 col-md-offset-2'>
              <p className={style.bajada}>
                <span className={style.calle}>{cowork.direccion.calle} </span>
                <span>{cowork.direccion.numero} </span>
                -
                <span className={style.ciudad}> {cowork.direccion.ciudad} </span>
                <span className={style.pais}>{cowork.direccion.pais} </span>
              </p>
            </div>
            <div className='col-md-8 col-md-offset-2'>
              <button type='button' className='btn btn-success'>Book me!</button>
              <button type='button' className='btn btn-info'>Send me a message</button>
            </div>
          </center>
        </div>
      );
    }
  }
}

export default ProfileView;
