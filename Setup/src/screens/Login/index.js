import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  Image,
} from 'react-native';
import Icons from '@src/comon/Icon';
import LoginCpn from '@src/components/LoginCpn';
import SignInCpn from '@src/components/SignInCpn';
import { TabView, SceneMap } from 'react-native-tab-view';

const Login = ({ navigation }) => {
  const [indexTab, setIndextab] = useState(1);
  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View style={styles.topBox}>
        <Image
          source={require('@src/assets/img/logo.png')}
          style={{ width: 113, height: 56 }}
        />
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.topTabbar}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.tabItem, { backgroundColor: '#fff' }]}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setIndextab(1);
            }}>
            <Text style={{ color: indexTab === 1 ? '#ff1f75' : '#c8c8c8' }}>
              Log in
            </Text>
            <View style={indexTab === 1 ? styles.tabBarSelect : {}} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.tabItem]}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setIndextab(2);
            }}>
            <Text style={{ color: indexTab === 2 ? '#ff1f75' : '#c8c8c8' }}>
              Registration
            </Text>
            <View style={indexTab === 2 ? styles.tabBarSelect : null} />
          </TouchableOpacity>
        </View>
        {indexTab === 1 ? <LoginCpn navigation={navigation} /> : <SignInCpn />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    backgroundColor: '#f2f2f2',
    flex: 3,
  },
  topTabbar: { width: '100%', height: 50, flexDirection: 'row' },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#ffff',
  },
  tabBarSelect: {
    marginTop: 5,
    width: 50,
    height: 5,
    backgroundColor: '#ff1f75',
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  lineLogo: {
    backgroundColor: '#ff1f75',
    width: 50,
    height: 5,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Login;
