import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Cheader from '@src/comon/Cheader';
import { heightScreen } from '@src/comon/Dimensions';
import ItemLiked from '@src/components/ItemLiked';
import { ScrollView } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
const Map = ({ data = [], unLike, navigation }) => {
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
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DetailsProduct', { data: item });
                }}>
                <ItemLiked data={item} unLike={unLike} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.viewEmpty}>
          <View style={styles.chiiderView}>
            <LottieView
              source={require('@src/assets/annimated/emptyLove.json')}
              autoPlay
              loop
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
  img: { width: '100%', height: '100%' },
  chiiderView: { width: '100%', height: '100%', alignItems: 'center' },
  viewEmpty: { width: '100%', height: '100%' },
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
