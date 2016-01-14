import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import style from './Pin.scss';
import styleGMap from './GMap.scss';

class GMap extends Component {
  static propTypes = {
    map: PropTypes.shape({
      center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }),
      defaultCenter: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired
    }),
    zoom: PropTypes.number,
    coworks: PropTypes.any,
    requestCoworks: PropTypes.func.isRequired,
    updateMapCenter: PropTypes.func.isRequired,
    selected: PropTypes.string,
    hovered: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // props.updateMapCenter();
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const { props } = this;
    const allPins = Object.keys(props.coworks).map((el) => {
      const _id = el;
      const Element = props.coworks[el];
      const theClass = (() => {
        const str = [style.pin];
        if (_id === props.hoveredCowork) {
          str.push([style['pin-hover']]);
        }
        if (_id === props.selectedCowork) {
          str.push([style['pin-selected']]);
        }
        return str.join(' ');
      })();
      return (
        <div className={theClass} lat={Element.direccion.geo.lat} lng={Element.direccion.geo.lng} id={_id} key={_id}>
           C
        </div>
      );
    });
    return (
      <div className={styleGMap.map}>
        <GoogleMap
          defaultCenter={props.map.defaultCenter}
          defaultZoom={props.map.zoom}
          center={props.map.center}
        >
          {allPins}
        </GoogleMap>
      </div>
    );
  }

}
export default GMap;
