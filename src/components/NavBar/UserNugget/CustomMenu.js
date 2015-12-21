import React, { PropTypes, Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import style from './CustomMenu.scss';

class DropDown extends Component {
  static propTypes = {
    children : PropTypes.any,
    provider : PropTypes.string,
    profileImageURL : PropTypes.string,
    displayName : PropTypes.string
  }


  constructor (...args) {
    super(...args);
    this.state = { value: '' };
    this.onChange = e => this.setState({ value: e.target.value });
  }

  render () {
    const { ...props } = this.props;

    return (
      <div
        className={style.list_container + ' dropdown-menu'}
      >
        <ul className={style.list_style} >
          <div className={style.saludo}>
            <span>Bienvenido </span>
            <span>{this.props[this.props.provider].displayName.split(' ')[0]}!</span>
          </div>
          <MenuItem eventKey='1'>We</MenuItem>
          <MenuItem eventKey='2'>Are</MenuItem>
          <MenuItem eventKey='3' active>Options</MenuItem>
          <MenuItem eventKey='1'>To Choose</MenuItem>
        </ul>
      </div>
    );
  }
}
export default DropDown;
