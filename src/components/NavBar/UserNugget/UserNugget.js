import React, { Component, PropTypes } from 'react';
import { actions as accountActions } from '../../../redux/modules/account';
import { Dropdown, Image } from 'react-bootstrap';
import { actions as coworksActions } from '../../../redux/modules/coworks';
import CustomMenu from './CustomMenu.js';
import style from './UserNugget.scss';

const preventDefault = (e) => {
  e.preventDefault();
};

class UserNugget extends Component {
  static propTypes = {
    provider : PropTypes.string,
    profileImageURL : PropTypes.string,
    displayName : PropTypes.string
  }

  render () {
    return (
      <Dropdown id='dropdown-custom-menu'>
        <a href='#' bsRole='toggle' onClick={preventDefault} className={style.image}>
          <Image src={this.props[this.props.provider].profileImageURL} responsive circle/>
        </a>
        <CustomMenu bsRole='menu' {...this.props}/>
      </Dropdown>
    );
  }
}
export default UserNugget;
