import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Util from '@src/comon/Util';
import moment from 'moment';
import Cheader from '@src/comon/Cheader';
import Icons from '@src/comon/Icon';
import Options from '@src/components/Options';
const { scale } = Util;

const PersionDailog = ({ onGetTotal }) => {
  const [Adults, setAdults] = useState(0);
  const [Children, setChildren] = useState(0);
  const [OlderPeople, setOlderPeople] = useState(0);
  const getAdults = num => {
    setAdults(num);
  };
  const getChildren = num => {
    setChildren(num);
  };
  const ogetOlderPeople = num => {
    setOlderPeople(num);
  };
  return (
    <View style={styles.container}>
      <Options category="Người lơn " onGetTotal={getAdults} />
      <Options category="Trẻ em " onGetTotal={getChildren} />
      <Options category="Người già" onGetTotal={ogetOlderPeople} />
      <TouchableOpacity
        style={styles.btnOk}
        onPress={() => {
          onGetTotal(Adults + Children + OlderPeople);
        }}>
        <Text style={styles.txtOk}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  btnOk: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#ff1f75',
  },
  txtOk: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
export default PersionDailog;
