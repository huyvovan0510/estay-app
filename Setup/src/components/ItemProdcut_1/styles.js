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
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: widthScreen / 2.4,
    height: scale(230),
  },
  imgBox: {
    flex: 1,
    backgroundColor: 'red',
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
    fontSize: 10,
    color: '#000',
  },
  textContent: {
    flex: 1,
    padding: scale(5),
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
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
});
export default styles;
