import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Icons from '@src/comon/Icon';
import { heightScreen } from '@src/comon/Dimensions';

import ItemLiked from '@src/components/ItemLiked';
import { ScrollView } from 'react-native-gesture-handler';

const Map = ({ data = [], unLike }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.title}>Yêu Thích</Text>
        </View>
      </View>
      {data.length > 0 ? (
        <ScrollView>
          {data.map((item, index) => {
            return <ItemLiked data={item} unLike={unLike} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.contaimer}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/1e/88/f0/1e88f00bcff87cfae46b49162ab92557.gif',
            }}
            style={{ width: '70%', height: '70%' }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: {
    height: heightScreen,

    alignItems: 'center',
  },
  header: {
    padding: 15,
    backgroundColor: '#ffff',
    width: '100%',
    height: heightScreen / 9,
  },
  titles: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  boxContent: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ababab',
    fontSize: 18,
    lineHeight: 30,
  },
  subHeader: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
  },
});

const mapStateToProps = state => {
  return { data: state.Like };
};
const mapDispatchToProps = dispatch => {
  return {
    unLike: data => dispatch({ type: 'UnLike', data }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
