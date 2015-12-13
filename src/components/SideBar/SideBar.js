import React from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { actions as sidebarActions } from '../../redux/modules/counter';

const mapStateToProps = (state) => {
  return {
    showSidebar : state.showSidebar || false,
    sidebarDocked : state.sidebarDocked  || false
  };
};

class SideBar extends React.Component {
  static propTypes = {
    showSidebar : React.PropTypes.bool,
    sidebarDocked : React.PropTypes.bool,
    toggleSideBar : React.PropTypes.func
  }

  componentDidMount () {
  }
  render () {
    const sidebarContent = <p>Sidebar content </p>;
    console.log(this);
    return (
      <Sidebar sidebar={sidebarContent}
               open={this.props.showSidebar}
               docked={this.props.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               <h1 onClick={this.props.toggleSideBar}>WE ARE DOING</h1>
      </Sidebar>
    );
  }
}
export default connect(mapStateToProps, sidebarActions)(SideBar);
