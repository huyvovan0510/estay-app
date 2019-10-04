import React from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Icons = ({ type, name, color, size, style }) => {
  switch (type) {
    case 'MaterialIcons':
      return (
        <MaterialIcons name={name} color={color} size={size} style={style} />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'Feather':
      return <Feather name={name} color={color} size={size} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} color={color} size={size} style={style} />;
    case 'Octicons':
      return <Octicons name={name} color={color} size={size} style={style} />;
    case 'Foundation':
      return <Foundation name={name} color={color} size={size} style={style} />;
    case 'SimpleLineIcons':
      return (
        <IconSimpleLineIcons
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    case 'EvilIcons':
      return <EvilIcons name={name} color={color} size={size} style={style} />;
    case 'AntDesign':
      return <AntDesign name={name} color={color} size={size} style={style} />;
    case 'Entypo':
      return <Entypo name={name} color={color} size={size} style={style} />;
    case 'FontAwesome':
      return (
        <FontAwesome name={name} color={color} size={size} style={style} />
      );
    default:
      return (
        <FontAwesome5 name={name} color={color} size={size} style={style} />
      );
  }
};

Icons.defaultProps = {
  icon: '',
  color: 'black',
  size: 20,
};

Icons.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
};

export default React.memo(Icons);
