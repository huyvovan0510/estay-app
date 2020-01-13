import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthScreen, heightScreen } from '../../comon/Dimensions';
import ItemProduct from '../../components/ItemProduct';
import ItemMotel from '../../components/ItemMotel';
import ItemProduct_2 from '../../components/ItemProduct_2';
import CTitle from '@src/comon/CTitle';
import styles from './style';
import Util from '@src/comon/Util';
import LoadingSC from '@src/comon/LoadingSc';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const { scale } = Util;

const category = [
  {
    id: '1',
    name: 'Hotel',
    linerColor: ['#2E3192', '#1BFFFF'],
    iconName: 'hotel',
  },
  {
    id: '2',
    name: 'Motel',
    linerColor: ['#00A8C5', '#FFFF7E'],
    iconName: 'home',
  },
  {
    id: '3',
    name: 'HomeStay',
    linerColor: ['#8E78FF', '#FC7D7B'],
    iconName: 'hotel',
  },
];
const Home = ({ navigation }) => {
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [tmp, setTmp] = useState({});
  let Hotels = hotelsData.filter(item => {
    return item.category === 'Hotel';
  });
  let Motel = hotelsData.filter(item => {
    return item.category === 'Motel';
  });
  let HomeStay = hotelsData.filter(item => {
    return item.category === 'HomeStay';
  });

  const value = AsyncStorage.getItem('inforUser', (_err, result) => {
    setTmp(result);
    return result;
  });
  const getdata = () => {
    axios
      .get('https://estay.herokuapp.com/hotels/getData')
      .then(response => {
        response ? setHotelsData(response.data) : setHotelsData([]);
        setLoading(false);
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const _renderSile = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.8}
        onPress={() => {
          navigation.push('DetailsProduct', { data: item });
        }}>
        <Image
          source={{ uri: item.imgSrc }}
          style={{
            width: widthScreen,
            height: scale(150),
          }}
        />
      </TouchableOpacity>
    );
  };
  //renderItems Category
  const _renderItemCategory = (item, index) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.8}
        style={styles.category}
        onPress={() => {
          navigation.push(item.name);
        }}>
        <LinearGradient colors={item.linerColor} style={styles.itemCategory}>
          <Icon name={item.iconName} size={20} color="#fff" />
        </LinearGradient>
        <Text style={styles.categoryTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  console.log(hotelsData);

  if (isLoading === true) {
    return <LoadingSC />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.input}
          onPress={() => {
            navigation.push('Search');
          }}>
          <Icon name="search" type="Feather" color="#d8d8d8" />
          <Text style={{ color: '#d8d8d8' }}>'Nhập nơi bạn muốn đến...'</Text>
        </TouchableOpacity>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <ScrollView
          style={{ flex: 1, backgroundColor: '#ffff' }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.boxCarưosel}>
            <Carousel
              autoplay
              layout={'default'}
              loop
              data={hotelsData}
              renderItem={_renderSile}
              sliderWidth={widthScreen}
              itemWidth={widthScreen}
              itemHeight={heightScreen / 4}
              sliderHeight={heightScreen / 5}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.boxCategory}>
              {category.map(_renderItemCategory)}
            </View>
            <CTitle title="Hot Hotel" color="red" size={16} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {Hotels.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.8}
                    style={styles.shadow}
                    onPress={() => {
                      navigation.push('DetailsProduct', { data: item });
                    }}>
                    <ItemProduct data={item} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <CTitle title="Motel" color="red" size={16} />
            <View style={styles.motelContent}>
              {Motel.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.8}
                    style={styles.shadow}
                    onPress={() => {
                      navigation.push('DetailsProduct', { data: item });
                    }}>
                    <ItemMotel data={item} index={index} />
                  </TouchableOpacity>
                );
              })}
            </View>
            <CTitle title="Home Stay" color="red" size={16} />
            {HomeStay.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  style={styles.shadow}
                  onPress={() => {
                    navigation.push('DetailsProduct', { data: item });
                  }}>
                  <ItemProduct_2 data={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Home;
