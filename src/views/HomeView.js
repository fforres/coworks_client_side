import React from 'react';
import { connect } from 'react-redux';
import { GMap, SideBar } from '../components';
import { actions as coworksActions } from '../redux/modules/coworks';
import styles from './HomeView.scss';
import { NavBar } from '../components';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
});
export class HomeView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number,
    requestCoworks: React.PropTypes.func
  }

  componentWillMount () {
    // this.props.requestCoworks();
  }
  render () {
    return (
      <div className={styles.fullscreen} >
        <NavBar/>
        <div className={styles['container-with-navbar']}>
          <SideBar/>
          <GMap/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, coworksActions)(HomeView);
