import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UsersActions } from '~/store/ducks/users';

import {
  View,
  Modal as ModalView,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

class Modal extends Component {
  state = {
    userInfo: '',
  };

  static propTypes = {};

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  handleSave = () => {
    const { userInfo } = this.state;
    const { userAddRequest, modal } = this.props;
    userAddRequest(userInfo, modal.coordinate);
  };

  changeValue = (text) => {
    this.setState({ userInfo: text });
  };

  render() {
    const { modal } = this.props;
    const { users } = this.props;
    const { userInfo } = this.state;
    return (
      <ModalView
        animationType="slide"
        transparent
        visible={modal.modalVisible}
        onRequestClose={this.handleHideModal}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Adicionar um novo local</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Usuário no Github"
              onChangeText={this.changeValue}
              value={userInfo}
            />
            <View style={styles.buttonsView}>
              <TouchableHighlight
                onPress={this.handleHideModal}
                style={[styles.button, styles.buttonCancel]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleSave}
                style={[styles.button, styles.buttonSave]}
              >
                {users.loading ? (
                  <ActivityIndicator color={colors.white} />
                ) : (
                  <Text style={styles.buttonText}>Salvar</Text>
                )}
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ModalView>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
