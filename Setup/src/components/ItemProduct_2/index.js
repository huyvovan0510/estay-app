import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';

const ItemProduct = ({ data }) => {
  return (
    <View style={styles.boxItem}>
      <View style={styles.thumbImg}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: data.thumbImg }}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.textContent}>
          <Text style={styles.hotelName}>Sontana Hotel</Text>
          <Text style={styles.txtPrice}>{data.Price + ' / Ngày'}</Text>
          <View style={styles.rowLocation}>
            <Icon name="location-pin" size={15} color="#000" />
            <Text style={styles.txtLocation}>{data.location}</Text>
          </View>
          <Text numberOfLines={3} style={styles.decHotel}>
            {data.dec}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
