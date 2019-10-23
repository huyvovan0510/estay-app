import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Util from '@src/comon/Util';
import moment from 'moment';
import Cheader from '@src/comon/Cheader';
import Icons from '@src/comon/Icon';
const { scale } = Util;
const Options = ({ category, onGetTotal }) => {
  const [inits, setInits] = useState(0);
  onGetTotal(inits);

  return (
    <View style={styles.Options}>
      <Text>{category}</Text>
      <View style={styles.control}>
        <TouchableOpacity
          onPress={() => {
            setInits(inits + 1);
          }}>
          <Icons
            name="pluscircleo"
            type="AntDesign"
            size={25}
            color={'#c3c3c3'}
          />
        </TouchableOpacity>
        <Text style={styles.amount}>{inits}</Text>
        <TouchableOpacity>
          <Icons
            name="minuscircleo"
            type="AntDesign"
            size={25}
            color={'#c3c3c3'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Options: {
    padding: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 25,
    marginHorizontal: 10,
    color: '#c9c9c9',
  },

});
export default Options;
