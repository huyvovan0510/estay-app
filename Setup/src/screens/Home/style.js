import { StyleSheet } from 'react-native';
import { widthScreen } from '@src/comon/Dimensions';

const styles = StyleSheet.create({
  boxCarosel: {
    marginTop: 3,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxCategory: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    color: '#8d8d8d',
    margin: 5,
  },
  BoxTitle: {
    marginVertical: 10,
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
    paddingHorizontal: 15,
  },
  category: {
    alignItems: 'center',
    width: widthScreen / 3 - 30,
    justifyContent: 'center',
  },
});
export default styles;
