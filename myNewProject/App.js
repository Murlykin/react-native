import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground
        style={styles.image}
        source={require("./assets/images/")}
      ></ImageBackground>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
      },
});
