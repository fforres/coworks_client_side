import React, { Component, PropTypes } from 'react';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../redux/modules/sideBar';

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
  }

  componentDidMount () {
  }
  render () {
    return (
      <div className=''>
          <center>
            <img
              src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R'
              name='aboutme' width='140' height='140' border='0' className='img-circle'/>
            <h3 className='media-heading'>Joe Sixpack <small>USA</small></h3>
            <span><strong>Skills: </strong></span>
              <span className='label label-warning'>HTML5/CSS</span>
              <span className='label label-info'>Adobe CS 5.5</span>
              <span className='label label-info'>Microsoft Office</span>
              <span className='label label-success'>Windows XP, Vista, 7</span>
          </center>
          <hr/>
          <center>
            <p className='text-left'>
              <strong>Bio: </strong>
              <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a, vulputate vel tellus.
            </p>
            <br/>
          </center>
      </div>
    );
  }
}
export default connect(mapStateToProps, sideBarActions)(SideBar);
