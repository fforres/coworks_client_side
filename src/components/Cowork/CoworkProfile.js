import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import style from './CoworkProfile.scss';
import { Link } from 'react-router';
import { fireBaseComponent, fireBaseMap } from 'utils/firebase/firebaseComponent.js';
import { Loading, Error404 } from 'components';

class ProfileView extends Component {
  static propTypes = {
    cowork: PropTypes.any
  };

  componentDidMount () {
  }

  render () {
    const { cowork } = this.props;
    if (cowork) {
      return (
        <div className='col-xs-12'>
          <center>
            <div className='col-md-8 col-md-offset-2'>
              <img
                src='https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/p100x100/11760213_10153471274488114_5851841921286907723_n.jpg?oh=945d7d94f41eb3e88c42130389edb08d&amp;oe=571F0EFF'
                className='img-responsive img-circle'
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
