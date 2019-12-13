import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import Util from '@src/comon/Util';
import moment from 'moment';
import Cheader from '@src/comon/Cheader';
import Modal from 'react-native-modal';
import Icons from '@src/comon/Icon';
const { scale } = Util;
import ItemsConfirm from '@src/components/ItemConfirm';

import PersionDailog from '@src/components/PerssionDailog';

const Confirm = ({ navigation }) => {
  const item = navigation.state.params;
  const [showRiview, setShowRivew] = useState(false);
  const [totalPeople, setTotalPeople] = useState(0);
  const showDaiglog = () => {
    setShowRivew(true);
  };
  const onGetTotal = num => {
    setShowRivew(false);
    setTotalPeople(num);
  };
  const {
    Price = 0,
    dec = '',
    thumbImg = '',
    imgSrc = '',
    hotelName = 'Sontana Hotel',
    location = '',
    startDay = {},
    day = 0,
    room = '',
  } = item;

  return (
    <View style={{ flex: 1, paddingHorizontal: 25 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailsProduct');
          }}>
          <Icons name="close" type="AntDesign" size={30} />
        </TouchableOpacity>
        <Text style={styles.txtConfirm}>Confirm</Text>
      </View>
      <View style={styles.boxImg}>
        <Image
          source={{
            uri: thumbImg,
          }}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.nameHotel}>{hotelName}</Text>
        <Text style={styles.txtLocation}>{location}</Text>
      </View>
      <View style={styles.container}>
        <ItemsConfirm
          navigation={navigation}
          Category={'Checkin'}
          dataConfirm={moment(startDay.startDate).format('MMMM Do YYYY')}
        />
        <ItemsConfirm
          showDaiglog={showDaiglog}
          Category={'Maximum number of people'}
          dataConfirm={'3 Pepple'}
        />
        <Modal
          isVisible={showRiview}
          avoidKeyboard={true}
          onBackdropPress={() => {
            setShowRivew(false);
          }}>
          <View style={styles.dailog}>
            <PersionDailog onGetTotal={onGetTotal} />
          </View>
        </Modal>
        <ItemsConfirm
          Category={'Room'}
          dataConfirm={room}
          navigation={navigation}
        />
        <ItemsConfirm
          Category={'Total price'}
          dataConfirm={Price + ' VND'}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity
        style={styles.btnDone}
        onPress={() => {
          navigation.navigate('Ticket', {
            Price,
            thumbImg,
            hotelName,
            location,
            startDay,
            totalPeople,
            room: room,
          });
        }}>
        <Text style={styles.txtDone}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  boxImg: {
    backgroundColor: 'red',
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
    height: scale(170),
    alignSelf: 'center',
    marginVertical: 20,
  },

  nameHotel: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: '400',
    lineHeight: 28,
  },
  txtLocation: {
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 20,
  },
  title: {
    marginBottom: 20,
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#c2c2c2',
  },
  dailog: {
    width: scale(300),
    height: scale(300),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 8,
  },
  header: {
    marginTop: Platform.OS === 'android' ? scale(5) : scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtConfirm: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: '500',
  },
  btnDone: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '70%',
    height: 50,
    backgroundColor: '#ff1f75',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtDone: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
export default Confirm;
