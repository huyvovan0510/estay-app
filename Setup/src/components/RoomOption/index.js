import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  IManager,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ItemProdcut_1 from '@src/components/ItemProdcut_1';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
import Util from '@src/comon/Util';
const { scale } = Util;

const Ctitle = ({ Room = [], roomCategory = '' }) => {
  const [id, setId] = useState('');
  const getID = id => {
    console.log(id);
    setId(id);
  };
  return (
    <View style={styles.boxRooms}>
      <Text style={styles.txtRooms}>{roomCategory}</Text>
      <FlatList
        data={Room}
        numColumns={4}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                getID(item.id);
              }}>
              <View
                style={[
                  styles.btnRooms,
                  {
                    borderColor: id === item.id ? '#ffffffff' : '#a8a8a8',
                  },
                ]}>
                <Text
                  style={{
                    color: id === item.id ? '#ffffffff' : '#a8a8a8',
                  }}>
                  {item.room}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxRooms: {
    marginBottom: 10,
  },
  txtRooms: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
  },
  btnRooms: { margin: 5, padding: 8, borderWidth: 1, borderRadius: 4 },
});

export default Ctitle;
