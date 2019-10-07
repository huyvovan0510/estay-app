import { StyleSheet } from 'react-native';
import { heightScreen } from '@src/comon/Dimensions';

const styles = StyleSheet.create({
  boxItems: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  img: { width: '100%', height: '100%' },
  boxImg: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: heightScreen / 4,
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rowCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  txtCategory: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '300',
  },
  txtLocation: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '300',
  },
  hotelName: {
    paddingVertical: 5,
    fontWeight: '400',
    fontSize: 20,
  },
  contenBox: {
    paddingHorizontal: 5,
  },
  price: {
    fontSize: 12,
  },
  heart: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
});
export default styles;
