import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GMap, SideBar } from '../components';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import styles from './HomeView.scss';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => {
  return {
    cowork: state.coworks,
    sidebar: state.sideBar
  };
};
class HomeView extends Component {
  static propTypes = {
    sidebar: PropTypes.object,
    cowork: PropTypes.object,
    hoverEnterCowork: PropTypes.func,
    hoverLeaveCowork: PropTypes.func,
    selectCowork: PropTypes.func,
    updateMapCenter: PropTypes.func
  };

  componentWillMount () {
    // this.props.requestCoworks();
  }
  render () {
    return (
      <div className={styles.fullscreen} >
          <SideBar {...this.props} {...this.props.cowork} {...this.props.sidebar} />
          <GMap {...this.props.cowork} {...coworksActions}/>
      </div>
    );
  }
}
export { HomeView };
export default connect(mapStateToProps, coworksActions)(HomeView);
