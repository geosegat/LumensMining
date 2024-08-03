import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import Modal from 'react-native-modal';
import AppText from '../AppText';
import auth from '@react-native-firebase/auth';

interface CardModalSettingProps {
  isVisible?: boolean;
  toggleModal?: () => void;
  onPress?: () => void;
}

const CardModalSetting: React.FC<CardModalSettingProps> = ({
  isVisible,
  toggleModal,
  onPress,
}) => {
  const user = auth().currentUser;

  // Animation for sliding the modal in and out
  const modalPosition = useRef(
    new Animated.Value(Dimensions.get('window').width),
  ).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.spring(modalPosition, {
        toValue: 0,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(modalPosition, {
        toValue: Dimensions.get('window').width,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const onPressTeste = () => {
    if (user) {
      console.log('Usuário logado:', user);
      // Acesse propriedades do usuário como:
      // user.uid, user.email, user.displayName, etc.
    } else {
      console.log('Nenhum usuário logado.');
    }
  };

  const modalStyles = {
    transform: [
      {
        translateX: modalPosition,
      },
    ],
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor="black"
      backdropOpacity={0.5}
      onBackdropPress={toggleModal}
      style={styles.modal}>
      <Animated.View style={[styles.modalContent, modalStyles]}>
        {/* <AppText size="huge" style={styles.modalTitle} color="#fff">
          Configurações
        </AppText> */}
        <TouchableOpacity style={styles.button} onPress={onPressTeste}>
          <AppText size="large" color="#fff">
            Verificar Usuário
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressTeste}>
          <AppText size="large" color="#fff">
            Carteira
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressTeste}>
          <AppText size="large" color="#fff">
            Trocar
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressTeste}>
          <AppText size="large" color="#fff">
            Perfil
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <AppText size="large" color="#fff">
            Sair
          </AppText>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};

export default CardModalSetting;

const styles = StyleSheet.create({
  modal: {
    marginTop: 62,
    justifyContent: 'flex-start', // Aligns the modal to the top
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    right: 0, // Align the modal to the right edge
  },
  modalTitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
});
