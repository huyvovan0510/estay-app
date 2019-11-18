import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';
const ItemProduct = ({ data }) => {
  const { category, hotelName, id, imgSrc, price, dec, location } = data;
  return (
    <View style={styles.shadow}>
      <ImageBackground style={styles.boxItem} source={{ uri: imgSrc }}>
        <LinearGradient colors={['transparent', '#000']} styles={styles.Liner}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.hotelName}>{hotelName}</Text>
            <View style={styles.rowLocation}>
              <Icon name="location-pin" size={15} color="#fff" />
              <Text style={styles.txtLocation}>{location}</Text>
            </View>
            <Text numberOfLines={4} style={styles.prrice}>
              {price + ' Vnd / Day'}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ItemProduct;
