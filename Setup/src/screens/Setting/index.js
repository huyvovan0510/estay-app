import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const Setting = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(null);
  AsyncStorage.getItem('inforUser', (_err, result) => {
    setIsLogin(JSON.parse(result));
  });
  const onLogout = async () => {
    try {
      await AsyncStorage.setItem('inforUser', JSON.stringify(null));
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      {!isLogin ? (
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
              <Text style={styles.txtJonh}>Join now with us !</Text>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.txtLogin}> Log in </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <LinearGradient
          colors={['#ff1f75', '#ef9995']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.avatar} />
          <Text style={styles.userName}>{isLogin.username}</Text>
          <Text style={styles.Wallet}>{isLogin.email}</Text>
          <TouchableOpacity
            onPress={() => {
              onLogout();
            }}>
            <LinearGradient
              colors={['#F9c449', '#ef9995']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 250,
                height: 60,
                borderRadius: 50,
                marginTop: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: '#fff', fontSize: 20 }}>Log out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );
};
const InfoItem = ({ icon, data, type }) => {
  return (
    <View style={styles.boxItems}>
      <View style={styles.lefBox}>
        <Icons name={icon} size={30} color="#ff1f75" type={type} />
        <Text style={styles.txtOptioms}>{data}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ff1f75',
    width: '100%',
    height: heightScreen / 5,
  },
  avatar: {
    overflow: 'hidden',
    width: 130,
    height: 130,
    backgroundColor: '#c8c8c8',
    borderRadius: 70,
    margin: 20,
    borderColor: '#ffff',
    borderWidth: 4,
  },
  content: {
    flex: 1,
    marginVertical: 30,
  },
  userName: {
    fontWeight: '500',
    fontSize: 30,
    color: '#fff',
    lineHeight: 30,
    paddingVertical: 5,
  },
  Wallet: {
    fontWeight: '500',
    color: '#d9d9d9',
    fontSize: 16,
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
    color: '#000',
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
