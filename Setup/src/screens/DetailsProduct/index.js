import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { heightScreen } from '@src/comon/Dimensions';
import Icon from 'react-native-vector-icons/Entypo';
const DetailsProduct = () => {
  return (
    <ScrollView>
      <View style={styles.boxImg} />
      <View style={styles.BoxTitle}>
        <Text style={styles.hotelName}> Sontana Houtel</Text>
        <View style={styles.rowLocation}>
          <Icon name="location-pin" size={25} color="#ffff" />
          <Text style={styles.txtLocation}>45 Nguyen Thi Thap Q7 HCM</Text>
        </View>
        <View style={styles.rowLocation}>
          <Icon name="location-pin" size={25} color="#ffff" />
          <Text style={styles.txtLocation}>45 Nguyen Thi Thap Q7 HCM</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxImg: {
    height: heightScreen / 1.5,
    backgroundColor: 'red',
  },
  BoxTitle: {
    backgroundColor: '#000',
    padding: 15,
  },
  hotelName: {
    marginBottom: 10,
    color: '#ffff',
    fontSize: 33,
    fontWeight: '500',
  },
  txtLocation: {
    marginLeft: 10,
    color: '#ffff',
    fontSize: 15,
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DetailsProduct;
