import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import PesananDetail from './PesananDetail';
import ActionBarPesanan from './ActionBarPesanan';
import RiwayatPesanan from './RiwayatPesanan';

class Pesanan extends Component {
    // const Pesanan = (props) => {
    // tambahKeKeranjang() {
    //     Alert.alert('Yeay, kamu berhasil memasukan ini kekeranjang !')
    // }

    // static navigationOptions = ({ navigation }) => {
    //     let headerTitle = 'Dalam proses';
    //     return { headerTitle }
    // }

    static navigationOptions = {
        headerRight: () => (
            <TouchableOpacity onPress={() => alert('RiwayatPesanan')}>
                <ActionBarPesanan />
            </TouchableOpacity>),

        title: 'Dalam proses',
        headerStyle: {
            backgroundColor: '#e67e22',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        // const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 80 }}>
                        <Image source={require('./drawable/ilustrasiPesanan.png')} style={{ width: 250, height: 250 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pesan kopi, yuk !</Text>
                        <Text style={{ textAlign: 'center' }}>Barista plosok akan dengan senang hati untuk membuatkan kopi untukmu.</Text>
                        <View style={{ marginTop: 10 }}>
                            {/* <Button onPress={() => alert('Sebentar yah, lagi ada yan ganggu nih :(')} title="Pesan"/> */}
                            <Button onPress={() => this.props.navigation.navigate('PesananDetail')} title="Pesan" />
                        </View>
                    </View>
                </ScrollView>

                {/* navbar menu */}
                <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}></View>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 54 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {/* <TouchableOpacity onPress={this.tambahKeKeranjang}> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconHome.png')} />
                            <Text style={{ fontSize: 10, color: 'grey', marginTop: 4 }}>Beranda</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconPesananAktif.png')} />
                        <Text style={{ fontSize: 10, color: '#e67e22', marginTop: 4 }}>Pesanan</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')}>
                            <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconInbox.png')} />
                            <Text style={{ fontSize: 10, color: 'grey', marginTop: 4 }}>Inbox</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
                            <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconAcount.png')} />
                            <Text style={{ fontSize: 10, color: 'grey', marginTop: 4 }}>Akun</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}

export default Pesanan;
