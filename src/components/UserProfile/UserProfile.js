import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';

const mapStateToProps = (state) => {
  return {
    image: state.account.userData[state.account.userData.provider].profileImageURL,
    displayName: state.account.userData[state.account.userData.provider].displayName
  };
};

class SideBar extends Component {
  static propTypes = {
    image: PropTypes.string,
    displayName: PropTypes.string
  };

  componentDidMount () {
  }
  render () {
    return (
      <div className=''>
        <hr/>
        <center>
          <img
            src={this.props.image}
            name='aboutme' width='140' height='140' border='0' className='img-circle'/>
          <h3 className=''> {this.props.displayName}</h3>
        </center>
        <hr/>
      </div>
    );
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
