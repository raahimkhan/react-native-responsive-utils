import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  BASE_SCREEN_WIDTH,
  BASE_SCREEN_HEIGHT,
  CURRENT_SCREEN_WIDTH,
  CURRENT_SCREEN_HEIGHT,
  scaleWidth,
  scaleHeight,
  scaleFont,
  scaleImageWidth,
  scaleImageHeight,
  isIphoneModel,
  wp,
  hp,
} from '@raahimkhan23/react-native-responsive-utils';

import sampleImage from '../assets/sample-image.png';

export const Portrait: React.FC = React.memo(() => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FCFA',
    },
    box: {
      width: scaleWidth(362),
      height: scaleHeight(69),
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(2),
    },
    text: {
      fontSize: scaleFont(17),
      fontWeight: 'bold',
      color: '#1C1C1C',
      lineHeight: 22,
    },
    image: {
      width: scaleImageWidth(263),
      height: scaleImageHeight(263, 294),
    },
    box2: {
      width: wp(90),
      height: scaleHeight(69),
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(2),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Base Screen Width: {BASE_SCREEN_WIDTH}</Text>
      <Text style={styles.text}>Base Screen Height: {BASE_SCREEN_HEIGHT}</Text>
      <Text style={styles.text}>
        Current Screen Width: {CURRENT_SCREEN_WIDTH}
      </Text>
      <Text style={styles.text}>
        Current Screen Height: {CURRENT_SCREEN_HEIGHT}
      </Text>
      <View style={styles.box}>
        <Text style={styles.text}>I scale dynamically</Text>
      </View>
      <Image source={sampleImage} style={styles.image} />
      <Text style={styles.text}>
        Is Iphone 16 Pro: {isIphoneModel('iPhone16Pro').toString()}
      </Text>
      <View style={styles.box2}>
        <Text style={styles.text}>I am 90% of screen width</Text>
      </View>
    </View>
  );
});
