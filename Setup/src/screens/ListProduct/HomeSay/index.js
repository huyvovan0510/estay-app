import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import ItemMotel from '@src/components/ItemMotel';
import Util from '@src/comon/Util';
const { scale } = Util;
import Cheader from '@src/comon/Cheader';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import LoadingSC from '@src/comon/LoadingSc';

const HomeStay = ({ navigation }) => {
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
        name={'HomeStay'}
        navigation={navigation}
        icon={'chevron-left'}
      />
      {isLoading ? (
        <LoadingSC />
      ) : (
        <ScrollView style={styles.content}>
          <FlatList
            style={{ alignSelf: 'center' }}
            showsVerticalScrollIndicator={false}
            data={hotelsData.filter(item => {
              return item.category === 'HomeStay';
            })}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('DetailsProduct', { data: item });
                  }}>
                  <ItemMotel data={item} index={index} />
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
    paddingVertical: scale(20),
    flex: 1,
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

export default HomeStay;
