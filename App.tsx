/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.backgroundtop}>
        <View style={styles.middlaner}>
          <Image
            style={[styles.avatar]}
            source={{ uri: 'https://avatars.githubusercontent.com/u/93825262?s=96&v=4' }}
          />
          <Text style={styles.TextHeader}>
            @Lelegoyeng
          </Text>
          <Text style={styles.TextHeader1}>
            Developer React Native
          </Text>
        </View>


      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000000',
          paddingTop: 20,
          paddingLeft: 50
        }}>My Information</Text>
      <Text style={styles.TextBiasa}>
        Nama
      </Text>
      <Text style={{ fontSize: 12, color: 'gray', paddingLeft: 90 }}>Kevin Rubama Putra</Text>
      <Text style={styles.TextBiasa}>
        Email
      </Text>
      <Text style={{ fontSize: 12, color: 'gray', paddingLeft: 90 }}>lelegoyengs@gmail.com</Text>

      <Text style={styles.TextBiasa}>
        Address
      </Text>
      <Text style={{ fontSize: 12, color: 'gray', paddingLeft: 90 }}>Github</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundtop: {
    flex: 1,
    backgroundColor: 'gray',
    maxHeight: 250,
    paddingBottom: '40%',
  },
  avatar: {
    width: 90,
    height: 90,
    marginTop: '20%',
    borderRadius: 75

  },
  middlaner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextHeader: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextHeader1: {
    paddingTop: 5,
    fontSize: 20,
  },
  TextBiasa: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 25,
    paddingLeft: 90
  }
});

export default App;
