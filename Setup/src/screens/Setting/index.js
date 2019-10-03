import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
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

export default Setting;
