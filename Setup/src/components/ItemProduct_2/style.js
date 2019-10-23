import { StyleSheet } from 'react-native';
import { heightScreen } from '../../comon/Dimensions';
import Util from '@src/comon/Util';
const { scale } = Util;
const styles = StyleSheet.create({
  shadow: {},
  boxItem: {
    backgroundColor: '#ffff',
    marginVertical: scale(5),
    flexDirection: 'row',
    width: '100%',
    height: scale(100),
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imgContainer: {
    width: scale(90),
    height: scale(90),
  },

  thumbImg: {
    overflow: 'hidden',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(10),
  },

  container: {
    flex: 1,
    padding: scale(10),
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
    padding: 5,
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
});
export default styles;
