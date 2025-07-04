import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  BASE_SCREEN_WIDTH,
  BASE_SCREEN_HEIGHT,
  CURRENT_SCREEN_WIDTH,
  CURRENT_SCREEN_HEIGHT,
  scaleWidth,
  scaleHeight,
  scaleFont,
  isIphoneModel,
  wp,
} from '@raahimkhan23/react-native-responsive-utils';

export const Landscape: React.FC = React.memo(() => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FCFA',
    },
    box: {
      width: scaleWidth(200),
      height: scaleHeight(100),
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: wp(2),
    },
    text: {
      fontSize: scaleFont(15),
      fontWeight: 'bold',
      color: '#1C1C1C',
      lineHeight: 22,
    },
    box2: {
      width: wp(80),
      height: scaleHeight(100),
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
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
      <Text style={[styles.text, { marginVertical: wp(2) }]}>
        Is Iphone 16 Pro: {isIphoneModel('iPhone16Pro').toString()}
      </Text>
      <View style={styles.box2}>
        <Text style={styles.text}>I am 80% of screen width</Text>
      </View>
    </View>
  );
});
