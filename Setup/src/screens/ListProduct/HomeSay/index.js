import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import Modal from 'react-native-modal';
import ItemProdcut_1 from '@src/components/ItemProdcut_1';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
import Util from '@src/comon/Util';
const { scale } = Util;
import { data } from '@src/data';

const HomeStay = ({ navigation }) => {
  return (
    <View style={styles.contaimer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ padding: 10 }}
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons
            name="md-arrow-back"
            type="Ionicons"
            size={30}
            style={{ paddingTop: Platform.OS === 'android' ? 0 : scale(23) }}
          />
        </TouchableOpacity>

        <Text style={styles.titles}>HomeStay</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('DetailsProduct', { data: item });
                }}>
                <ItemProdcut_1 data={item} index={index} />
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
    marginTop: 20,
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
  titles: { color: '#000', fontSize: 20, fontWeight: '500', marginLeft: 15 },
});

export default HomeStay;
