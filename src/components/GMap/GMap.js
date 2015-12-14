import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../redux/modules/coworks';
import GoogleMap from 'google-map-react';
import style from './Pin.scss';
import styleGMap from './GMap.scss';

const mapStateToProps = (state) => {
  return {
    center: state.coworks.map.center,
    zoom: state.coworks.map.zoom,
    coworks : state.coworks.coworks,
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
    requestCoworks: PropTypes.func,
    selectedCowork: PropTypes.number.isRequired,
    hoveredCowork: PropTypes.number.isRequired
  };

  constructor (props) {
    super(props);
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
      const theClass = (() => {
        const str = [style.pin];
        if (el._id === this.props.hoveredCowork) {
          str.push([style['pin-hover']]);
        }
        if (el._id === this.props.selectedCowork) {
          str.push([style['pin-selected']]);
        }
        return str.join(' ');
      })();


      return (
        <div className={theClass} lat={el.direccion.geo.lat} lng={el.direccion.geo.lng}  id={el._id} key={el._id}>
           {el._id}
        </div>
      );
    });
    return (
      <div className={styleGMap.map}>
        <GoogleMap
          defaultCenter={this.props.center}
          onChildClick={this._onChildClick}
          defaultZoom={this.props.zoom}>
          {allPins}
        </GoogleMap>
      </div>
    );
  }

}
export default connect(mapStateToProps, coworksActions)(GMap);
