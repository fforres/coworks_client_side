import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import GoogleMap from 'google-map-react';
import style from './Pin.scss';
import styleGMap from './GMap.scss';

const mapStateToProps = (state) => {
  return {
    center: state.coworks.map.center,
    defaultCenter: state.coworks.map.defaultCenter,
    zoom: state.coworks.map.zoom,
    coworks: state.coworks.coworks,
    selectedCowork: state.coworks.selected,
    hoveredCowork: state.coworks.hovered
  };
};

class GMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
    defaultCenter: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
    zoom: PropTypes.number,
    coworks: PropTypes.any,
    requestCoworks: PropTypes.func,
    updateMapCenter: PropTypes.func,
    selectedCowork: PropTypes.string.isRequired,
    hoveredCowork: PropTypes.string.isRequired
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
          defaultCenter={props.defaultCenter}
          onChildClick={this._onChildClick}
          defaultZoom={props.zoom}
          center={props.center}
          >
          {allPins}
        </GoogleMap>
      </div>
    );
  }

}
export default connect(mapStateToProps, coworksActions)(GMap);
