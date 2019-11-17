import { widthScreen, heightScreen } from '../../comon/Dimensions';
import { StyleSheet } from 'react-native';
import Util from '@src/comon/Util';
const { scale } = Util;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxItem: {
    marginBottom: scale(10),
    backgroundColor: '#ffff',
    borderRadius: 8,
    overflow: 'hidden',
    width: widthScreen / 2.4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgBox: {
    overflow: 'hidden',
    borderRadius: 8,
    width: widthScreen / 2.4,
    height: scale(90),
  },
  comtentBox: {
    flex: 1,
  },
  hotelName: {
    marginBottom: scale(5),
    color: '#000',
    fontSize: 17,
    fontWeight: '500',
  },
  decHotel: {
    color: '#363636',
    fontWeight: '300',
    fontSize: 10,
  },
  txtLocation: {
    marginLeft: scale(5),
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
  },
  textContent: {
    flex: 1,
    padding: scale(5),
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  boxSale: {
    width: scale(90),
    height: scale(25),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: '-10%',
  },
  txtPrice: {
    marginLeft: scale(5),
    fontWeight: '300',
    fontSize: 15,
    color: '#000',
    marginVertical: 5,
  },
});
export default styles;
