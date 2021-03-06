import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as coworksActions } from 'redux/modules/coworks/coworks';
import { CoworkCards } from 'components';
import { fireBaseComponent, fireBaseMap } from 'utils/firebase/firebaseComponent.js';
import { Loading, Error404 } from 'components';

const mapStateToProps = (state) => {
  return {
    myCoworks: state.coworks.myCoworks,
    uid: state.account.userData.uid
  };
};
const mapFireBaseEventsToStore = () => {
  return [];
};
export class HomeView extends Component {
  static propTypes = {
    myCoworks: PropTypes.any,
    uid: PropTypes.string,
    unsetMyCoworks: PropTypes.func
  };

  componentWillMount () {
    fireBaseMap({
      address: 'coworks',
      orderByChild: 'creator',
      equalTo: this.props.uid,
      type: 'value',
      action: coworksActions.setMyCoworks()
    });
  }

  componentWillUnmount () {
    this.props.unsetMyCoworks();
  }

  render () {
    const { myCoworks } = this.props;
    const coworkCards = () => {
      return Object.keys(myCoworks).map((el) => {
        return (<CoworkCards cowork={myCoworks[el]} key={el}/>);
      });
    };

    if (myCoworks === null || !myCoworks) {
      return (
        <Loading />
      );
    }
    if (myCoworks !== 'notExistent') {
      return (
        <div className='container'>
          <div className='row'>
            {coworkCards()}
          </div>
        </div>
      );
    }
    return (
      <Error404 />
    );
  }
}

export default connect(mapStateToProps, coworksActions)(
  fireBaseComponent(mapFireBaseEventsToStore, HomeView)
);
