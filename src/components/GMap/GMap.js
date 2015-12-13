import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import Pin from './Pin.js';
import styles from './GMap.scss';
class GMap extends Component {
  static propTypes = {
    center: React.PropTypes.object,
    zoom: React.PropTypes.number,
    greatPlaceCoords: React.PropTypes.object
  }

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <Pin lat={59.955413} lng={30.337844} text={'1'} /* Kreyser Avrora */ />
        <Pin {...this.props.greatPlaceCoords} text={'2'} /* road circle */ />
      </GoogleMap>
    );
  }
}

export default GMap;
