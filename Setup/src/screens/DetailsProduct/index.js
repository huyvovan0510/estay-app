import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '@src/comon/Icon';
import styles from './style';
import { connect } from 'react-redux';
import RoomOptions from '@src/components/RoomOption';
import Modal from 'react-native-modal';

import ContentDailog from '@src/components/ContenDailog';
import Util from '@src/comon/Util';

const Rooms = [
  { id: '1', room: '102' },
  { id: '2', room: '105' },
  { id: '3', room: '107' },
  { id: '4', room: '122' },
  { id: '5', room: '142' },
  { id: '6', room: '123' },
  { id: '7', room: '122' },
];
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const DetailsProduct = ({ navigation, isLike, unLike, dataLiked = [] }) => {
  const item = navigation.state.params;
  const { data } = item;

  const {
    Price = 0,
    dec = '',
    thumbImg = '',
    imgSrc = '',
    hotelName = 'Sontana Hotel',
    location = '',
  } = data;
  useEffect(() => {
    // data.id === dataLiked.id ? setIsLove(true) : setIsLove(false);
    dataLiked.map(item => {
      item.id === data.id ? setIsLove(true) : null;
    });
  }, [data.id, dataLiked, dataLiked.id]);

  const [isDask, setIsDask] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const [showRiview, setShowRivew] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" />
      <ScrollView
        onScroll={event => {
          event.nativeEvent.contentOffset.y > 197
            ? setIsDask(true)
            : setIsDask(false);
        }}>
        <View style={styles.boxImg}>
          <ImageBackground
            source={{ uri: thumbImg }}
            resizeMode="cover"
            style={styles.img}>
            <View style={styles.headerDetails}>
              <TouchableOpacity
                style={styles.btnGoBack}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icons
                  name="arrow-back"
                  size={25}
                  type={'MaterialIcons'}
                  color="#000"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnGoBack}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setIsLove(!isLove);
                  !isLove ? isLike(data) : unLike(data);
                }}>
                <Icons
                  name={isLove ? 'heart' : 'hearto'}
                  size={25}
                  type={'AntDesign'}
                  color={isLove ? 'red' : '#000'}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.9)']}
              styles={styles.liner}>
              <Text style={styles.txtLiner} />
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.BoxTitle}>
          <Text style={styles.hotelName}>{hotelName}</Text>
          <View style={styles.rowLocation}>
            <Icons
              name={'location-pin'}
              size={25}
              color="#ffff"
              type="Entypo"
            />
            <Text style={styles.txtLocation}>{location}</Text>
          </View>
          <View style={styles.rowLocation}>
            <Icons name={'hotel'} size={20} color="#ffff" type="FontAwesome5" />
            <Text style={styles.txtCategory}>Houtel</Text>
          </View>
          <View style={styles.rowRate}>
            <Icons name="star" size={25} color="#ffff" type="AntDesign" />
            <Text style={styles.numRate}>5.0</Text>
          </View>
          <View style={{ borderBottomWidth: 0.5, borderColor: '#a8a8a8' }}>
            <RoomOptions Room={Rooms} roomCategory="Standard" />
            <RoomOptions Room={Rooms} roomCategory="Superior" />
            <RoomOptions Room={Rooms} roomCategory="Deluxe" />
          </View>

          <View style={styles.BoxUnname}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingVertical: 25, paddingLeft: 5 }}>
                <Icons
                  name="stopwatch"
                  type="Entypo"
                  size={20}
                  color={'#fff'}
                />
                <Text style={styles.roomStatus}>Room Status</Text>
                <Text style={styles.status}>ready !</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingVertical: 25,
                }}>
                <Icons name="users" type="Feather" size={20} color={'#fff'} />
                <Text style={styles.roomStatus}>Ccale</Text>
                <Text style={styles.status}>Up to 3 people</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dec}>
          <Text style={styles.txtDetails}>Details</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.txtConten} numberOfLines={5}>
              {dec}
            </Text>
          </View>

          <Text style={styles.service}>Extra service</Text>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={Rooms}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.boxServer}>
                    <Icons
                      name="food-fork-drink"
                      size={30}
                      color="#000"
                      type="MaterialCommunityIcons"
                    />
                    <Text style={styles.txtService}> Food server</Text>
                  </View>
                );
              }}
            />
          </View>
          <Text style={styles.review}>Reviews</Text>
          <View style={styles.boxReviews}>
            <View style={styles.title}>
              <View style={styles.avata} />
              <View>
                <Text style={styles.useName}>Huy vo van</Text>
                <Text style={styles.date}> 2-09-2019</Text>
              </View>
            </View>
            <View />
            <View style={styles.contentRiviews}>
              <Text style={styles.txtContentReviews} numberOfLines={4}>
                Once you have your idea or theme, start drawing out the elements
                onto a piece of paper. Ideally, you should draw boxes to
                represent each story element. Storyboard your Facebook story
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnReadAll}
            onPress={() => {
              setShowRivew(true);
            }}>
            <Text style={styles.readAll}>Read all review</Text>
            <Modal
              isVisible={showRiview}
              avoidKeyboard={true}
              onBackdropPress={() => {
                setShowRivew(false);
              }}>
              <View style={styles.dailog}>
                <ContentDailog />
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={[
          styles.book,
          {
            backgroundColor: isDask ? '#fff' : '#000',
          },
        ]}>
        <View>
          <Text
            style={[
              styles.price,
              {
                color: isDask ? '#000' : '#fff',
              },
            ]}>
            Price
          </Text>
          <Text
            style={[
              {
                color: isDask ? '#000' : '#fff',
              },
              styles.numPrice,
            ]}>
            {Price} VND / Day
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookCalendar', {
              Price: Price,
              dec: dec,
              thumbImg: thumbImg,
              imgSrc: imgSrc,
              hotelName: hotelName,
              location: location,
            });
          }}
          style={[
            styles.btnBook,
            {
              backgroundColor: isDask ? '#e03a61' : '#fff',
            },
          ]}>
          <Text
            style={[styles.txtbookNow, { color: isDask ? '#fff' : '#000' }]}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    isLike: data => dispatch({ type: 'Liked', data }),
    unLike: data => dispatch({ type: 'UnLike', data }),
  };
};
const mapStateToProps = state => {
  return { dataLiked: state.Like };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsProduct);
