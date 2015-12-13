import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../redux/modules/coworks';
import Pin from './Pin.js';

const mapStateToProps = (state) => {
  return {
    center: state.coworks.map.center,
    zoom: state.coworks.map.zoom,
    coworks : state.coworks.coworks
  };
};

class GMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
    zoom: PropTypes.number,
    coworks: PropTypes.arrayOf(
      PropTypes.shape({
        direccion:  PropTypes.shape({
          geo: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
          })
        })
      })
    ),
    requestCoworks: PropTypes.func
  };

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.requestCoworks();
  }

  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        const center = {
          lat: pos.coords.lat,
          lng: pos.coords.lng
        };
      });
    }
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const allPins = this.props.coworks.map((el, i, as)=>{
      return <Pin lat={el.direccion.geo.lat} lng={el.direccion.geo.lng} text={i} key={el._id}/>;
    });
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        onChildClick={this._onChildClick}
        defaultZoom={this.props.zoom}>
        {allPins}
      </GoogleMap>
    );
  }

}
export default connect(mapStateToProps, coworksActions)(GMap);
