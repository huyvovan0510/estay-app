import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from '@src/comon/Icon';
import LottieView from 'lottie-react-native';
import ItemProdcut_2 from '@src/components/ItemProduct_2';
import axios from 'axios';

const Search = ({ navigation }) => {
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const getdata = () => {
    axios
      .get('https://estay.herokuapp.com/hotels/getData')
      .then(function(response) {
        response ? setHotelsData(response.data) : setHotelsData([]);
        setLoading(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  const onSearch = text => {
    let t = text.length > 0 ? text.toLowerCase() : '';
    let data = hotelsData.filter(
      x => x.location.toLowerCase().search(t) !== -1,
    );
    setSearch(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="search" type="Feather" color="#d8d8d8" />
        </TouchableOpacity>
        <TextInput
          style={{ paddingHorizontal: 10, width: '90%' }}
          placeholder={'Where you want to go...'}
          onChangeText={onSearch}
        />
        <Icon name="closecircle" type="AntDesign" color="#d8d8d8" />
      </View>

      {search.length === 0 ? (
        <View style={{ flex: 1 }}>
          <LottieView
            source={require('@src/assets/annimated/Search.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <ScrollView style={styles.content}>
          <FlatList
            data={search}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    //navigate to Details product scerren  and pass data
                    navigation.push('DetailsProduct', { data: item });
                  }}>
                  <ItemProdcut_2 data={item} />
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#fff',

    marginTop: Platform.OS === 'ios' ? 40 : 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
export default Search;
