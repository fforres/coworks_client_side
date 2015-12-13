import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';
import { actions as coworksActions } from '../../redux/modules/coworks';
import { list } from '../../data';
import SideBarList from './SideBarList/SideBarList';
import style from './SideBar.scss';
const mapStateToProps = (state) => {
  return {
    showSidebar : state.sideBar.showSidebar,
    dockSideBar : state.sideBar.dockSideBar
  };
};

class SideBar extends Component {
  static propTypes = {
    showSidebar : PropTypes.bool,
    dockSideBar : PropTypes.bool,
    toggleSideBar : PropTypes.func
  }

  componentDidMount () {
  }
  render () {
    return (
      <Sidebar sidebar={<SideBarList/>}
               docked={this.props.dockSideBar}
               onSetOpen={this.onSetSidebarOpen} >
       <Dropdown id='search-button'  bsSize='large' className={style['main-button']}>
         <Button bsStyle='info' onClick={this.props.toggleSideBar}>
           <i className='fa fa-fw fa-search'></i>
         </Button>
         <Dropdown.Toggle bsStyle='info'/>
         <Dropdown.Menu className={style.show + ' super-colors'}>
           <MenuItem eventKey='1'>Action</MenuItem>
           <MenuItem eventKey='2'>Another action</MenuItem>
           <MenuItem eventKey='3'>Active Item</MenuItem>
           <MenuItem divider />
           <MenuItem eventKey='4'>Separated link</MenuItem>
         </Dropdown.Menu>
       </Dropdown>
      </Sidebar>
    );
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
