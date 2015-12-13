import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as sideBarActions } from '../../../redux/modules/sideBar';
import { list } from '../../../data';
import style from './SideBarList.scss';

const mapStateToProps = (state) => {
  return {
    showSidebar : state.sideBar.showSidebar || false,
    dockSideBar : state.sideBar.dockSideBar  || false
  };
};


class SideBarList extends Component {
  static propTypes = {
    showSidebar : React.PropTypes.bool,
    dockSideBar : React.PropTypes.bool,
    toggleSideBar : React.PropTypes.func
  }
  componentDidMount () {
  }
  render () {
    const cwrks = list().map((el, i, as)=>{
      return (
        <div key={el._id}>
          <p>{el.nombre}<a href={el.url} target='_blank'><i className='fa fa-fw fa-link'></i></a></p>
        </div>
      );
    });
    return (
      <div className={style.container}>
        <h1>
          Coworks.cl
        </h1>
        {cwrks}
      </div>
    );
  }
}
// export default connect(mapStateToProps, sideBarActions)(SideBar);
export default SideBarList;
