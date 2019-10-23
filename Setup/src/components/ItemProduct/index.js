import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';
const ItemProduct = ({ data }) => {
  return (
    <View style={styles.shadow}>
      <ImageBackground style={styles.boxItem} source={{ uri: data.imgSrc }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          styles={styles.Liner}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.hotelName}>Sontana Hotel</Text>
            <Text numberOfLines={4} style={styles.decHotel}>
              {data.dec}
            </Text>
            <View style={styles.rowLocation}>
              <Icon name="location-pin" size={15} color="#fff" />
              <Text style={styles.txtLocation}>{data.location}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ItemProduct;
