import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import { Font } from '@components/commons';
import { styles } from './AlertModal.style';
import { globals } from '../../../../styles/globals';

const AlertModal = ({ isVisible, clickOutside, title, onPressYes, onPressNo }) => {
  return (
    <Modal
      style={styles.container}
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackdropPress={() => clickOutside(false)}
    >
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Font>{title}</Font>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.yes} onPress={onPressYes}>
            <Font>네</Font>
          </Pressable>
          <Pressable style={styles.no} onPress={onPressNo}>
            <Font color={globals.colors.PRIMARY_DARK}>아니오</Font>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
