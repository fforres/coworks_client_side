import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as currentCoworksActions } from 'redux/modules/coworks/currentCowork';
import style from './CoworkProfile.scss';
import { Link } from 'react-router';
import ContentEditable from 'react-contenteditable';
import { Input, Button } from 'react-bootstrap';
import { fireBaseComponent, fireBaseMap, Ref } from 'utils/firebase/firebaseComponent.js';


const mapStateToProps = (state) => {
  return {
    currentCowork: state.currentCowork.current,
    newCowork: state.currentCowork.newCowork,
    isUpdating: state.currentCowork.isUpdating
  };
};

class ProfileView extends Component {
  static propTypes = {
    cowork: PropTypes.any,
    id: PropTypes.string,
    newCowork: PropTypes.any,
    isUpdating: PropTypes.bool,
    updateCurrentCowork: PropTypes.func,
    coworkUpdating: PropTypes.func,
    coworkUpdated: PropTypes.func
  }

  componentWillUpdate () {
    console.log(this.props.newCowork.direccion.numero);
  }

  render () {
    const { newCowork, isUpdating } = this.props;
    if (newCowork) {
      return (
        <div className='container'>
          <div className='col-xs-12'>
            <form className='form-horizontal'>
              <center>
                <img
                  src='https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/p100x100/11760213_10153471274488114_5851841921286907723_n.jpg?oh=945d7d94f41eb3e88c42130389edb08d&amp;oe=571F0EFF'
                  className='img-responsive img-circle'
                />
                <h1 className={style.title + ' col-sm-12'}>{newCowork.nombre}</h1>
                <Input
                  value={newCowork.descripcion.larga}
                  type='textarea'
                  label='Descripcion Larga'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDescripcionLarga.bind(this)}
                />
                <Input
                  value={newCowork.descripcion.corta}
                  type='textarea'
                  label='Descripcion Corta'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDescripcionCorta.bind(this)}
                />
                <Input
                  value={newCowork.telefono}
                  type='text'
                  label='Teléfono'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleTelefono.bind(this)}
                />
                <Input
                  value={newCowork.url}
                  type='url'
                  label='URL'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleURL.bind(this)}
                />

                <hr className='col-sm-10 col-sm-offset-2'/>
                <h3 className={'col-sm-12'}>Dirección</h3>
                <Input
                  value={newCowork.direccion.ciudad}
                  type='input'
                  label='Ciudad'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDireccionCiudad.bind(this)}
                />
                <Input
                  value={newCowork.direccion.pais}
                  type='input'
                  label='Pais'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDireccionPais.bind(this)}
                />
                <Input
                  value={newCowork.direccion.calle}
                  type='input'
                  label='Calle'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDireccionCalle.bind(this)}
                />
                <Input
                  value={newCowork.direccion.numero}
                  type='input'
                  label='Numero'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleDireccionNumero.bind(this)}
                />


                <hr className='col-sm-10 col-sm-offset-2'/>
                <div className={style['no-padding-left'] + ' col-sm-10 col-sm-offset-2'}>
                  <Button
                    bsStyle='primary'
                    disabled={isUpdating}
                    onClick={!isUpdating ? ()=>{ this.saveData(this.props);} : null}>
                    {isUpdating ? 'Guardando...' : 'Guardar'}
                  </Button>
                </div>


              </center>
            </form>
          </div>
        </div>
      );
    }
  }

  handleDescripcionLarga (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.descripcion.larga = evt.target.value;
    this.handleChange();
  }
  handleDescripcionCorta (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.descripcion.corta = evt.target.value;
    this.handleChange();
  }
  handleTelefono (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.telefono = evt.target.value;
    this.handleChange();
  }
  handleURL (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.url = evt.target.value;
    this.handleChange();
  }
  handleDireccionCiudad (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.ciudad = evt.target.value;
    this.handleChange();
  }
  handleDireccionPais (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.pais = evt.target.value;
    this.handleChange();
  }
  handleDireccionCalle (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.calle = evt.target.value;
    this.handleChange();
  }
  handleDireccionNumero (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.numero = evt.target.value;
    this.handleChange();
  }

  handleChange () {
    const { updateCurrentCowork, newCowork } = this.props;
    updateCurrentCowork(Object.assign({}, newCowork));
  }

  saveData ({newCowork, coworkUpdating, coworkUpdated, id}) {
    coworkUpdating();
    Ref.child('coworks/' + newCowork.id).update(newCowork, ()=>{
      coworkUpdated();
    });
  }
}

const mapFireBaseEventsToStore = (props) => { return []; };
// fireBaseComponent(mapFireBaseEventsToStore, ProfileView)
export default connect(mapStateToProps, currentCoworksActions)(
  ProfileView
);
