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
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
          pa
          resizeMode="cover"
          source={{
            uri:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0ICA0HBw0HBwcHBw0HBwcHBw8ICQcNFREWFhURExMYHSggGCYlGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRk3Ky0tKy0rKy0rLSstNzctKy03Kys3LSsrKysrKysrKysrKysrKysrKysrLSsrKysrK//AABEIAJ0BQQMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAgMBBwYE/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAbAQADAQEBAQEAAAAAAAAAAAAAAQIDBAUHBv/EABoRAQEBAQEBAQAAAAAAAAAAAAABEQISAxP/2gAMAwEAAhEDEQA/AOjeRhw/CPa0uNxuNwtLS43G40aNLjcaC0mAAaGswAegMLYZi+foZbC2HrK6ePoE7C2KUtdPHakrC2K0ldPPRpWFsUpK6OaadhLFaSt+apOwlilJW/KonS09JWsVCUlUpK1ioSlpqStJFQtJaakqsXC2p9U/SfQxpCdVDuq9VHuqxvyl3UuqfupUOjmAFBNMdUazQ+c6/LNYwaNNoZrNT6GGBdZpehhtGl0aXo8NrNZrNT6GG0aXRpehhtYzRqp9cGClrWV1fP7nhaSw9LXd8/qadJVKTp28dqTpKek6dXHRkqdPSV0c1UJS01TrfmqjLSWttJa2i5GWktbaTqtIuQtpLTWp2rXIzqp9U3VS6oa8wvVQ7p+6h3Tb8cl7qdNaUnRIAASnUNGp+h6fMv0fmcU1mk9D0n9Bh9Gp6NT+gw+jSazS9nims0mjS9jD6NJo0vYw+s0ujS9nhtGl1ml6GH0aTW6c+lgxtLW6yu34/cYWk6PSV6fy+umnU+lOk+nofPtUT6T6U6T6dnHSpCVOn6T6dPNXIW1O01pOq35q5C2k6rbU+q1lXIy0nVban1Va0nJeql103rpHvo9b88l76S6reqSm35jKADaAAEHSNGk0a+Ta/PYfRpNGjRh9Gk0aBh9Gk0aBhtGl0aBhtGl0aBhtGlGkMNo0ujQMNo0ujQMNo0ujV8XKMbS0Wsr0/h2MJ0To9T6ep8ulRPpPpTpLp6HzqoTpLpTpLp18VpISp9U/SXVdPNaSF6qdpuqna1laSF6qXdP1UOqqNeYXqo9U/VTq435haSmpcU0gAYDaGAB0PRpPTPT5V5eFimjU/Q9DyMU0an6HoeRimjUvQ9DyMV0al6bo8jFNGp+h6HgYpo1P0PR+BimjU/Q9F4GKaNT9D0fgYpo1P0PSufnSxTWWk9Mtdvy4wY20lotLa9P5QYXpLpTqpdO/5rhOkulOkunbw0ifSXVU6qXTp5aSE6T6P1U+msayJ91HpTtOrjXlPoh+i1UawpcPSqVClPS01MAAD3ms9EtZr5lOXi4f0PSfpno/J4r6Z6S9D0fk8V9D0l6Z6HgYt6HpH0PR+B5W9D0j6Ho/A8reh6Q9D2fgeV/Q9Ie2ez/MeV/Y9vn9t9qnyHlf030h6Hptz8R5fR6HpD0306OPknFbS2k9C118cjBan1W2ktdnEOQvVT6puqn1XXxFxPpPo/SddPLWEqfR6n00jSJ9J0/RKuNYnWU9jLFLJS09jKapSUtOSmqFABm9raW0Utr5vI8jG6z0XWWqxWG9M9EtZqvJ4p6Z6T0afkYp6HpLR6V5PFPTPSfpnpU4GK+h6S9M9KnB+VfTPSXoemk+Z4r6b6R9N9Np8yxb030j6b6a8/MsW9N9I+h6a88Jxb0PSXoem3PBYpeiWl9MtdHPIxvVS6NaTquniKkJ0nT0lbxpCVPpSkq4uJUtilhbFtJU7GWHsLTVKnS09LTVCUtNS1S4QAGp7Klp6SvnEeTCUtPSVpFRlZopaqKbrNYxcht1msrLVSHhtZpdZrSQ8brNZazVyHhtGlGteYMNrdJo1tzyMPrdJo1tOU4prfSejWk5GKehqet1rOSw+jSaNa8wsNaS0aytuRjKSmZW0USksUpbFKTsZYpS2GrUrCWK9J9KXCUlPSVUXCUlPSVUaRgAM3saWqWEsfN48mJ0tPYWxpFxOlp6WrioRhqWtIplY2sq4bGNpa0hhgY0htDA15DQyNbcgNYG0JojA0gMNLrWsJoYGsIAMaQBjWNIGUpqyqMtLTUtVFRPpOqdJdKi4WkpqWqaQlLT0lVFwoaDN7OwtilJXzWV5MTsLYpS1pKqJWFsVsLYuVUqVhbFLC2NJVSp2FUsLY0lVpKw1jK0lUVhmLlMoaMa80AANuaAAG/NIABrAAGtYTAGtYTABWkAAY0gFLW0tVDZSdGpOquKhOk6alq4uEpaalqlwtLTVlNUpGhpnr//2Q==',
          }}>
          <View style={styles.avatar} />
          <View style={styles.content}>
            <Text style={styles.userName}>Tên Tài Khoản</Text>
            <Text style={styles.Wallet}>Ví {0} VND</Text>
          </View>
        </ImageBackground>
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
    color: '#fff',
    lineHeight: 30,
    paddingVertical: 5,
  },
  Wallet: {
    color: '#ffff',
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
