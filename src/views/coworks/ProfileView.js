import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/currentCowork';
import styles from './ProfileView.scss';
import { CoworkProfile, CoworkProfileEditable } from 'components';
import { fireBaseComponent, fireBaseMap } from 'utils/firebase/firebaseComponent.js';
import { Loading, Error404 } from 'components';

const mapStateToProps = (state) => {
  return {
    current: state.currentCowork.current,
    updated: state.currentCowork.updated,
    userId: state.account.userData.uid
  };
};
const mapFireBaseEventsToStore = (props) => {
  return [];
};

class HomeView extends Component {
  static propTypes = {
    params: PropTypes.shape({
      name: PropTypes.string
    }),
    current: PropTypes.any,
    updated: PropTypes.any,
    userId: PropTypes.string
  };
  componentDidMount () {
    fireBaseMap({
      address: 'coworks',
      orderByChild: 'nombre',
      equalTo: this.props.params.name,
      type: 'value',
      action: coworksActions.setCurrentCowork()
    });
  }
  render () {
    const { current, updated } = this.props;
    if (current === null || !current || current.nombre !== this.props.params.name) {
      return (
        <Loading />
      );
    } else {
      if (current) {
        if (current.creator === this.props.userId) {
          return (<CoworkProfileEditable />);
        } else {
          return (<CoworkProfile cowork={current} />);
        }
      }
      return (
        <Error404 />
      );
    }
  }
}

export default connect(mapStateToProps, coworksActions)(
fireBaseComponent(mapFireBaseEventsToStore, HomeView)
);
