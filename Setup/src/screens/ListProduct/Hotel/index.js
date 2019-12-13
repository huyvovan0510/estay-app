import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ItemHotel from '@src/components/ItemHotel';
import Util from '@src/comon/Util';
import Cheader from '@src/comon/Cheader';
const { scale } = Util;
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Hotel = ({ navigation }) => {
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getdata = () => {
    axios
      .get('https://5d940e73a961920014e92f5d.mockapi.io/api/v1/Hotels')
      .then(function(response) {
        response ? setHotelsData(response.data) : setHotelsData([]);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={styles.contaimer}>
      <Cheader
        name={'Hotel'}
        navigation={navigation}
        icon={'chevron-thin-left'}
      />
      {isLoading ? (
        <View style={{ flex: 1 }}>
          <LottieView
            source={require('@src/assets/annimated/Planhodel.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <View style={styles.content}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={hotelsData.filter(item => {
              return item.category === 'Hotel';
            })}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('DetailsProduct', { data: item });
                  }}>
                  <ItemHotel data={item} index={index} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: Platform.OS === 'android' ? 'center' : 'flex-end',
    backgroundColor: '#fff',
    width: '100%',
    height: Platform.OS === 'android' ? scale(50) : scale(90),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titles: { color: '#000', fontSize: 20, fontWeight: '500', marginLeft: 15 },
});

export default Hotel;
