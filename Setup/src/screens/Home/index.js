import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthScreen, heightScreen } from '../../comon/Dimensions';
import ItemProduct from '../../components/ItemProduct';
import ItemProduct_1 from '../../components/ItemProdcut_1';
import ItemProduct_2 from '../../components/ItemProduct_2';
import Header from '../../comon/Header';
import styles from './style';
import { data } from '../../data';
import Util from '@src/comon/Util';
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
  const _renderSile = ({ item, index }) => {
    return (
      <TouchableOpacity
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
  const _renderItemProduct_1 = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.shadow}
        onPress={() => {
          navigation.push('DetailsProduct', { data: item });
        }}>
        <ItemProduct_1 data={item} index={index} />
      </TouchableOpacity>
    );
  };
  const _renderItemProduct_2 = ({ item, index }) => {
    return <ItemProduct_2 data={item} />;
  };

  return (
    // <SafeAreaView style={{backgroundColor: '#f0f0f0'}}>ơ
    <Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#ffff' }}>
        <View style={styles.boxCarưosel}>
          <Carousel
            autoplay
            layout={'default'}
            // ref={c => {
            //   this._carousel = c;
            // }}
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
          <View style={styles.topHotel}>
            <View style={styles.BoxTitle}>
              <Text style={styles.titleTopHotel}>Top Hotel</Text>
              <Text style={styles.txtViewMore}>View More</Text>
            </View>
          </View>
          <View style={{}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={data}
              renderItem={_renderItemProduct}
              keyExtractor={item => {
                item.id;
              }}
            />
          </View>
          <View style={styles.homeStay}>
            <View style={styles.BoxTitle}>
              <Text style={styles.titleTopHotel}>Home Stay</Text>
              <Text style={styles.txtViewMore}>View More</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={data}
              renderItem={_renderItemProduct_1}
              keyExtractor={item => {
                item.id;
              }}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={_renderItemProduct_2}
          />
        </View>
      </ScrollView>
    </Header>
    // </SafeAreaView>
  );
};

export default Home;
