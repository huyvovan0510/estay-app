import { widthScreen, heightScreen } from '../../comon/Dimensions';
import { StyleSheet } from 'react-native';
import Util from '@src/comon/Util';
const { scale } = Util;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  boxItem: {
    alignSelf: 'center',
    marginRight: scale(10),
    marginVertical: scale(10),
    width: scale(widthScreen) - scale(30),
    height: scale(150),
    justifyContent: 'flex-end',
    borderRadius: scale(8),
    overflow: 'hidden',
    elevation: 5,
  },
  Liner: {
    width: '100%',
    height: '60%',
  },
  hotelName: {
    color: '#ffff',
    fontSize: 17,
    fontWeight: '500',
  },
  decHotel: {
    color: '#ffff',
    fontWeight: '300',
    fontSize: 10,
  },
  txtLocation: {
    marginLeft: scale(5),
    fontSize: 10,
    color: '#f5f5f5',
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(5),
  },
});
export default styles;
