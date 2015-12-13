import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import Pin from './Pin.js';
class GMap extends Component {
  static propTypes = {
    center: PropTypes.object,
    zoom: PropTypes.number,
    onCenterChange: PropTypes.func,
    greatPlaceCoords: PropTypes.object
  }

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos);
        this.props.center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
      });
    }
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        onBoundsChange={this._onBoundsChange}
        onChildClick={this._onChildClick}
        defaultZoom={this.props.zoom}>
        <Pin lat={59.955413} lng={30.337844} text={'1'} /* Kreyser Avrora */ />
        <Pin {...this.props.greatPlaceCoords} text={'2'} /* road circle */ />
      </GoogleMap>
    );
  }

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    // this.props.onZoomChange(zoom);
  }

  _onChildClick = (key, childProps) => {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  }
}

export default GMap;
