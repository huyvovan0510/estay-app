import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  Text,
  View,
  RefreshControl,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const HEADER_MAX_HEIGHT = 110;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 80 : 93;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View
        style={{ paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0 }}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 500);
              }}
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}>
          {this.props.children}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}>
          <ImageBackground
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
            style={styles.backgroundImage}>
            <Animated.View
              style={{
                backgroundColor: 'transparent',
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              }}>
              <View style={styles.searchBar}>
                <TouchableOpacity>
                  <TextInput
                    style={styles.input}
                    blurOnSubmit
                    placeholder="Where are you  ?"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnIcon}>
                  <Icon name="search" size={21} color={'#ffff'} />
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              marginTop: Platform.OS === 'ios' ? 28 : 38,
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}>
          <Text style={styles.logo}>Boooking Room</Text>
        </Animated.View>
      </View>
    );
  }
}
