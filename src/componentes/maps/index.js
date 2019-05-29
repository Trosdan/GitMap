import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

class Maps extends Component {
  componentDidMount() {}

  handleMapLongPress = ({ nativeEvent: { coordinate } }) => {
    const { showModal } = this.props;
    showModal({ coordinate });
  };

  render() {
    const { users } = this.props;
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
      >
        {users.data.map(user => (
          <Marker key={user.id} coordinate={user.coordinate}>
            <Image source={{ uri: user.avatar_url }} style={styles.annotationContainer} />
            <Callout>
              <View style={styles.colloutContainer}>
                <Text>{user.name}</Text>
                {user.bio && <Text>{user.bio}</Text>}
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
