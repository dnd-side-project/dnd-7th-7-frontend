import React, { useState } from 'react';
import { Button, Text, View, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import * as S from './BottomModal.style';

const BottomModal = ({ visible, open, close, bgOpacity, children }) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={bgOpacity}
      style={styles.container}
      swipeDirection="down"
      onSwipeComplete={close}
      propagateSwipe={true}
    >
      <View style={styles.wrapper}>
        <ScrollView style={styles.scroller}>
          <TouchableWithoutFeedback>
            <View>
              <View style={styles.handle} />
              {children}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scroller: {
    height: 311,
  },
  handle: {
    height: 0,
    width: 32,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 1.5,
    borderWidth: 3,
    borderColor: '#DBDBDB',
  },
});

export default BottomModal;
