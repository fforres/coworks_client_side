import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import GoogleMap from 'google-map-react';
import Pin from './Pin.js';
import style from './Pin.scss';
import styleGMap from './GMap.scss';

const mapStateToProps = (state) => {
  return {
    center: state.coworks.map.center,
    defaultCenter: state.coworks.map.defaultCenter,
    zoom: state.coworks.map.zoom,
    coworks: state.coworks.coworks,
    selectedCowork: state.coworks.selected,
    hoveredCowork: state.coworks.hovered,
    showHover: state.coworks.showHover
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
    hoveredCowork: PropTypes.string.isRequired,
    hoverEnterCowork: PropTypes.func.isRequired,
    hoverLeaveCowork: PropTypes.func.isRequired,
    selectCowork: PropTypes.func.isRequired,
    toggleHoverOverlay: PropTypes.func.isRequired
  };

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
        <Pin
          onMouseEnter={(e)=>{ this.hoveredItem(e, _id, true);  }}
          onMouseLeave={(e)=>{ this.hoveredItem(e, _id, false);  }}
          showHoverOverlay={_id === props.showHover}
          onClick={(e)=>{ this.clickedItem(e, _id);  }}
          className={theClass} lat={Element.direccion.geo.lat}
          lng={Element.direccion.geo.lng} id={_id} key={_id}>
          C
        </Pin>
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

  hoveredItem (el, id, isEnter) {
    if (isEnter) {
      this.props.hoverEnterCowork(id);
    } else {
      this.props.hoverLeaveCowork(id);
    }
  }

  clickedItem (el, id) {
    this.props.selectCowork(id);
    this.props.toggleHoverOverlay(id);
  }

}
export default connect(mapStateToProps, coworksActions)(GMap);
