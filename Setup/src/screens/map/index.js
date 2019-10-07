import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import Icons from '@src/comon/Icon';
import { heightScreen } from '@src/comon/Dimensions';

import ItemLiked from '@src/components/ItemLiked';
import { ScrollView } from 'react-native-gesture-handler';

const Map = ({ data = [], unLike }) => {
  return (
    <View>
      <View style={styles.header}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          resizeMode="cover"
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}>
          <Text style={styles.iitle}>Yêu Thích</Text>
        </ImageBackground>
      </View>
      {data.length > 0 ? (
        <ScrollView>
          {data.map((item, index) => {
            return <ItemLiked data={item} unLike={unLike} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.contaimer}>
          <View style={styles.boxContent}>
            <Icons name="hearto" size={40} color={'#ababab'} type="AntDesign" />
            <Text style={styles.txtContent}>
              Bạn chưa có khách sạn nào trong muc yêu thich cả !
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: {
    height: heightScreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: heightScreen / 9,
  },
  iitle: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 20,
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
