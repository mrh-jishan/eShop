import React, { memo } from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';

const Background = ({ children }) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}>
    <KeyboardAvoidingView
      behavior="padding"
      enabled={true}
      keyboardVerticalOffset={-170}>
      <ScrollView>
        <View style={styles.container}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
