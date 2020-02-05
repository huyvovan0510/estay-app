import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icons from '@src/comon/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemProduct_1 = ({ data, index, navigation }) => {
  const { category, hotelName, id, imgSrc, price, dec, location } = data;
  return (
    <View style={styles.shadow} key={id}>
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
            source={{ uri: imgSrc }}
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
            <Text numberOfLines={1} style={styles.hotelName}>
              {hotelName}
            </Text>
            <View style={styles.rowLocation}>
              <Icons name="home" size={15} color="#000" type="AntDesign" />
              <Text style={styles.txtCategory}>{data.category}</Text>
            </View>
            <View style={styles.rowLocation}>
              <Icons name="location-pin" size={15} color="#000" type="Entypo" />
              <Text style={styles.txtLocation}>{location}</Text>
            </View>

            <View style={styles.rowLocation}>
              <Icons
                name="attach-money"
                size={15}
                color="#000"
                type="MaterialIcons"
              />
              <Text style={styles.txtPrice}>{price + ' / Ngày'}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct_1;
