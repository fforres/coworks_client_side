import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as currentCoworksActions } from 'redux/modules/coworks/currentCowork';
import style from './CoworkProfile.scss';
import { Input, Button, Tabs, Tab, Col } from 'react-bootstrap';
import { Ref } from 'utils/firebase/firebaseComponent.js';
import Dropzone from 'react-dropzone';

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
  };

  constructor () {
    super();
    this.state = {
      currentTab: 1,
      isCalculating: false
    };
  }

  componentWillUpdate () {
  }

  render () {
    const { newCowork, isUpdating } = this.props;
    /* TODO:
        Remove this hack the for images.
        Add a new viw for the Profile Editabe.
        Add a new route "cowork/id/edit" for edit data.
        Add button for edit on profile.
    */
    if (!newCowork.images) {
      newCowork.images = {};
      if (!newCowork.images.profile) {
        newCowork.images.profile = 'http://epho.com.au/wp-content/uploads/2014/01/media_dummy-user-800x0.jpg';
      }
      if (!newCowork.images.background) {
        newCowork.images.background = 'http://epho.com.au/wp-content/uploads/2014/01/media_dummy-user-800x0.jpg';
      }
    }
    if (newCowork) {
      return (
        <div className='container'>
          <div className='col-xs-12'>
            <form className='form-horizontal'>
              <center>

                <img
                  src={newCowork.images.profile}
                  className={style.image + ' img-responsive img-circle'}
                  onClick={()=>{this.refs.dropzone.open();}}
                />
                <Button
                  bsStyle='primary'
                  disabled={this.state.isCalculating}
                  onClick={()=>{this.refs.dropzone.open();}}
                >
                  Cambiar Foto
                </Button>
                <Dropzone
                  ref='dropzone'
                  onDrop={this.handleFileDrop}
                  multiple={false}
                  className={style.dropZoneImage}
                  accept='image/gif,image/jpeg,image/png'
                  >
                  <p>a</p>
                </Dropzone>
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
                  value={newCowork.pais}
                  type='text'
                  label='Pais'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handlePais.bind(this)}
                />
                <Input
                  value={newCowork.url}
                  type='url'
                  label='URL'
                  labelClassName='col-sm-2'
                  wrapperClassName='col-sm-10'
                  onChange={this.handleURL.bind(this)}
                />

                <br/><br/>
                <Tabs activeKey={this.state.currentTab} onSelect={this.handleTabSelect}>
                  <br/><br/>
                  <Tab eventKey={1} title='Dirección'>
                    <Col sm={10} smOffset={1}>
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
                      <Button
                        bsStyle='primary'
                        disabled={this.state.isCalculating}
                        onClick={!this.state.isCalculating ? ()=>{ this.fetchGeoCode();} : null}>
                        {this.state.isCalculating ? 'Calculando...' : 'Calcular posición'}
                      </Button>
                      <hr/>
                      <Input
                      value={newCowork.direccion.geo.lat || ''}
                      type='input'
                      label='Latitud'
                      labelClassName='col-sm-2'
                      wrapperClassName='col-sm-10'
                      onChange={this.handleDireccionLatitud.bind(this)}
                      />
                      <Input
                      value={newCowork.direccion.geo.lng || ''}
                      type='input'
                      label='Longitud'
                      labelClassName='col-sm-2'
                      wrapperClassName='col-sm-10'
                      onChange={this.handleDireccionLongitud.bind(this)}
                      />
                    </Col>
                  </Tab>
                  <Tab eventKey={2} title='Servicios'>
                    <Input
                      type='checkbox'
                      label='24/7'
                      checked={newCowork.servicios['24_7']}
                      onChange={() => { this.toggleServicios('24_7'); }}
                    />
                    <Input
                      type='checkbox'
                      label='Cafeteria'
                      checked={newCowork.servicios.cafeteria}
                      onChange={() => { this.toggleServicios('cafeteria'); }}
                    />
                    <Input
                      type='checkbox'
                      label='Espacios Públicos'
                      checked={newCowork.servicios.espacios_publicos}
                      onChange={() => { this.toggleServicios('24_7'); }}
                    />
                    <Input
                      type='checkbox'
                      label='Mentorias'
                      checked={newCowork.servicios.mentorias}
                      onChange={() => { this.toggleServicios('mentorias'); }}
                    />
                    <Input
                      type='checkbox'
                      label='Sala de Reuniones'
                      checked={newCowork.servicios.salas_de_reuniones}
                      onChange={() => { this.toggleServicios('salas_de_reuniones'); }}
                    />
                    <Input
                      type='checkbox'
                      label='Wifi'
                      checked={newCowork.servicios.wifi}
                      onChange={() => { this.toggleServicios('wifi'); }}
                    />
                  </Tab>
                  <Tab eventKey={3} title='Horarios' disabled>
                    <div>:(</div>
                  </Tab>
                  <Tab eventKey={4} title='Valores' disabled>
                    <div>:(</div>
                  </Tab>
                </Tabs>


                <hr className='col-sm-12'/>
                <div className={style['no-padding-left'] + ' col-sm-10 col-sm-offset-1'}>
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

  handleFileDrop = (files) => {
    if (files.length) {
      const { newCowork } = Object.assign({}, this.props);
      const reader = new window.FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        newCowork.images.profile = reader.result;
        this.handleChange();
      };
    }
  };

  handleTabSelect = (key) => {
    this.setState({
      currentTab: key
    });
  };

  fetchGeoCode () {
    const { newCowork } = Object.assign({}, this.props);
    this.setState({isCalculating:true});
    const { numero, calle, ciudad, comuna, pais } = newCowork.direccion;
    const completeAddress = numero + ' ' + calle + ', ' + comuna + ', ' + ciudad + ', ' + pais;
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + completeAddress)
      .then((res) => {
        if (res && res.headers.get('content-type').indexOf('application/json') !== -1) {
          res.json().then((data) => {
            if (data.results[0]) {
              const { lat, lng } = data.results[0].geometry.location;
              newCowork.direccion.geo.lat = lat;
              newCowork.direccion.geo.lng = lng;
              this.setState({isCalculating:false});
              this.handleChange();
            }
          });
        }
      });
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
  handlePais (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.pais = evt.target.value;
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

  handleDireccionLatitud (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.geo.latitud = evt.target.value;
    this.handleChange();
  }
  handleDireccionLongitud (evt) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.direccion.geo.longitud = evt.target.value;
    this.handleChange();
  }

  toggleServicios (Nombre) {
    const { newCowork } = Object.assign({}, this.props);
    newCowork.servicios[Nombre] = !newCowork.servicios[Nombre];
    this.handleChange();
  }

  handleChange () {
    const { updateCurrentCowork, newCowork } = this.props;
    updateCurrentCowork(Object.assign({}, newCowork));
  }

  saveData ({newCowork, coworkUpdating, coworkUpdated}) {
    coworkUpdating();
    Ref.child('coworks/' + newCowork.id).update(newCowork, ()=>{
      coworkUpdated();
    });
  }
}

export default connect(mapStateToProps, currentCoworksActions)(
  ProfileView
);
