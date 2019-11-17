import React from 'react';
import { View, Text, StyleSheet, IManager } from 'react-native';
import ItemProdcut_1 from '@src/components/ItemMotel';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
import Util from '@src/comon/Util';
const { scale } = Util;

const Ctitle = ({ title, color, size, boxStyle }) => {
  return (
    <View style={[styles.BoxTitle, { boxStyle }]}>
      <View style={[styles.shapeTitle, { backgroundColor: color }]} />
      <Text style={[styles.titleTopHotel, { fontSize: size, color: color }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shapeTitle: {
    width: 5,
    height: '100%',
    marginRight: 10,
    borderRadius: 8,
  },
  BoxTitle: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTopHotel: {
    fontWeight: '500',
    fontSize: 18,
  },
});

export default Ctitle;
