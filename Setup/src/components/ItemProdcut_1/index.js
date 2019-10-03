import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemProduct = ({ data, index }) => {
  console.log(data.sale, data);
  return (
    <TouchableOpacity style={styles.shadow}>
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
          {!!data.sale && (
            <View style={styles.boxSale}>
              <Text style={{ color: '#ffee8c' }}>Hot</Text>
            </View>
          )}
        </View>
        <View style={styles.comtentBox}>
          <View style={styles.textContent}>
            <Text style={styles.hotelName}>Sontana Hotel</Text>
            <Text numberOfLines={4} style={styles.decHotel}>
              {data.dec}
            </Text>
            <View style={styles.rowLocation}>
              <Icon name="location-pin" size={15} color="#000" />
              <Text style={styles.txtLocation}>{data.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProduct;
