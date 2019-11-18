import { StyleSheet, Platform } from 'react-native';
import { widthScreen } from '@src/comon/Dimensions';
import Util from '@src/comon/Util';
const { scale } = Util;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: scale(0),
    left: scale(0),
    right: scale(0),
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: scale(28),
    height: scale(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  itemCategory: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxCategory: {
    marginTop: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    color: '#8d8d8d',
    margin: scale(5),
  },
  BoxTitle: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',

    alignItems: 'center',
  },
  titleTopHotel: {
    fontWeight: '500',
    fontSize: 18,
    color: 'red',
  },
  txtViewMore: {
    fontWeight: '300',
    fontSize: 12,
  },
  container: {
    paddingHorizontal: scale(15),
  },
  category: {
    alignItems: 'center',
    width: scale(widthScreen / 3 - 30),
    justifyContent: 'center',
  },
  boxCarưosel: {
    // marginTop: Platform.OS === 'ios' ? scale(5) : scale(115),
  },
  searchBar: {
    marginTop: Platform.OS === 'android' ? 0 : scale(35),
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 8,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  // input: {
  //   width: '100%',
  //   height: 35,
  //   padding: 5,
  // },
  input: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#ffff',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default styles;
