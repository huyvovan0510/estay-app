import { StyleSheet, Platform } from 'react-native';
import { heightScreen } from '../../comon/Dimensions';
import { widthScreen } from '@src/comon/Dimensions';
import Util from '@src/comon/Util';
const { scale } = Util;
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
    marginBottom: scale(10),
    color: '#ffff',
    fontSize: 33,
    fontWeight: '500',
  },
  txtLocation: {
    marginLeft: scale(10),
    color: '#ffff',
    fontSize: 15,
  },
  rowLocation: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  numRate: {
    marginLeft: scale(20),
    color: '#ffff',
    fontSize: 15,
  },
  rowRate: {
    paddingBottom: 10,
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
  txtCategory: { marginLeft: scale(10), color: '#ffff', fontSize: 15 },
  txtLiner: {
    paddingVertical: heightScreen / 7,
  },
  img: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
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
    paddingHorizontal: scale(15),
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
  },
  boxServer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    // marginRight: scale(25),
    // paddingVertical: scale(30),
    // paddingHorizontal: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(150),
    height: scale(100),
    paddingHorizontal: scale(5),
    marginHorizontal: scale(15),
  },
  txtService: {
    fontSize: 16,
  },
  service: {
    marginVertical: scale(10),
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
  },
  avata: {
    marginRight: scale(10),
    width: scale(45),
    height: scale(45),
    borderRadius: 22,
    backgroundColor: 'red',
  },
  title: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  review: {
    fontSize: 25,
    fontWeight: '300',
    marginBottom: scale(20),
  },
  useName: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: scale(25),
  },
  txtContentReviews: {
    color: '#707070',
    fontSize: 14,
    lineHeight: 20,
  },
  btnReadAll: {
    marginTop: scale(20),
    alignSelf: 'center',
    paddingHorizontal: scale(30),
    paddingVertical: scale(15),
    borderRadius: 4,
    borderColor: '#ff1f75',
    borderWidth: 2,
  },
  readAll: {
    color: '#ff1f75',
  },
  headerDetails: {
    width: '100%',
    padding: scale(15),
    position: 'absolute',
    top: Platform.OS === 'ios' ? '8%' : '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  book: {
    padding: scale(15),
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
  dailog: {
    width: widthScreen - 40,
    height: scale(500),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 8,
  },
  btnGoBack: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  options: {
    width: '100%',

    backgroundColor: 'red',
  },
});
export default styles;
