import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
export default class ActionBarPesanan extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('./drawable/iconRiwayatPesanan.png')}
          style={{
            width: 30,
            height: 30,
            marginRight: 15
            // marginLeft: 15,
          }}
        />
      </View>
    );
  }
}