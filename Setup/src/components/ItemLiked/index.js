import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icons from '@src/comon/Icon';
import styles from './style';

const ItemLiked = ({ data, unLike }) => {
  const { category, hotelName, id, imgSrc, price, dec, location } = data;
  return (
    <View style={styles.boxItems}>
      <View style={styles.boxImg}>
        <Image
          source={{
            uri: imgSrc,
          }}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <View style={styles.contenBox}>
        <Text style={styles.hotelName}>{hotelName}</Text>
        <Text style={styles.price}>{price}VND / Day</Text>
        <View style={styles.rowCategory}>
          <Icons name="hotel" size={15} color="#000" type="FontAwesome5" />
          <Text style={styles.txtCategory}>{category}</Text>
        </View>
        <View style={styles.rowLocation}>
          <Icons name="location-pin" size={15} color="#000" type="Entypo" />
          <Text style={styles.txtLocation}>{location}</Text>
        </View>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => {
            unLike(data);
          }}>
          <Icons name="hearto" size={20} color={'red'} type="AntDesign" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemLiked;
