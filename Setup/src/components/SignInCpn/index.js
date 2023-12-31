import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import Icons from '@src/comon/Icon';
import LottieView from 'lottie-react-native';

const SignInCpn = ({ navigation }) => {
  const [showDailog, setShowDailog] = useState(false);

  let email = '';
  let passWord = '';
  let phoneNumber = '';
  let username = '';
  const onSumit = (email, passWord, phoneNumber, username) => {
    axios
      .post('https://estay.herokuapp.com/api/users/registration', {
        email: email,
        password: passWord,
        username: username,
        phonenumber: phoneNumber,
      })
      .then(function(response) {
        response.status === 200 ? setShowDailog(true) : null;
        //// bật dailog
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  const closeDailog = () => {
    setShowDailog(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <TextInput
          placeholder={'Email ...'}
          style={styles.input}
          onChangeText={text => {
            email = text;
          }}
        />
        <TextInput
          placeholder={'Username ...'}
          style={styles.input}
          onChangeText={text => {
            username = text;
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
        <TextInput
          placeholder={'PassWord ...'}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder={'Phone Number ...'}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => {
            phoneNumber = text;
          }}
        />
      </ScrollView>
      <Modal isVisible={showDailog} avoidKeyboard={true}>
        <DailogError closeDailog={closeDailog} />
      </Modal>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => {
          onSumit(email, passWord, phoneNumber, username);
        }}>
        <Text style={styles.txtLogin}> Registration</Text>
      </TouchableOpacity>
    </View>
  );
};
const DailogError = ({ closeDailog }) => {
  return (
    <View style={styles.contentDailog}>
      <View style={{ width: 200, height: 200 }}>
        <LottieView
          width={200}
          source={require('@src/assets/annimated/sucessful.json')}
          loop={false}
          autoPlay
        />
      </View>
      <Text style={styles.textError}>Registration successful</Text>
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

export default SignInCpn;
