import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icons from '@src/comon/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemProduct_1 = ({ data, index, navigation }) => {
  return (
    <View style={styles.shadow}>
      <View
        style={[
          styles.boxItem,
          {
            marginLeft: index + (1 % 2) ? 5 : 0,
            marginRight: !index + (1 % 2) ? 5 : 0,
          },
        ]}>
        <View style={styles.imgBox}>
          <Image
            source={{ uri: data.thumbImg }}
            style={styles.img}
            resizeMode="cover"
          />
          {/* {!!data.sale && (
            <View style={styles.boxSale}>
              <Text style={{ color: '#ffee8c' }}>Hot</Text>
            </View>
          )} */}
        </View>
        <View style={styles.comtentBox}>
          <View style={styles.textContent}>
            <Text style={styles.hotelName}>Sontana Hotel</Text>
            <View style={styles.rowLocation}>
              <Icons name="home" size={15} color="#000" type="AntDesign" />
              <Text style={styles.txtCategory}>{'Hotel'}</Text>
            </View>
            <View style={styles.rowLocation}>
              <Icons name="location-pin" size={15} color="#000" type="Entypo" />
              <Text style={styles.txtLocation}>{data.location}</Text>
            </View>

            <View style={styles.rowLocation}>
              <Icons
                name="attach-money"
                size={15}
                color="#000"
                type="MaterialIcons"
              />
              <Text style={styles.txtPrice}>{data.Price + ' / Ngày'}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct_1;
