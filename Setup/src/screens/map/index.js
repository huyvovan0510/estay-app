import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text>map</Text>
      </TouchableOpacity>
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

export default Map;
