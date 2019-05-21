import React, { Component } from 'react';

import { View } from 'react-native';

import Maps from '~/componentes/maps';
import Modal from '~/componentes/modal';

// import { Container } from './styles';

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Maps />
        <Modal />
      </View>
    );
  }
}

export default Main;
