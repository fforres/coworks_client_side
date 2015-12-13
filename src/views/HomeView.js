import React from 'react';
import { connect } from 'react-redux';
import { GMap, SideBar } from '../components';
import { actions as counterActions } from '../redux/modules/counter';
import styles from './HomeView.scss';

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({});
export class HomeView extends React.Component {
  static propTypes = {
    toggleSideBar : React.PropTypes.func
  }

  render () {
    return (
      <div className={styles.fullscreen} >
        <SideBar/>
        <GMap/>
        <button className='btn btn-default'
                onClick={this.props.toggleSideBar}>
          Increment
        </button>

      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(HomeView);
