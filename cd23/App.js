import * as React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Image, Button, Alert  } from 'react-native'
import Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        Hello, what is your name?
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Input your name!"
      />
      <Button
        title="OK"
        color="#f194ff"/>
      <Image style={styles.logo} source={{uri:'https://cdn141.picsart.com/312091958001211.png'}} />
      <Image style={styles.logo} source={{uri:'https://cdn141.picsart.com/312091958001211.png'}} />
      <Image style={styles.logo} source={{uri:'https://cdn141.picsart.com/312091958001211.png'}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff0f6',
    padding: 10,
  },
  paragraph: {
    marginTop: 250,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
