import { widthScreen, heightScreen } from '../../comon/Dimensions';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  boxItem: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: widthScreen / 2.4,
    height: heightScreen / 3.5,
  },
  imgBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  comtentBox: {
    flex: 1,
  },
  hotelName: {
    marginBottom: 5,
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
    marginLeft: 5,
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
    marginTop: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  boxSale: {
    width: 90,
    height: 25,
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
