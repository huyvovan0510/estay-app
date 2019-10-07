import { StyleSheet } from 'react-native';
import { heightScreen } from '../../comon/Dimensions';
const styles = StyleSheet.create({
  boxImg: {
    height: heightScreen / 1.5,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  BoxTitle: {
    backgroundColor: '#000',
    padding: 15,
  },
  hotelName: {
    marginBottom: 10,
    color: '#ffff',
    fontSize: 33,
    fontWeight: '500',
  },
  txtLocation: {
    marginLeft: 10,
    color: '#ffff',
    fontSize: 15,
  },
  rowLocation: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  numRate: {
    marginLeft: 20,
    color: '#ffff',
    fontSize: 15,
  },
  rowRate: {
    flexDirection: 'row',
    borderColor: '#4f4e4e',
    borderBottomWidth: 1,

    marginVertical: 5,
    alignItems: 'center',
  },
  boxHastag: {
    backgroundColor: '#4f4e4e',
  },
  rowHastag: {
    flex: 1,
  },
  rowCategoty: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCategory: { marginLeft: 20, color: '#ffff', fontSize: 15 },
  txtLiner: {
    paddingVertical: heightScreen / 7,
  },
  img: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  btnRooms: { margin: 5, padding: 8, borderWidth: 1, borderRadius: 4 },
  txtRooms: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
  },
  boxRooms: {
    borderBottomWidth: 1,
    borderColor: '#4f4e4e',
    paddingBottom: 5,
  },
  roomStatus: {
    marginTop: 10,
    color: '#a8a8a8',
    fontSize: 16,
  },
  status: {
    color: '#e3e3e3',
    fontSize: 16,
  },
  dec: {
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  txtConten: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '300',
  },
  txtDetails: {
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
  },
  boxServer: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    marginRight: 25,
    paddingVertical: 30,
    paddingHorizontal: 35,
  },
  txtService: {
    fontWeight: '600',
    fontSize: 18,
  },
  service: {
    marginVertical: 10,
    fontSize: 25,
    lineHeight: 35,
    fontWeight: '500',
  },
  avata: {
    marginRight: 10,
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: 'red',
  },
  title: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  review: {
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
  },
  useName: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
  },
  txtContentReviews: {
    color: '#707070',
    fontSize: 14,
    lineHeight: 20,
  },
  btnReadAll: {
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 4,
    borderColor: '#6abd96',
    borderWidth: 2,
  },
  readAll: {
    color: '#6abd96',
  },
  headerDetails: {
    width: '100%',
    padding: 15,

    position: 'absolute',
    top: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  book: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: '100%',
    height: 70,
  },
  btnBook: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

    borderRadius: 8,
  },
  price: {
    fontWeight: '400',
    fontSize: 14,
  },
  numPrice: {
    fontSize: 16,
  },
  txtbookNow: {
    color: '#ffff',
  },
});
export default styles;
