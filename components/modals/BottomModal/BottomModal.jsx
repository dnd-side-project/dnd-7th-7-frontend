import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import * as S from './BottomModal.style';

const BottomModal = () => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <S.Wrapper>
      <Button title="show" onPress={open} />
      <Modal isVisible={visible} backdropOpacity={0}>
        <S.ModalWrapper>
          <Text>Test Modal</Text>
          <Button title="close" onPress={close} />
        </S.ModalWrapper>
      </Modal>
    </S.Wrapper>
  );
};

export default BottomModal;
