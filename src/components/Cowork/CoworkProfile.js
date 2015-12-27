import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks';
import style from './CoworkProfile.scss';
import { Link } from 'react-router';
import { fireBaseComponent, fireBaseMap } from 'utils/firebase/firebaseComponent.js';


const mapStateToProps = (state) => {
  return {
    coworks: state.coworks.coworks,
    current: state.coworks.current
  };
};
const mapFireBaseEventsToStore = (props) => {
  return [];
};

class ProfileView extends Component {
  static propTypes = {
    current: PropTypes.any,
    name: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    fireBaseMap({
      address: 'coworks',
      orderByChild: 'nombre',
      equalTo: this.props.name,
      type: 'value',
      action: coworksActions.setCurrentCowork()
    });
  }

  render () {
    const Current = this.props.current;
    if (Current === null || Current.nombre !== this.props.name) {
      return (
        <center>
          <h1><i className='fa fa-spinner fa-spin' /> </h1>
          <h1> Loading... </h1>
        </center>
      );
    } else {
      if (Current) {
        return (
          <div className='col-xs-12'>
            <center>
              <div className='col-md-8 col-md-offset-2'>
                <img
                  src='https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/p100x100/11760213_10153471274488114_5851841921286907723_n.jpg?oh=945d7d94f41eb3e88c42130389edb08d&amp;oe=571F0EFF'
                  className='img-responsive img-circle'
                  />
                <h1 className={style.title + ' col-xs-12'}>{Current.nombre}</h1>
                <p className={style.bajada}>{Current.descripcion.larga}</p>
              </div>
              <hr className='col-md-4 col-md-offset-4'/>
              <div className='col-md-8 col-md-offset-2'>
                <p className={style.bajada}>
                  <span className={style.calle}>{Current.direccion.calle} </span>
                  <span>{Current.direccion.numero} </span>
                  -
                  <span className={style.ciudad}> {Current.direccion.ciudad} </span>
                  <span className={style.pais}>{Current.direccion.pais} </span>
                </p>
              </div>
              <div className='col-md-8 col-md-offset-2'>
                <button type='button' className='btn btn-success'>Book me!</button>
                <button type='button' className='btn btn-info'>Send me a message</button>
              </div>
            </center>
          </div>
        );
      } else {
        return (
          <div className='col-xs-12'>
            <center>
              <div className={style['error-404']}>
                <div className={style['error-code']}>404 <i className='fa fa-warning'></i></div>
                <h2 className='font-bold'>Oops 404! <br/> No pudimos encontrar esta página! </h2>
                <div className={style['.error-desc']}>
                  <p>
                    Sorry, but the page you are looking for was either not found or does not exist.
                    <br/>
                    Try refreshing the page or click the button below to go back to the Homepage.
                  </p>
                  <div>
                    <br/>
                    <Link to='/' className='btn btn-primary'>
                      <span className='glyphicon glyphicon-home'></span> Go back to Homepage
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </div>
        );
      }
    }
  }
}

export default connect(mapStateToProps, coworksActions)(
  fireBaseComponent(mapFireBaseEventsToStore, ProfileView)
);
