import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Spinner from 'react-native-spinkit';

export default class SplashScreen extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigation.navigate('App');
    //     }, 1500);
    // }

    render() {
        return (
            <View style={styles.splashStyle}>
                <Image source={require('./drawable/logoPlosok.png')} style={{ width: 200, height: 200 }} />
                {/* <ActivityIndicator size='small' color='white' style={{ margin: 10 }} /> */}
                <Spinner color={'white'} size={25} type={'ThreeBounce'} style={{ marginTop: -35 }} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    splashStyle: {
        backgroundColor: '#e67e22',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: -15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        marginTop: -5,
        fontSize: 8,
        fontWeight: '200',
        color: 'white'
    }
});