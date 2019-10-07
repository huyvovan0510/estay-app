// import React from 'react';
// import { View, StatusBar, StyleSheet } from 'react-native';
// import { isDark } from '@Helper/getUI';
// import { LinearGradient } from 'expo-linear-gradient';
// import Util from '../Util';
// import CImage from '../CImage';

// const { getStatusBarHeight, getToolbarHeight } = Util;

// const heightStatusBar = getStatusBarHeight();
// const heightToolbar = getToolbarHeight();
// const styles = StyleSheet.create({
//   container: {
//     height: heightStatusBar + heightToolbar,
//     shadowOpacity: 0.75,
//     shadowRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: { height: 0, width: 0 },
//   },
//   content: {
//     marginTop: heightStatusBar,
//     flex: 1,
//   },
//   linearView: {
//     flex: 1,
//   },
//   bgImg: {
//     ...StyleSheet.absoluteFill,
//   },
// });

// function CHeader(props) {
//   let { bgColor = '#000', bgImage = '' } = props;
//   return (
//     <View style={styles.container} elevation={6}>
//       <LinearGradient
//         colors={[bgColor, bgColor]}
//         {...props}
//         style={styles.linearView}>
//         <StatusBar
//           translucent
//           backgroundColor="transparent"
//           barStyle={isDark(bgColor) ? 'light-content' : 'dark-content'}
//         />
//         {bgImage ? (
//           <CImage
//             source={{ uri: bgImage }}
//             resizeMode="cover"
//             style={styles.bgImg}
//           />
//         ) : null}
//         <View style={styles.content}>{props.children}</View>
//       </LinearGradient>
//     </View>
//   );
// }

// export default React.memo(CHeader);
