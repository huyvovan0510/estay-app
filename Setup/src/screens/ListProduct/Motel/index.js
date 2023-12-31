import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import ItemProdcut_2 from '@src/components/ItemProduct_2';
import Util from '@src/comon/Util';
const { scale } = Util;
import LottieView from 'lottie-react-native';
import Cheader from '@src/comon/Cheader';
import axios from 'axios';

const Motel = ({ navigation }) => {
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getdata = () => {
    axios
      .get('https://estay.herokuapp.com/hotels/getData')
      .then(function (response) {
        response ? setHotelsData(response.data) : setHotelsData([]);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={styles.contaimer}>
      <Cheader name={'Motel'} navigation={navigation} icon={'angle-left'} />
      {isLoading ? (
        <View style={{ flex: 1 }}>
          <LottieView
            source={require('@src/assets/annimated/Planhodel.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
          <ScrollView style={styles.content}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={hotelsData.filter(item => {
                return item.category === 'Motel';
              })}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('DetailsProduct', { data: item });
                    }}>
                    <ItemProdcut_2 data={item} index={index} />
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
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
    paddingHorizontal: 15,
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

export default Motel;
