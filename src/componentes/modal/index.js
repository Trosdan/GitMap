import React, { Component } from 'react';

import {
  View, Modal, Text, TouchableHighlight,
} from 'react-native';

// import { Container } from './styles';

export default class modal extends Component {
  render() {
    const modalVisible = false;
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
