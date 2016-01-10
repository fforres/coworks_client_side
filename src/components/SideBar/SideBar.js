import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';
import SideBarList from './SideBarList/SideBarList';
import ToggleButton from './ToggleButton/ToggleButton';
import style from './SideBar.scss';

const mapStateToProps = (state) => {
  return {
    isShown: state.sideBar.isShown,
    isDocked: state.sideBar.isDocked
  };
};

class SideBar extends Component {
  static propTypes = {
    isShown: PropTypes.bool,
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
        sidebar={<SideBarList/>}
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
export default connect(mapStateToProps, sideBarActions)(SideBar);
