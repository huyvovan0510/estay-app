import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '@src/comon/Icon';
import { heightScreen } from '../../comon/Dimensions';
import { Item } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Rooms = [
  { id: '1', room: '102' },
  { id: '2', room: '105' },
  { id: '3', room: '107' },
  { id: '4', room: '122' },
  { id: '5', room: '142' },
  { id: '6', room: '123' },
  { id: '7', room: '122' },
];
const DetailsProduct = ({ navigation }) => {
  const item = navigation.state.params;
  const { data } = item;

  const {
    Price = 0,
    dec = '',
    thumbImg = '',
    imgSrc = '',
    hotelName = '',
    location = '',
  } = data;
  console.log('data', data.thumbImg);
  const [id, setId] = useState('');
  const [isDask, setIsDask] = useState(false);
  const getID = id => {
    setId(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onScroll={event => {
          console.log(event.nativeEvent.contentOffset.y);
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
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icons
                  name="arrow-back"
                  size={25}
                  type={'MaterialIcons'}
                  color="#ffff"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icons
                  name="hearto"
                  size={25}
                  type={'AntDesign'}
                  color="#ffff"
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
          <Text style={styles.hotelName}>{data.hotelName}</Text>
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
          <Text style={styles.txtRooms}>The rooms we have</Text>
          <View style={styles.boxRooms}>
            <FlatList
              data={Rooms}
              numColumns={4}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      getID(item.id);
                    }}>
                    <View
                      style={[
                        styles.btnRooms,
                        {
                          borderColor: id === item.id ? '#ffffffff' : '#a8a8a8',
                        },
                      ]}>
                      <Text
                        style={{
                          color: id === item.id ? '#ffffffff' : '#a8a8a8',
                        }}>
                        {item.room}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
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
          <View style={styles.btnReadAll}>
            <Text style={styles.readAll}>Read all review</Text>
          </View>
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
        <View
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxImg: {
    height: heightScreen / 1.5,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  BoxTitle: {
    backgroundColor: '#000',
    padding: 15,
  },
  hotelName: {
    marginBottom: 10,
    color: '#ffff',
    fontSize: 33,
    fontWeight: '500',
  },
  txtLocation: {
    marginLeft: 10,
    color: '#ffff',
    fontSize: 15,
  },
  rowLocation: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  numRate: {
    marginLeft: 20,
    color: '#ffff',
    fontSize: 15,
  },
  rowRate: {
    flexDirection: 'row',
    borderColor: '#4f4e4e',
    borderBottomWidth: 1,

    marginVertical: 5,
    alignItems: 'center',
  },
  boxHastag: {
    backgroundColor: '#4f4e4e',
  },
  rowHastag: {
    flex: 1,
  },
  rowCategoty: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCategory: { marginLeft: 20, color: '#ffff', fontSize: 15 },
  txtLiner: {
    paddingVertical: heightScreen / 7,
  },
  img: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  btnRooms: { margin: 5, padding: 8, borderWidth: 1, borderRadius: 4 },
  txtRooms: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
  },
  boxRooms: {
    borderBottomWidth: 1,
    borderColor: '#4f4e4e',
    paddingBottom: 5,
  },
  roomStatus: {
    marginTop: 10,
    color: '#a8a8a8',
    fontSize: 16,
  },
  status: {
    color: '#e3e3e3',
    fontSize: 16,
  },
  dec: {
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  txtConten: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '300',
  },
  txtDetails: {
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
  },
  boxServer: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    marginRight: 25,
    paddingVertical: 30,
    paddingHorizontal: 35,
  },
  txtService: {
    fontWeight: '600',
    fontSize: 18,
  },
  service: {
    marginVertical: 10,
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
  },
  avata: {
    marginRight: 10,
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: 'red',
  },
  title: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  review: {
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
  },
  useName: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
  },
  txtContentReviews: {
    color: '#707070',
    fontSize: 14,
    lineHeight: 20,
  },
  btnReadAll: {
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 4,
    borderColor: '#6abd96',
    borderWidth: 2,
  },
  readAll: {
    color: '#6abd96',
  },
  headerDetails: {
    width: '100%',
    padding: 15,

    position: 'absolute',
    top: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  book: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: '100%',
    height: 70,
  },
  btnBook: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

    borderRadius: 8,
  },
  price: {
    fontWeight: '400',
    fontSize: 14,
  },
  numPrice: {
    fontSize: 16,
  },
  txtbookNow: {
    color: '#ffff',
  },
});

export default DetailsProduct;
