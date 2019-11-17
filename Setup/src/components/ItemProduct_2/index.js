import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';

const ItemProduct = ({ data }) => {
  const { category, hotelName, id, imgSrc, price, dec, location } = data;
  return (
    <View style={styles.boxItem}>
      <View style={styles.thumbImg}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: imgSrc }}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.textContent}>
          <Text style={styles.hotelName}>{hotelName}</Text>
          <Text style={styles.txtPrice}>{price + ' / Ngày'}</Text>
          <View style={styles.rowLocation}>
            <Icon name="location-pin" size={15} color="#000" />
            <Text style={styles.txtLocation}>{location}</Text>
          </View>
          <Text numberOfLines={3} style={styles.decHotel}>
            {dec}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
