import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../../redux/modules/sideBar';
import { list } from '../../../data';
import style from './SideBarList.scss';

const mapStateToProps = (state) => {
  return {
    coworks : state.coworks.coworks
  };
};


class SideBarList extends Component {
  static propTypes = {
    coworks: PropTypes.arrayOf(
      PropTypes.shape({
        direccion:  PropTypes.shape({
          geo: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
          })
        })
      })
    )
  }
  componentDidMount () {
  }
  render () {
    const cwrks = this.props.coworks.map((el, i, as)=>{
      return (
        <div key={el._id}>
          <p>
            <span>{el.nombre}</span>
            <a href={el.url} target='_blank'>
              <i className='fa fa-fw fa-link'></i>
            </a>
          </p>
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
export default connect(mapStateToProps, coworksActions)(SideBarList);
