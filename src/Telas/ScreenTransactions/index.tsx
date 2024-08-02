import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CollectionSvgImg from '../../utilitis/CollectionSvgImg';

const ScreenTransactions: React.FC<NavigationProps> = ({navigation}) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser; // Obtém o usuário autenticado
        if (user) {
          const userDoc = await firestore()
            .collection('users')
            .doc(user.uid)
            .get();
          if (userDoc.exists) {
            setUserData(userDoc.data()); // Define os dados do usuário no estado
          } else {
            console.log('Nenhum dado encontrado para este usuário.');
          }
        }
      } catch (err) {
        setError(err.message);
        console.error('Erro ao buscar dados do usuário:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
    );
  }

  if (error) {
    return <Text style={styles.error}>Erro: {error}</Text>;
  }

  if (!userData) {
    return (
      <Text style={styles.noData}>Nenhum dado do usuário disponível.</Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dados do Usuário</Text>
        <CollectionSvgImg
          onPress={() => {}}
          color={'#fff'}
          height={25}
          width={25}
          iconName={'setting'}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Nome: {userData.name}</Text>
        <Text style={styles.label}>Email: {userData.email}</Text>
        <Text style={styles.label}>CPF: {userData.cpf}</Text>
        <Text style={styles.label}>Saldo: R${userData.balance.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d1b',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1d1b',
  },
  error: {
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
  noData: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ScreenTransactions;
