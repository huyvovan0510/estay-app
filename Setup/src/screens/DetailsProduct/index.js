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
import AsyncStorage from '@react-native-community/async-storage';

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
    category,
    hotelName,
    id,
    imgSrc,
    price,
    dec,
    location,
    rooms,
    service,
  } = data;

  useEffect(() => {
    // data.id === dataLiked.id ? setIsLove(true) : setIsLove(false);
    dataLiked.map(item => {
      item.id === data.id ? setIsLove(true) : null;
    });
  }, [data.id, dataLiked, dataLiked.id]);
  const [isLogin, setIsLogin] = useState({});
  const [showWarning, setShow] = useState(false);
  const [roomInfor, setInfor] = useState({});
  const [isDask, setIsDask] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const [showRiview, setShowRivew] = useState(false);
  const getInforRooms = roomInfor => {
    setInfor(roomInfor);
  };
  useState(() => {
    AsyncStorage.getItem('inforUser', (_err, result) => {
      setIsLogin(result);
    });
  });

  const hadelBook = () => {
    isLogin === 'null'
      ? navigation.navigate('Setting')
      : navigation.navigate('BookCalendar', {
          Price: price,
          dec: dec,
          thumbImg: imgSrc,
          imgSrc: imgSrc,
          hotelName: hotelName,
          location: location,
          room: roomInfor.number,
        });
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" />
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
      <ScrollView
        onScroll={event => {
          event.nativeEvent.contentOffset.y > 197
            ? setIsDask(true)
            : setIsDask(false);
        }}>
        <View style={styles.boxImg}>
          <ImageBackground
            source={{ uri: imgSrc }}
            resizeMode="cover"
            style={styles.img}>
            <LinearGradient
              colors={['transparent', '#000']}
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
            <Text style={styles.txtCategory}>{category}</Text>
          </View>
          <View style={styles.rowRate}>
            <Icons name="star" size={25} color="#ffff" type="AntDesign" />
            <Text style={styles.numRate}>5.0</Text>
          </View>
          <View style={{ borderBottomWidth: 0.5, borderColor: '#a8a8a8' }}>
            <RoomOptions
              Room={rooms}
              roomCategory="Standard"
              getInforRooms={getInforRooms}
            />
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
                <Text style={styles.status}> {roomInfor.status}</Text>
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
              data={service}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.boxServer}>
                    <Icons
                      name={item.icon}
                      size={30}
                      color="#000"
                      type={item.type}
                    />
                    <Text style={styles.txtService}>{item.service}</Text>
                  </View>
                );
              }}
            />
          </View>
          <Text style={styles.review}>Reviews</Text>
          <TouchableOpacity
            style={styles.btnReadAll}
            onPress={() => {
              isLogin === 'null'
                ? alert('You need to be logged in to be able to comment !')
                : setShowRivew(true);
            }}>
            <Text style={styles.readAll}>Read all review</Text>
            <Modal
              isVisible={showRiview}
              avoidKeyboard={true}
              onBackdropPress={() => {
                setShowRivew(false);
              }}>
              <View style={{ backgroundColor: 'red' }} />

              <View style={styles.dailog}>
                {console.log('ssssss')}
                <ContentDailog hotelid={id} />
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
            {price} VND / Day
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            roomInfor.number ? hadelBook() : null;
          }}
          style={[
            styles.btnBook,
            roomInfor.number
              ? {
                  backgroundColor: isDask ? '#e03a61' : '#fff',
                }
              : {
                  backgroundColor: isDask ? '#e48fa3' : '#e6e6e6',
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
