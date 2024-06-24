import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import * as Progress from 'react-native-progress';

const CardMining = () => {
  const [teste, setTeste] = useState('');
  const [progress, setProgress] = useState(0);
  const [isClaim, setIsClaim] = useState(false);

  const startProgress = () => {
    setProgress(0);
    setIsClaim(false);

    const duration = 10000; // 10 segundos em milissegundos
    const startTime = Date.now();

    const animateProgress = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const newProgress = Math.min(1, elapsedTime / duration);

      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setIsClaim(true);
      }
    };

    requestAnimationFrame(animateProgress);
  };

  const handleClaim = () => {
    if (isClaim) {
      setProgress(0);
      setIsClaim(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../svgs/pngConvert/bitcoinIcon.png')}
        style={{width: 30, height: 30}}
      />
      <AppText size="xlarge" variant="semiBold" color="white">
        Bitcoin
      </AppText>
      <AppText color="gray" size="large">
        R$420,20
      </AppText>

      <Progress.Bar
        progress={progress}
        width={300}
        height={20}
        color="pink"
        unfilledColor="#e0e0e0"
        borderColor="#000"
        borderRadius={5}
        animated
        style={styles.progressBar}
      />
      <Button
        title="Start Mining"
        onPress={startProgress}
        disabled={progress > 0 && !isClaim}
      />
      <Button title="Claim" onPress={handleClaim} disabled={!isClaim} />
    </View>
  );
};

export default CardMining;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#1f1e1f',
    borderRadius: 10,
    elevation: 5,
  },
  progressBar: {
    marginTop: 15, // Adiciona espaço acima da barra de progresso
    marginBottom: 15, // Adiciona espaço abaixo da barra de progresso
  },
});
