/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import Icons from '@src/comon/Icon';
import Util from '@src/comon/Util';
const { scale } = Util;

class IconWithBadge extends React.PureComponent {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  render() {
    const { name, badgeCount, color, size, typeIcon } = this.props;
    return (
      <View
        style={{
          width: scale(28),
          alignItems: 'center',
        }}>
        <Icons type={typeIcon} name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: scale(-10),
              top: scale(-4),
              backgroundColor: 'red',
              borderRadius: scale(8),
              width: scale(16),
              height: scale(16),
              justifyContent: 'center',
              alignItems: 'center',
              margin: scale(1),
              padding: scale(0.5),
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = IconWithBadge;
  let iconName;
  let typeIcon;
  let badgeCount;
  switch (routeName) {
    case 'Home':
      // iconName = focused ? 'home' : 'github';
      iconName = 'home';
      typeIcon = 'AntDesign';
      badgeCount = 0;
      // IconComponent = IconWithBadge;
      break;
    case 'map':
      // iconName = focused ? 'apple' : 'apple-pay';
      iconName = 'hearto';
      typeIcon = 'AntDesign';
      badgeCount = 0;
      // IconComponent = IconWithBadge;
      break;
    case 'Setting':
      // iconName = focused ? 'apple' : 'apple-pay';
      iconName = 'user';
      typeIcon = 'Feather';
      badgeCount = 0;
      // IconComponent = IconWithBadge;
      break;
    case 'History':
      // iconName = focused ? 'apple' : 'apple-pay';
      iconName = 'access-time';
      typeIcon = 'MaterialIcons';
      badgeCount = 0;
      // IconComponent = IconWithBadge;
      break;
    default:
      // iconName = focused ? 'gitkraken' : 'github';
      iconName = 'user';
      typeIcon = 'Feather';
      IconComponent = null;
      break;
  }

  // You can return any component that you like here!
  return (
    <IconComponent
      name={iconName}
      typeIcon={typeIcon}
      size={focused ? 30 : 23}
      color={tintColor}
      badgeCount={badgeCount}
    />
  );
};

export default getTabBarIcon;
