import React from 'react';
import Sidebar from 'react-sidebar';

const SideBar = React.createClass({
  getInitialState () {
    return {
      sidebarOpen: false,
      sidebarDocked: false
    };
  },

  componentWillMount: () => {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  },

  componentWillUnmount: () => {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  onSetSidebarOpen: (open) =>{
    this.setState({sidebarOpen: this.state.mql.matches});
  },

  render: () => {
    const sidebarContent = <b>Sidebar content </b>;
    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               <b>Main content</b>
        <b>Main content</b>
      </Sidebar>
    );
  },

  mediaQueryChanged: () => {
    this.setState({sidebarDocked: this.state.mql.matches});
  }
});
export default SideBar;
