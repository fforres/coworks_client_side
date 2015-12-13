import React from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/counter';

const mapStateToProps = (state) => ({
  showSidebar : state.showSidebar,
  sidebarDocked : state.sidebarDocked
});

class SideBar extends React.Component {
  static propTypes = {
    showSidebar : React.PropTypes.bool,
    sidebarDocked : React.PropTypes.bool
  }

  componentDidMount () {
    console.log(this);
  }
  render () {
    const sidebarContent = <b>Sidebar content </b>;
    console.log(this.props);
    return (
      <Sidebar sidebar={sidebarContent}
               open={this.props.showSidebar}
               docked={this.props.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               <b>Main content</b>
      </Sidebar>
    );
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
