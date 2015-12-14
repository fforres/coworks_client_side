import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../redux/modules/coworks';
import style from './Pin.scss';


const mapStateToProps = (state) => {
  return {
    selectedCowork: state.coworks.selected,
    hoveredCowork: state.coworks.hovered
  };
};

class MyPin extends Component {
  static propTypes = {
    text: PropTypes.any.isRequired,
    identificator: PropTypes.any.isRequired,
    selectedCowork: PropTypes.number.isRequired,
    hoveredCowork: PropTypes.number.isRequired
  };

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const theClass = (() => {
      const str = [style.pin];
      return str.join(' ');
    })();
    return (
      <div className={theClass} >
         {this.props.text}
      </div>
    );
  }
}

export default connect(mapStateToProps, coworksActions)(MyPin);
