import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import SideBarList from './SideBarList/SideBarList';
import ToggleButton from './ToggleButton/ToggleButton';
import style from './SideBar.scss';

class SideBar extends Component {
  static propTypes = {
    isShown: PropTypes.bool,
    coworks: PropTypes.any,
    isDocked: PropTypes.bool,
    toggleSideBar: PropTypes.func,
    hideSideBar: PropTypes.func,
    showSideBar: PropTypes.func
  };

  componentDidMount () {
  }
  render () {
    return (
      <Sidebar
        sidebar={<SideBarList {...this.props}/>}
        docked={this.props.isDocked}
        open={this.props.isShown}
        onSetOpen={this.onSetSidebarOpen}
        >
        <div className={style['add-sidebar-margin']}>
          <ToggleButton />
        </div>
      </Sidebar>
    );
  }
}
export default SideBar;
