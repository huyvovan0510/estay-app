import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailsProduct = () => {
  return (
    <View style={styles.container}>
      <Text>ProductDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsProduct;
