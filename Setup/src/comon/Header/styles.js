import { Platform, StyleSheet } from 'react-native';
import { widthScreen } from '@src/comon/Dimensions';
const HEADER_MAX_HEIGHT = 110;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 80 : 93;
const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 25,
    color: 'red',
    fontWeight: '500',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    height: 50,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',

    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  title: {
    color: '#ffff',
    fontWeight: '500',
    fontSize: 30,
    marginTop: 50,
    alignSelf: 'center',
  },

  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: widthScreen - 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 8,
    padding: 5,
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  input: {
    width: '100%',
    height: 35,
    padding: 5,
  },
  btnIcon: {
    padding: 15,
  },
});
export default styles;
