import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import Util from '../Util';

import Icons from '@src/comon/Icon';
const { scale } = Util;

function CHeader({ icon, name, navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{ padding: 10 }}
        activeOpacity={0.7}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icons
          name={icon}
          type="MaterialIcons"
          size={30}
          style={{ paddingTop: Platform.OS === 'android' ? 0 : scale(23) }}
        />
      </TouchableOpacity>

      <Text style={styles.titles}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
    backgroundColor: '#fff',
    width: '100%',
    height: Platform.OS === 'android' ? scale(50) : scale(90),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default React.memo(CHeader);
