import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import Icons from '@src/comon/Icon';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';
const LoginCpn = ({ navigation }) => {
  const [showError, setShowError] = useState(false);
  let email = '';
  let passWord = '';
  const onLogin = (email, passWord) => {
    axios
      .post('https://estay.herokuapp.com/api/users/login', {
        email: email,
        password: passWord,
      })
      .then(function(response) {
        console.log(response.data);
        response.status === 200
          ? navigation.navigate('Home')
          : setShowError(true);
        // bật dailog
        saveInForUser(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const saveInForUser = async data => {
    try {
      await AsyncStorage.setItem('inforUser', JSON.stringify(data));
    } catch (e) {
      // saving error
    }
  };

  const closeDailog = () => {
    setShowError(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Usename ...'}
        style={styles.input}
        onChangeText={text => {
          email = text;
        }}
      />
      <TextInput
        placeholder={'PassWord ...'}
        style={styles.input}
        secureTextEntry
        onChangeText={text => {
          passWord = text;
        }}
      />
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => {
          onLogin(email, passWord);
        }}>
        <Text style={styles.txtLogin}>Log in</Text>
      </TouchableOpacity>
      <Modal isVisible={showError} avoidKeyboard={true}>
        <DailogError closeDailog={closeDailog} />
      </Modal>
    </View>
  );
};

const DailogError = ({ closeDailog }) => {
  return (
    <View style={styles.contentDailog}>
      <View style={{ width: 200, height: 200 }}>
        <LottieView
          width={200}
          source={require('@src/assets/annimated/error.json')}
          loop={false}
          autoPlay
        />
      </View>
      <Text style={styles.textError}> Opps: Email or Password Invalid !</Text>
      <TouchableOpacity
        style={styles.btnClose}
        onPress={() => {
          closeDailog();
        }}>
        <Text style={styles.txtOk}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  topBox: {
    flex: 1,
  },
  bottomBox: {
    flex: 3,
    backgroundColor: 'red',
  },
  input: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#c6c6c6',
    padding: 10,
  },
  btnLogin: {
    marginTop: 50,
    width: '100%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ff1f75',
    shadowColor: Platform.OS === 'ios' ? '#ff1f75' : '#fff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: Platform.OS === 'ios' ? 14 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    fontSize: 18,
    color: '#Ffff',
    fontWeight: '500',
  },
  contentDailog: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
  },
  textError: {
    fontSize: 18,
    lineHeight: 28,
  },
  btnClose: {
    marginTop: 30,
    width: 80,
    height: 50,
    backgroundColor: '#ff1f75',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtOk: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default LoginCpn;
