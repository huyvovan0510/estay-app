import { Platform, StyleSheet } from 'react-native';

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

    fontSize: 20,
    color: '#ffff',
    fontWeight: '500',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
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
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  input: {
    backgroundColor: '#ffff',
    width: 280,
    height: 35,
    padding: 5,
  },
  btnIcon: {
    padding: 15,
  },
});
export default styles;
