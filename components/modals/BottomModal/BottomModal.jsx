import React, { useState } from 'react';
import { Button, Text, View, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './BottomModal.style';

const BottomModal = ({ visible, open, close, bgOpacity, children, ...props }) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={bgOpacity}
      style={styles.container}
      swipeDirection="down"
      onSwipeComplete={close}
      propagateSwipe={true}
      hasBackdrop={false}
    >
      <View style={styles.wrapper}>
        <ScrollView style={styles.scroller} stickyHeaderIndices={[0]}>
          <View style={styles.handle}></View>
          <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default BottomModal;
