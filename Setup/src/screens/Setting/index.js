import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import { heightScreen } from '@src/comon/Dimensions';
import Icons from '@src/comon/Icon';
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
const Setting = () => {
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
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
          renderItem={({ item, index }) => {
            return (
              <View style={styles.boxItems}>
                <View style={styles.lefBox}>
                  <Icons
                    name={item.icon}
                    size={30}
                    color="#8a8a8a"
                    type={item.type}
                  />
                  <Text style={styles.txtOptioms}>{item.name}</Text>
                </View>
                <Icons
                  name="right"
                  size={25}
                  type="AntDesign"
                  color="#8a8a8a"
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Setting;
