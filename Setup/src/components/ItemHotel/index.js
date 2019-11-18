import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icons from '@src/comon/Icon';
import { heightScreen } from '@src/comon/Dimensions';

const ItemHotel = ({ data = {}, index = 0 }) => {
  const { category, hotelName, id, imgSrc, price, dec, location } = data;
  console.log('search', data);
  return (
    <View
      style={[
        styles.boxContainer,
        {
          marginLeft: index + (1 % 2) ? 10 : 0,
          marginRight: !index + (1 % 2) ? 10 : 0,
          // marginLeft: index != 0 || index % 2 === 0 ? 10 : 0,
        },
      ]}>
      <View style={styles.imgBox}>
        <Image
          source={{ uri: imgSrc }}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.hotelName}>{hotelName}</Text>
        <Text style={styles.price}>{price} / day</Text>
        <View style={styles.rowCategory}>
          <Icons name="hotel" size={15} color="#000" type="FontAwesome5" />
          <Text style={styles.txtCategory}>{hotelName}</Text>
        </View>
        <View style={styles.rowLocation}>
          <Icons name="location-pin" size={15} color="#000" type="Entypo" />
          <Text style={styles.txtLocation}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: { marginBottom: 15, width: 165, marginTop: 20 },
  imgBox: {
    width: 165,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  contentBox: {
    flex: 1,
    paddingHorizontal: 3,
  },
  rowCategory: {
    flexDirection: 'row',
  },
  rowLocation: {
    flex: 1,
    flexDirection: 'row',
  },
  hotelName: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: '400',
  },
  price: {
    color: '#000',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  },
  txtCategory: {
    lineHeight: 20,
    marginLeft: 10,
    fontWeight: '100',
  },
  txtLocation: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '100',
  },
});

export default ItemHotel;
