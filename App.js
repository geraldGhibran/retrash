import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Root from './src/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Root {...this.props} />
      {/* <Text>Hello sdfsdfs</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
