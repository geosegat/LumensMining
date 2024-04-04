import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const Roulette = () => {
  const [result, setResult] = useState(null);
  const rotation = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    const spinValue = Math.floor(Math.random() * 360) + 720; // Number of degrees to rotate
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: spinValue,
      duration: 3000, // Duration of rotation
      easing: Easing.out(Easing.quad), // Easing function for smooth rotation
      useNativeDriver: true,
    }).start(() => {
      const index = Math.floor((spinValue % 360) / (360 / options.length));
      setResult(options[index]);
    });
  };

  const options = [
    {label: 'Red', color: 'red'},
    {label: 'Green', color: 'green'},
    {label: 'Black', color: 'black'},
    {label: 'Red', color: 'red'},
    {label: 'Green', color: 'green'},
    {label: 'Black', color: 'black'},
    {label: 'Red', color: 'red'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pointerContainer}>
        <View style={styles.pointer} />
      </View>
      <View style={styles.rouletteContainer}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}>
          <View style={styles.roulette}>
            {options.map((option, index) => (
              <View
                key={index}
                style={[styles.option, {backgroundColor: option.color}]}>
                <Text style={styles.optionLabel}>{option.label}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </View>
      <TouchableOpacity onPress={startRotation} style={styles.button}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Result: {result.label}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointerContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    alignItems: 'center',
  },
  pointer: {
    backgroundColor: 'pink',
    flex: 1,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  rouletteContainer: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 150,
    overflow: 'hidden',
  },
  roulette: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 20,
  },
});

export default Roulette;
