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
    marginVertical: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginTop: Platform.OS === 'ios' ? scale(5) : scale(115),
  },
});
export default styles;
