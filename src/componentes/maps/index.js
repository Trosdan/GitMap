import React, { Component } from 'react';

import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

class Maps extends Component {
  componentDidMount() {}

  handleMapLongPress = ({ nativeEvent: { coordinate } }) => {
    const { showModal } = this.props;
    showModal({ coordinate });
  };

  render() {
    return (
      <MapView
        onLongPress={this.handleMapLongPress}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -27.2177659,
          longitude: -49.6451598,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
