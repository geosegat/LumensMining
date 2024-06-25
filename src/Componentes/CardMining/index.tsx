import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import * as Progress from 'react-native-progress';
import CardButton from '../CardButton';

const CardMining = () => {
  const [progress, setProgress] = useState(0);
  const [isClaim, setIsClaim] = useState(false);
  const [textState, setTextState] = useState('Start');
  const [loading, setLoading] = useState(false);

  const startProgress = () => {
    if (!isClaim) {
      setProgress(0);
      setIsClaim(false);
      setLoading(true);

      const duration = 5000; // 10 segundos em milissegundos
      const startTime = Date.now();

      const animateProgress = () => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const newProgress = Math.min(1, elapsedTime / duration);
        setTextState('Mineiração em andamento');

        setProgress(newProgress);

        if (newProgress < 1) {
          requestAnimationFrame(animateProgress);
        } else {
          setLoading(false);
          setIsClaim(true);
          setTextState('Resgatar');
        }
      };

      requestAnimationFrame(animateProgress);
    }
  };

  const handleClaim = () => {
    if (isClaim) {
      setProgress(0);
      setIsClaim(false);
      setTextState('Start');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
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
        </View>
        <CardButton
          loading={loading}
          colorLabel="black"
          disabled={progress > 0 && !isClaim}
          label={textState}
          onPress={isClaim ? handleClaim : startProgress}
          style={{
            backgroundColor: '#bdc644',
            borderRadius: 7,
            padding: 5,
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Progress.Bar
          progress={progress}
          width={300}
          height={10}
          color="#bdc644"
          unfilledColor="#e0e0e0"
          borderColor="#000"
          borderRadius={5}
          animated
          style={styles.progressBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#191918',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  progressBar: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});

export default CardMining;
