import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import Pin from './Pin.js';
class GMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
    zoom: PropTypes.number,
    coworks: React.PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      })
    )
  };

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    coworks: [{lat: 59.724465, lng: 30.080121}, {lat: 59.955413, lng: 30.337844}]
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        const center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
      });
    }
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const allPins = this.props.coworks.map((el, i, as)=>{
      return <Pin lat={el.lat} lng={el.lng} text={i} key={i}/>;
    });
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        onBoundsChange={this._onBoundsChange}
        onChildClick={this._onChildClick}
        defaultZoom={this.props.zoom}>
        {allPins}
      </GoogleMap>
    );
  }

}

export default GMap;
