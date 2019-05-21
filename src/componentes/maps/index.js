import React, { Component } from 'react';

import MapView from 'react-native-maps';

import {
  View, Text, Modal, TouchableHighlight,
} from 'react-native';

// import { Container } from './styles';

class Maps extends Component {
  componentDidMount() {}

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

export default Maps;
