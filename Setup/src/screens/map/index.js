import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import Icons from '@src/comon/Icon';
import Cheader from '@src/comon/Cheader';
import { heightScreen } from '@src/comon/Dimensions';

import ItemLiked from '@src/components/ItemLiked';
import { ScrollView } from 'react-native-gesture-handler';

const Map = ({ data = [], unLike, navigation }) => {
  let item = navigation.state.params;
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  });
  return (
    <View style={styles.contaimer}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Cheader name={'Yêu Thích'} navigation={navigation} />
      {data.length > 0 ? (
        <ScrollView>
          {data.map((item, index) => {
            return <ItemLiked data={item} unLike={unLike} />;
          })}
        </ScrollView>
      ) : (
        <View style={{ width: '100%', height: '100%' }}>
          <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <Image
              source={require('@src/assets/img/emptyScreen.png')}
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: { flex: 1 },
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
