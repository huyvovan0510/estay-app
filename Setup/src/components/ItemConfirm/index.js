import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Util from '@src/comon/Util';
import moment from 'moment';
import Cheader from '@src/comon/Cheader';
import Modal from 'react-native-modal';
import Icons from '@src/comon/Icon';
const { scale } = Util;

import PersionDailog from '@src/components/PerssionDailog';

const Confirm = ({ Category, dataConfirm, navigation, showDaiglog }) => {
  return (
    <TouchableOpacity
      style={styles.item1}
      activeOpacity={1}
      onPress={() => {
        navigation ? navigation.navigate('BookCalendar') : showDaiglog();
      }}>
      <Text>{Category}</Text>
      <Text>{dataConfirm}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  boxImg: {
    width: '100%',
    height: scale(200),
    alignSelf: 'center',
    paddingVertical: scale(20),
  },

  nameHotel: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: '400',
    lineHeight: 28,
  },
  txtLocation: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 20,
  },
  title: {
    marginBottom: 20,
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#c2c2c2',
  },
  dailog: {
    width: scale(300),
    height: scale(300),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 8,
  },
  header: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtConfirm: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '500',
  },
  btnDone: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '70%',
    height: 50,
    backgroundColor: '#ff1f75',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtDone: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
export default Confirm;
