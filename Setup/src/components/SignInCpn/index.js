import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import Icons from '@src/comon/Icon';
const SignInCpn = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center',
        backgroundColor: '#ffff',
      }}>
      <TextInput placeholder={'Usename ...'} style={styles.input} />
      <TextInput placeholder={'Email ...'} style={styles.input} />

      <TextInput
        placeholder={'PassWord ...'}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder={'PassWord ...'}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Dăng Ki</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SignInCpn;
