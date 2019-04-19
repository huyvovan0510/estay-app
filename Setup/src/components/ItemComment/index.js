import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icons from '@src/comon/Icon';
import styles from './style';

const ItemComents = ({ data }) => {
  return (
    <View style={styles.boxReviews}>
      <View style={styles.title}>
        <View style={styles.avata} />
        <View>
          <Text style={styles.useName}>Huy vo van</Text>
          <Text style={styles.date}> 2-09-2019</Text>
        </View>
      </View>
      <View />
      <View style={styles.contentRiviews}>
        <Text style={styles.txtContentReviews} numberOfLines={4}>
          {data.content}
        </Text>
      </View>
    </View>
  );
};

export default ItemComents;
