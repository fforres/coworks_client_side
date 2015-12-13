import React from 'react';
import Sidebar from 'react-sidebar';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';
import { list } from '../../data';
import SideBarList from './SideBarList/SideBarList';
import style from './SideBar.scss';
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
