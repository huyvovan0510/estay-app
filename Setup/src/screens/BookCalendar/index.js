import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Util from '@src/comon/Util';
import Calendar from '@src/components/Calendar';
import Cheader from '@src/comon/Cheader';
const { scale } = Util;

const BookCalendar = ({ navigation }) => {
  let item = navigation.state.params;
  const {
    Price = 0,
    dec = '',
    thumbImg = '',
    imgSrc = '',
    hotelName = 'Sontana Hotel',
    location = '',
  } = item;
  const [totalDay, setTotalDay] = useState(0);
  const [startDay, setStartDay] = useState({});
  const onGetTotalDay = useCallback(days => {
    setTotalDay(days);
  }, []);
  const onGetStartDay = useCallback(startDay => {
    setStartDay(startDay);
  }, []);

  const BookingDay = useRef(0);
  console.warn(BookingDay.current.getDate);
  return (
    <View style={{ flex: 1 }}>
      <Cheader icon={'arrow-back'} name={'Booking'} navigation={navigation} />
      <Calendar onGetTotalDay={onGetTotalDay} onGetStartDay={onGetStartDay} />
      <View style={styles.NextBox}>
        <View>
          <Text>{'Total: ' + Price * totalDay + '  VND'}</Text>
        </View>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => {
            navigation.push('Confirm_sc', {
              Price: Price * totalDay,
              dec: dec,
              thumbImg: thumbImg,
              imgSrc: imgSrc,
              hotelName: hotelName,
              location: location,
              day: totalDay,
              startDay: startDay,
            });
          }}>
          <Text style={styles.txtNext}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
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
  titles: { color: '#000', fontSize: 20, fontWeight: '500', marginLeft: 15 },
  NextBox: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    width: '100%',
    height: Platform.OS === 'android' ? scale(50) : scale(60),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnNext: {
    width: scale(80),
    height: scale(40),
    backgroundColor: '#ff1f75',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNext: {
    color: '#fff',
    fontSize: 14,
  },
});

export default BookCalendar;
