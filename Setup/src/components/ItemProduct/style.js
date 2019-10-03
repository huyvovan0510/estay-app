import { widthScreen, heightScreen } from '../../comon/Dimensions';
import { StyleSheet } from 'react-native';

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
    marginRight: 10,
    marginVertical: 10,
    width: widthScreen - 30,
    height: heightScreen / 5,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 15,
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
    marginLeft: 5,
    fontSize: 10,
    color: '#f5f5f5',
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
export default styles;
