import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from 'react-native';

class CListView extends React.PureComponent {
  _loadFirst = false;
  _loadMore = true;
  _animatedEvent = null;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      scrollY: new Animated.Value(0),
    };
    const { renderStickyHeader, stickyHeaderHeight, headerHeight } = this.props;
    if (renderStickyHeader) {
      if (!stickyHeaderHeight || !headerHeight) {
        console.error(
          'Property `stickyHeaderHeight` and `headerHeight` is required',
        );
      }
    }
    this._animatedEvent = Animated.event([
      { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
    ]);
  }

  _renderHeader = () => {
    const { renderHeader } = this.props;
    if (renderHeader) {
      return renderHeader();
    }
    return null;
  };

  _renderFooter = () => {
    const { loading } = this.state;
    const { renderFooter } = this.props;
    if (!loading) {
      return null;
    }

    if (renderFooter) {
      return renderFooter();
    }

    return <ActivityIndicator animating size="large" />;
  };

  _renderEmpty = () => {
    const { data, renderEmpty } = this.props;
    const { loading, refreshing } = this.state;
    if (data.length > 0 || loading || refreshing || !this._loadFirst) {
      return null;
    }
    if (renderEmpty) {
      return renderEmpty();
    }
    return null;
  };

  _renderSeparator = () => {
    const { renderSeparator } = this.props;
    if (renderSeparator) {
      return renderSeparator();
    }
    return null;
  };

  _renderItem = ({ item, index }) => {
    const { renderItem } = this.props;
    if (renderItem) {
      return renderItem(item, index);
    }
    return null;
  };

  _onScroll = e => {
    this._animatedEvent(e);
    const { onScroll } = this.props;
    if (onScroll) {
      onScroll(e);
    }
  };

  _onContentSizeChange = (contentWidth, contentHeight) => {
    const { onContentSizeChange } = this.props;
    if (onContentSizeChange) {
      onContentSizeChange(contentWidth, contentHeight);
    }
  };

  refresh = () => {
    this._loadFirst = true;
    this._loadMore = true;
    this.setState(
      {
        refreshing: true,
      },
      () => {
        const { onRefresh } = this.props;
        if (onRefresh) {
          onRefresh(() => {
            this.setState({ refreshing: false, loading: false });
          });
        } else {
          this.setState({ refreshing: false, loading: false });
        }
      },
    );
  };

  loadMore = () => {
    if (!this._loadMore) {
      return;
    }
    this._loadMore = false;
    this._loadFirst = true;
    this.setState(
      {
        loading: true,
      },
      () => {
        const { onLoadMore } = this.props;
        if (onLoadMore) {
          onLoadMore(stop => {
            this._loadMore = stop;
            this.setState({ refreshing: false, loading: false });
          });
        } else {
          this.setState({ refreshing: false, loading: false });
        }
      },
    );
  };

  scrollToTop = () => {
    this.refs.ListView.scrollToOffset({ offset: 0 });
  };

  scrollToBottom = params => {
    this.refs.ListView.scrollToEnd(params);
  };

  scrollToIndex = index => {
    this.refs.ListView.scrollToIndex({ index });
  };

  loadData = () => {
    this._loadMore = true;
    this._loadFirst = false;
    this.loadMore();
  };

  render() {
    let {
      data,
      renderButtonTop,
      renderStickyHeader,
      stickyHeaderHeight,
      headerHeight,
      styleCustomStickyHeader,
      styleCustomButtonTop,
      keyExtractor,
      numColumns,
      inverted,
      style,
      showsHorizontalScrollIndicator,
      horizontal = false,
    } = this.props;
    if (!data) {
      return null;
    }
    return (
      <View style={style}>
        <FlatList
          ref="ListView"
          data={data}
          inverted={inverted}
          numColumns={numColumns}
          refreshing={this.state.refreshing}
          onRefresh={this.refresh}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          onScroll={this._onScroll}
          onContentSizeChange={this._onContentSizeChange}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={this._renderHeader}
          ListFooterComponent={this._renderFooter}
          ListEmptyComponent={this._renderEmpty}
          renderItem={this._renderItem}
          horizontal={horizontal}
        />
        {renderStickyHeader && (
          <Animated.View
            style={[
              styles.sticky_header,
              styleCustomStickyHeader,
              {
                height: stickyHeaderHeight,
                opacity: this.state.scrollY.interpolate({
                  inputRange: [headerHeight, headerHeight * 1.5],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            {renderStickyHeader()}
          </Animated.View>
        )}
        {renderButtonTop && data.length > 0 && (
          <Animated.View
            style={[
              styles.button_top,
              styleCustomButtonTop,
              {
                opacity: this.state.scrollY.interpolate({
                  inputRange: [50, 100],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <TouchableOpacity onPress={this.scrollToTop}>
              {renderButtonTop()}
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    );
  }
}

export default CListView;

const styles = StyleSheet.create({
  button_top: {
    position: 'absolute',
    right: '10%',
    bottom: '10%',
  },

  sticky_header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
