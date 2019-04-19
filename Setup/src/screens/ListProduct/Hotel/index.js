import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import ItemHotel from '@src/components/ItemHotel';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';

import { data } from '@src/data';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Hotel = () => {
  return (
    <View style={styles.contaimer}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Icons name="md-arrow-back" type="Ionicons" size={30} />
          <Text style={styles.titles}>Hotel</Text>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <ItemHotel data={item} index={index} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'flex-end',

    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffff',
    width: '100%',
    height: heightScreen / 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titles: { marginBottom: 20, color: '#000', fontSize: 20, fontWeight: '500' },
  subHeader: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'flex-end',
  },
});

export default Hotel;
