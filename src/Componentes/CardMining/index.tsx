import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../AppText';
import * as Progress from 'react-native-progress';
import CardButton from '../CardButton';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

interface CardMiningProps {
  onMineirado: (valorMineirado: number) => void;
  iconName?: string;
  criptoName?: string;
  moedaValor: number;
  casasDecimais?: number; // Adicione esta linha
}

const CardMining: React.FC<CardMiningProps> = ({
  onMineirado,
  iconName,
  criptoName,
  moedaValor,
}) => {
  const [progress, setProgress] = useState(0);
  const [isClaim, setIsClaim] = useState(false);
  const [textState, setTextState] = useState('Start');
  const [loading, setLoading] = useState(false);
  const [valorMineirado, setValorMineirado] = useState(0);

  const startProgress = () => {
    if (!isClaim) {
      setProgress(0);
      setIsClaim(false);
      setLoading(true);

      const duration = 2000;
      const startTime = Date.now();

      const animateProgress = () => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const newProgress = Math.min(1, elapsedTime / duration);

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

      // Calcular a quantidade minerada em moeda
      const valorMineracaoReais =
        Math.floor(Math.random() * (50 - 20 + 1)) + 20;
      const valorMineracaoMoeda = valorMineracaoReais / moedaValor;

      setValorMineirado(valorMineracaoMoeda);
      onMineirado(valorMineracaoMoeda); // Passa o valor mineirado para o componente pai
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <CollectionSvgImg
            isDisabled
            iconName={iconName ?? ''}
            width={30}
            height={30}
          />
          <AppText size="xlarge" variant="semiBold" color="white">
            {criptoName ?? 'Bitcoin'}
          </AppText>
          <AppText color="gray" size="large">
            Último resgate: {valorMineirado.toFixed(8)} {criptoName}
          </AppText>
        </View>
        <CardButton
          loading={loading}
          colorLabel="#fff"
          disabled={progress > 0 && !isClaim}
          label={textState}
          onPress={isClaim ? handleClaim : startProgress}
          style={{
            backgroundColor: '#002c53',
            borderRadius: 7,
            padding: 6,
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Progress.Bar
          progress={progress}
          width={300}
          height={10}
          color="#002c53"
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
    marginBottom: 10,
  },
  progressBar: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  },
});

export default CardMining;
