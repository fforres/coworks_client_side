import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { MenuItem } from 'react-bootstrap';
import style from './CustomMenu.scss';
import { actions as accountActions } from 'redux/modules/account/account';
import { Ref } from 'utils/firebase/firebaseComponent';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.account.loggedIn,
    isModalShown: state.account.isModalShown,
    userData: state.account.userData
  };
};

class DropDown extends Component {
  static propTypes = {
    children: PropTypes.any,
    provider: PropTypes.string,
    profileImageURL: PropTypes.string,
    displayName: PropTypes.string,
    logOut: PropTypes.func
  };

  constructor (...args) {
    super(...args);
    this.state = { value: '' };
    this.onChange = e => this.setState({ value: e.target.value });
  }

  render () {
    const { ...props } = this.props;
    const displayName = (prov) => {
      if (prov.displayName) {
        return prov.displayName.split(' ')[0];
      }
      return '';
    };
    return (
      <div className={style.list_container + ' dropdown-menu'}>
        <ul className={style.list_style} >
          <div className={style.saludo}>
            <span>Bienvenido {displayName(this.props[this.props.provider])}!</span>
            <span></span>
          </div>
          <li role='presentation' className='' >
            <Link to='/profile' tabIndex='-1' >Mi Perfil</Link>
          </li>
          <li role='presentation' className='' >
            <Link to='/coworks' tabIndex='-1' >Mis Lugares</Link>
          </li>
          <MenuItem eventKey='3' active>Options</MenuItem>
          <MenuItem eventKey='1'>To Choose</MenuItem>
          <MenuItem className={style.logOut} eventKey='1 ' onClick={()=>{this.logOut();}} >
            <div className={style.logout_icon}>
              <span>Log Out</span>
              <span><i className='fa fa-fw fa-sign-out'/></span>
            </div>
          </MenuItem>
        </ul>
      </div>
    );
  }

  logOut () {
    Ref.unauth();
    this.props.logOut();
  }
}
export default DropDown;
export default connect(mapStateToProps, accountActions)(DropDown);
