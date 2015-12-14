import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';
import { list } from '../../data';
import SideBarList from './SideBarList/SideBarList';
import style from './SideBar.scss';
const mapStateToProps = (state) => {
  return {
    isShown : state.sideBar.isShown,
    isDocked : state.sideBar.isDocked
  };
};

class SideBar extends Component {
  static propTypes = {
    isShown : PropTypes.bool,
    isDocked : PropTypes.bool,
    toggleSideBar : PropTypes.func,
    hideSideBar : PropTypes.func,
    showSideBar : PropTypes.func
  }

  componentDidMount () {
  }
  render () {
    return (
      <Sidebar sidebar={<SideBarList/>}
               docked={this.props.isDocked}
               open={this.props.isShown}
               onSetOpen={this.onSetSidebarOpen} >
       <Dropdown id='search-button'  bsSize='large' className={style['main-button']}>
         <Button bsStyle='info' onClick={this.props.toggleSideBar}>
           <i className='fa fa-fw fa-search'></i>
         </Button>
         <Dropdown.Toggle bsStyle='info'/>
         <Dropdown.Menu className={style.show + ' super-colors'}>
           <MenuItem eventKey='1' onClick={this.props.showSideBar}>Action</MenuItem>
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
