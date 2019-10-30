import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icons from '@src/comon/Icon';
import { heightScreen } from '@src/comon/Dimensions';
import QRCode from 'react-native-qrcode-svg';
import moment from 'moment';
import CHeader from '@src/comon/Cheader';
import Modal from 'react-native-modal';
import Util from '@src/comon/Util';
const { scale } = Util;

const History = ({ navigation, dataTicket }) => {
  const { Price, hotelName, location, startDay, totalPeople } = dataTicket;
  console.log('dât', dataTicket);

  const [showDailog, setShowDailog] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <CHeader name="History" icon="" />
      {dataTicket.length > 0 ? (
        <ScrollView style={{ padding: 20, flex: 1 }}>
          {dataTicket.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={() => {
                  setShowDailog(true);
                }}>
                <View style={styles.leftBox}>
                  <Text numberOfLines={2} style={styles.txtHotelName}>
                    {item.hotelName}
                  </Text>
                  <Text numberOfLines={2}>{item.location}</Text>
                  <Text>
                    {moment(item.startDay.startDate).format('MMMM Do YYYY')}
                  </Text>
                </View>
                <View style={styles.rightBox}>
                  <QRCode value={'hello'} size={50} />
                </View>
                <Modal
                  isVisible={showDailog}
                  avoidKeyboard={true}
                  onBackdropPress={() => {
                    setShowDailog(false);
                  }}>
                  <View style={styles.ticket}>
                    <View style={styles.container}>
                      <Text style={styles.nameHotel}>{hotelName}</Text>
                      <Text style={styles.loactionName}>{location}</Text>
                      <View style={styles.rowChekin}>
                        <View style={{ alignItems: 'center' }}>
                          <Text style={styles.date}>
                            {moment(item.startDay.startDate).format('DD - MM')}
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
                            {moment(item.startDay.endDate).format('DD - MM')}
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
                          <Text style={styles.value}>
                            {item.totalPeople + ' Người'}
                          </Text>
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
                      <Text style={styles.txtTotal}>
                        {'Tổng: ' + item.Price + 'VND'}
                      </Text>
                    </View>

                    <View style={styles.qRCode}>
                      <QRCode
                        value={'hello'}
                        size={
                          Platform.OS === 'android' ? scale(100) : scale(200)
                        }
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.done}
                      onPress={() => {
                        setShowDailog(false);
                      }}>
                      <Text style={styles.txtdone}>Xong</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            source={require('@src/assets/img/empstyTicket.png')}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contaimer: {
    height: heightScreen,

    alignItems: 'center',
  },
  header: {
    padding: 15,
    backgroundColor: '#ffff',
    width: '100%',
    height: heightScreen / 9,
  },
  titles: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  boxContent: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ababab',
    fontSize: 18,
    lineHeight: 30,
  },
  subHeader: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
  },
  boxItem: {
    marginBottom: scale(15),
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 0.4,
    borderColor: '#b9b9b9',
  },
  leftBox: {
    flex: 3,
  },
  rightBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txtHotelName: {
    fontSize: 18,
    fontWeight: '500',
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
    width: '70%',
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
});

// const mapStateToProps = state => {
//   return { data: state.Like };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     unLike: data => dispatch({ type: 'UnLike', data }),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(History);
const mapStateToProps = state => {
  return { dataTicket: state.BuyTicket };
};
export default connect(
  mapStateToProps,
  null,
)(History);
