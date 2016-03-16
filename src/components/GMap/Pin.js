import React, { Component, PropTypes } from 'react';
import style from './Pin.scss';

export default class MyPin extends Component {
  static propTypes = {
    showHoverOverlay: PropTypes.bool.isRequired,
    className: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    id: PropTypes.string,
    key: PropTypes.string,
    children: PropTypes.any
  };

  constructor (props) {
    super(props);
  }

  render () {
    let hoverDiv = null;
    if (this.props.showHoverOverlay) {
      hoverDiv = (
        <div style={{width: 80}} className={style['pin-hover-overlay']}>
          Сlick me
        </div>
      );
    }
    return (
      <div {...this.props}>
         {this.props.children}
         <hoverDiv/>
      </div>
    );
  }

  hoveringPin (e) {
    console.log(e);
  }
}
