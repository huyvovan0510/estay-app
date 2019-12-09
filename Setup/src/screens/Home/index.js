import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import Icons from '@src/comon/Icon';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthScreen, heightScreen } from '../../comon/Dimensions';
import ItemProduct from '../../components/ItemProduct';
import ItemMotel from '../../components/ItemMotel';
import ItemProduct_2 from '../../components/ItemProduct_2';
import Header from '../../comon/Header';
import CTitle from '@src/comon/CTitle';
import styles from './style';
import { data } from '../../data';
import Util from '@src/comon/Util';
import LoadingSC from '@src/comon/LoadingSc';
import axios from 'axios';

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

  const getdata = () => {
    axios
      .get('http://5d940e73a961920014e92f5d.mockapi.io/api/v1/Hotels')
      .then(function(response) {
        response ? setHotelsData(response.data) : setHotelsData([]);
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
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
          //navigate to Details product scerren  and pass data
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
  //render  Items  TopHotel
  const _renderItemProduct = ({ item, index }) => {
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
  };

  //render
  const _renderItemMotel = ({ item, index }) => {
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
  };
  const _renderItemProduct_2 = ({ item, index }) => {
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
  };

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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#ffff' }}>
          <View style={styles.boxCarưosel}>
            <Carousel
              autoplay
              layout={'default'}
              loop
              data={data}
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
            <View style={{}}>
              <FlatList
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={hotelsData}
                renderItem={_renderItemProduct}
              />
            </View>
            <CTitle title="Motel" color="red" size={16} />
            <View style={{ alignItems: 'center', flex: 1 }}>
              <FlatList
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={hotelsData.filter(item => {
                  return item.category === 'Hotel';
                })}
                renderItem={_renderItemMotel}
              />
            </View>
            <CTitle title="Home Stay" color="red" size={16} />
            <FlatList
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              data={hotelsData}
              renderItem={_renderItemProduct_2}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Home;
