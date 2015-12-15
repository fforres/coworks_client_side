import React, { Component, PropTypes } from 'react';
import { Dropdown, Button, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../../redux/modules/sideBar';
import style from './ToggleButtonStyle.scss';
const mapStateToProps = (state) => {
  return {
    isShown : state.sideBar.isShown,
    isDocked : state.sideBar.isDocked
  };
};

class SideBar extends Component {
  static propTypes = {
    isShown : PropTypes.bool,
    pullRight: PropTypes.bool,
    isDocked : PropTypes.bool,
    toggleShow : PropTypes.func,
    showShow: PropTypes.func,
    hideShow: PropTypes.func
  }

  componentDidMount () {
  }
  render () {
    if (this.props.pullRight) {
      return (
         <Dropdown id='search-button'  bsSize='large' className={style['main-button']} pullRight>
           <Button bsStyle='info' onClick={this.props.toggleShow}>
             <i className='fa fa-fw fa-search'></i>
           </Button>
           <Dropdown.Toggle bsStyle='info' />
           <Dropdown.Menu className={style.show + ' super-colors'}>
             <MenuItem eventKey='1' onClick={this.props.showShow}>Show</MenuItem>
             <MenuItem eventKey='2' onClick={this.props.hideShow}>Hide</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey='4'>DoNothing</MenuItem>
           </Dropdown.Menu>
         </Dropdown>
      );
    } else {
      return (
         <Dropdown id='search-button'  bsSize='large' className={style['main-button']}>
           <Button bsStyle='info' onClick={this.props.toggleShow}>
             <i className='fa fa-fw fa-search'></i>
           </Button>
           <Dropdown.Toggle bsStyle='info' />
           <Dropdown.Menu className={style.show + ' super-colors'}>
             <MenuItem eventKey='1' onClick={this.props.showShow}>Show</MenuItem>
             <MenuItem eventKey='2' onClick={this.props.hideShow}>Hide</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey='4'>DoNothing</MenuItem>
           </Dropdown.Menu>
         </Dropdown>
      );
    }
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
