import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SplashScreen from './SplashScreen';
import Home from './Home';

export default class App extends Component {
  componentWillMount() {
    this.state = {
      view: <SplashScreen />
    };

    setTimeout(() => {
      if (true) {
        this.setState({
          view: <Home />
        })
      } else {
        this.setState({
          view: <Error />
        })
      }
    }, 2000);
  }
  render() {
    return (
      this.state.view
      // <SplashScreen />
      // <View>
      //   <Text>Selamat Datang di PayAll</Text>
      // </View>
    );
  }
}