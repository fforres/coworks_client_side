import React from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';
import { list } from '../../data';
const mapStateToProps = (state) => {
  return {
    showSidebar : state.sideBar.showSidebar || false,
    dockSideBar : state.sideBar.dockSideBar  || false
  };
};

class SideBar extends React.Component {
  static propTypes = {
    showSidebar : React.PropTypes.bool,
    dockSideBar : React.PropTypes.bool,
    toggleSideBar : React.PropTypes.func
  }

  componentDidMount () {
    console.log(list());
  }
  render () {
    const sidebarContent = <p>Sidebar content </p>;
    return (
      <Sidebar sidebar={sidebarContent}
               docked={this.props.dockSideBar}
               onSetOpen={this.onSetSidebarOpen}>
               <h1 onClick={this.props.toggleSideBar}>WE ARE DOING</h1>
      </Sidebar>
    );
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
