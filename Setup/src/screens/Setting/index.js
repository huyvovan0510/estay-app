import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
import LinearGradient from 'react-native-linear-gradient';
const Settig = [
  { id: '1', name: 'Thông tin chi tiết', icon: 'user', type: 'AntDesign' },
  {
    id: '2',
    name: 'Xác minh tài khoản',
    icon: 'check-circle',
    type: 'Feather',
  },
  {
    id: '3',
    name: 'Liên hệ với chúng tôi',
    icon: 'contacts',
    type: 'AntDesign',
  },
  { id: '1', name: 'Cài đặt', icon: 'setting', type: 'AntDesign' },
];

const Setting = ({ navigation }) => {
  const login = false;
  const _renderItems = ({ item, index }) => {
    return (
      <View style={styles.boxItems}>
        <View style={styles.lefBox}>
          <Icons name={item.icon} size={30} color="#8a8a8a" type={item.type} />
          <Text style={styles.txtOptioms}>{item.name}</Text>
        </View>
        <Icons name="right" size={25} type="AntDesign" color="#8a8a8a" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      {!login ? (
        <View style={styles.Login}>
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <Image
              source={require('@src/assets/img/login.png')}
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: '15%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.txtJonh}>Tham gia ngay với chúng tôi</Text>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.txtLogin}>Đăng Nhập </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.header}>
            <View style={styles.useRow}>
              <View style={styles.avatar} />
              <View style={styles.content}>
                <Text style={styles.userName}>Tên Tài Khoản</Text>
                <Text style={styles.Wallet}>Ví {0} VND</Text>
              </View>
            </View>
          </View>
          <View>
            <FlatList
              scrollEnabled={false}
              data={Settig}
              renderItem={_renderItems}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: heightScreen / 5,
  },
  avatar: {
    width: 90,
    height: 90,
    backgroundColor: '#c8c8c8',
    borderRadius: 45,
    margin: 20,
  },
  content: {
    flex: 1,
    marginVertical: 30,
  },
  userName: {
    fontWeight: '500',
    fontSize: 20,
    color: '#000',
    lineHeight: 30,
    paddingVertical: 5,
  },
  Wallet: {
    color: '#000',
    fontSize: 15,
  },
  boxItems: {
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lefBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtOptioms: {
    color: '#707070',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 20,
    marginLeft: 15,
  },
  useRow: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLogin: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1f75',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  btnSignIn: {
    backgroundColor: '#fff',
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLWarning: {
    fontSize: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtJonh: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  txtLogin: {
    color: '#ffff',
    fontWeight: '500',
  },
});

export default Setting;
