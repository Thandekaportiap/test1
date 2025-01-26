import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const CurvedHeader = () => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="150" viewBox="0 0 375 150" fill="none">
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#00B2B2" />
            <Stop offset="1" stopColor="#008080" />
          </LinearGradient>
        </Defs>
        <Path
          d="M0 0H375V150C375 150 262.5 110 187.5 150C112.5 190 0 150 0 150V0Z"
          fill="url(#gradient)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
  },
});

export default CurvedHeader;