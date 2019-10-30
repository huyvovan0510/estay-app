import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import Util from '@src/comon/Util';
import Icons from '@src/comon/Icon';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';
import { connect } from 'react-redux';

const { scale } = Util;
const Ticket = ({ navigation, BuyTicket }) => {
  let ticketData = navigation.state.params;
  const { Price, hotelName, location, startDay, totalPeople } = ticketData;

  return (
    <View style={styles.contatiner}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.ticket}>
        {/* <View style={styles.boxTitle}>
          <Text style={styles.title}>Booking App</Text>
        </View> */}
        <View style={styles.container}>
          <Text style={styles.nameHotel}>{hotelName}</Text>
          <Text style={styles.loactionName}>{location}</Text>
          <View style={styles.rowChekin}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.date}>
                {moment(startDay.startDate).format('DD - MM')}
              </Text>
              <Text>Check-in</Text>
            </View>
            <Icons
              name="arrowright"
              size={25}
              color="#c3c3c3"
              type="AntDesign"
            />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.date}>
                {moment(startDay.endDate).format('DD - MM')}
              </Text>
              <Text>Check-out</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.category}>Hote</Text>
              <Text style={styles.value}>Võ Văn Huy</Text>
            </View>

            <View>
              <Text style={styles.category}>Số lượng</Text>
              <Text style={styles.value}>{totalPeople + ' Người'}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.category}>Số Phòng</Text>
              <Text style={styles.value}>PS07106</Text>
            </View>

            <View>
              <Text style={styles.category}>Loại Phòng</Text>
              <Text style={styles.value}>VIP</Text>
            </View>
          </View>
          <Text style={styles.txtTotal}>{'Tổng: ' + Price + 'VND'}</Text>
        </View>

        <View style={styles.qRCode}>
          <QRCode
            value={'hello'}
            size={Platform.OS === 'android' ? scale(100) : scale(200)}
          />
        </View>
        <TouchableOpacity
          style={styles.done}
          onPress={() => {
            BuyTicket(ticketData);
            navigation.navigate('Home');
          }}>
          <Text style={styles.txtdone}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contatiner: {
    paddingVertical: Platform.OS === 'android' ? scale(35) : scale(65),
    paddingHorizontal: scale(35),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  qRCode: {
    alignSelf: 'center',
  },
  container: { padding: 20 },
  boxTitle: {
    width: '100%',
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 18,
  },
  nameHotel: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 28,
  },
  loactionName: {
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 20,
  },
  rowChekin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  date: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 22,
    textTransform: 'uppercase',
  },
  category: {
    color: '#666666',
    fontWeight: '300',
    paddingVertical: 5,
  },
  txtTotal: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 27,
    alignSelf: 'center',
  },
  done: {
    width: '100%',
    height: scale(50),
    backgroundColor: '#ff1f75',
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  txtdone: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: '500',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    BuyTicket: data => dispatch({ type: 'BuyTicket', data }),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(Ticket);
