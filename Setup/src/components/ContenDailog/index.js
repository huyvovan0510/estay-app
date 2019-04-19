/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Icons from '@src/comon/Icon';
import StarRating from 'react-native-star-rating';
import { widthScreen, heightScreen } from '@src/comon/Dimensions';
import ItemComents from '@src/components/ItemComment';
let content = '';
const ContentDailog = ({ data, unLike }) => {
  const [Comments, setComments] = useState([]);
  const [isComment, setIComments] = useState(true);
  const [countStart, setCountStart] = useState(0);

  const ratingCompleted = rating => {
    setCountStart(rating);
  };
  const handelSubmit = () => {
    let newComments = { id: Math.random() + '', content: content };
    let tempComments = Comments.concat(newComments);
    setComments(tempComments);
  };
  const getValue = text => {
    content = text;
    return content;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons name="close" type="AntDesign" size={25} />
        <Text style={styles.titleRating}>Đánh giá</Text>
      </View>
      <View style={styles.ratingBox}>
        <StarRating
          containerStyle={{ width: widthScreen / 2 }}
          starSize={35}
          animation="swing"
          emptyStarColor={'#c9c9c9'}
          starStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          fullStarColor={'#ffe819'}
          disabled={false}
          maxStars={5}
          rating={countStart}
          selectedStar={rating => ratingCompleted(rating)}
        />
      </View>
      <View style={styles.boxComment}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Comments}
          renderItem={({ item, index }) => {
            return <ItemComents data={item} />;
          }}
        />
      </View>
      {isComment ? (
        <View style={styles.inputComment}>
          <TextInput
            style={styles.input}
            placeholder="Your comment...."
            multiline={true}
            numberOfLines={4}
            scrollEnabled={true}
            onChangeText={text => getValue(text)}
          />
          <TouchableOpacity
            style={styles.btnSen}
            onPress={() => {
              handelSubmit();
              setIComments(false);
            }}>
            <Icons
              name="send-o"
              type="FontAwesome"
              size={30}
              color="#dbdbdb"
              munti
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.finishCmt}>
          <Icons name="check" size={30} color="#22ff00" />
          <Text>Cảm ơn bạn đã đánh giá chúng tôi !</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 15,
  },
  ratingBox: {
    marginHorizontal: 0,
  },
  titleRating: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    marginLeft: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  boxComment: {
    width: '100%',
    height: '65%',

    padding: 5,
  },
  inputComment: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    padding: 10,
    width: '80%',
    height: 40,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderWidth: 1,
    elevation: 8,
  },
  btnSen: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
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
  finishCmt: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ContentDailog;
