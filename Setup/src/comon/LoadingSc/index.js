import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
const LoadingSc = () => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require('../../assets/annimated/Loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingSc;
