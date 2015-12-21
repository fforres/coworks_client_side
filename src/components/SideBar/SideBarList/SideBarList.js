import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from '../../../redux/modules/coworks';
import style from './SideBarList.scss';
import ToggleButton from '../ToggleButton/ToggleButton';
import firebaseComponent from '../../../utils/firebase/firebaseComponent.js';


const mapStateToProps = (state) => {
  return {
    coworks : state.coworks.coworks,
    selected : state.coworks.selected,
    hovered : state.coworks.hovered
  };
};

const mapFireBaseEventsToStore = () => {
  return [{
    address : 'coworks',
    type : 'value',
    action : coworksActions.addCowork().type
  }];
};

class SideBarList extends Component {
  static propTypes = {
    coworks: PropTypes.any,
    selected : PropTypes.string.isRequired,
    hovered : PropTypes.string.isRequired,
    hoverEnterCowork:PropTypes.func,
    hoverLeaveCowork:PropTypes.func,
    selectCowork:PropTypes.func,
    updateMapCenter:PropTypes.func
  }
  componentDidMount () {
  }
  render () {
    const cwrks = Object.keys(this.props.coworks).map((el, i, as)=>{
      const _id = el;
      const Element = this.props.coworks[el];
      // Play with classes to show who is selected or hovered
      const theClass = (()=>{
        const str = [style.item];
        if (this.props.selected === _id) {
          str.push(style['item--selected']);
        }
        if (this.props.hovered === _id) {
          str.push(style['item--hovered']);
        }
        return str.join(' ');
      })();
      return (
        <div
          key={_id}
          className={theClass}
          onMouseEnter={()=>{
            this.hoveredItem(this, _id, true);
          }}
          onMouseLeave={()=>{
            this.hoveredItem(this, _id, false);
          }}
          onClick={()=>{
            this.clickedItem(this, _id);
            this.centerMap(this, el);
          }}
          >
            <div className={style['item-header']}>
              <span className={style['item-text']}>{Element.nombre}</span>
              <div className={style['item-link']}>
                <a href={Element.url} className={style['item-link-action']} target='_blank' >
                  <i className='fa fa-fw fa-link'></i>
                </a>
              </div>
            </div>
            <div className={style['item-body']}>
              <div className={style['item-body-element']}>
                <div>Teléfono:</div>
                <a href={'tel:' + Element.telefono}>
                  <i className='fa fa-fw fa-mobile'></i>
                  <span>{Element.telefono}</span>
                </a>
              </div>

              <div className={style['item-body-element']}>
                <div>Direccion:</div>
                <div>
                  <i className='fa fa-fw fa-map'></i>
                  <span className={style['item-body-element-direccion']}>
                    <span>
                      {Element.direccion.calle}
                    </span>
                    <span>
                      {' ' + Element.direccion.numero}
                    </span>
                  </span>
                </div>
              </div>

            </div>
        </div>
      );
      // Binding this, para acceder al contexto componente de react dentro del map
    }, this);
    return (
        <div className={style.container}>
          <div className={style.title}>
            <div className={style.text}>
              Coworks.cl
            </div>
            <div className={style.button}>
              <ToggleButton pullRight/>
            </div>
          </div>
          <div className={style['list-wrapper']}>
            <div className={style.list}>
              {cwrks}
            </div>
          </div>
        </div>
    );
  }

  clickedItem (el, id) {
    this.props.selectCowork(id);
  }
  centerMap (el, cwrk) {
    this.props.updateMapCenter(this.props.coworks[cwrk].direccion.geo);
  }
  hoveredItem (el, id, isEnter) {
    if (isEnter) {
      this.props.hoverEnterCowork(id);
    } else {
      this.props.hoverLeaveCowork(id);
    }
  }
}
export default connect(mapStateToProps, coworksActions)(firebaseComponent(mapFireBaseEventsToStore, SideBarList));
