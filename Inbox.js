import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';


class Inbox extends Component {
    // const Pesanan = (props) => {
    // tambahKeKeranjang() {
    //     Alert.alert('Yeay, kamu berhasil memasukan ini kekeranjang !')
    // }

    // static navigationOptions = ({ navigation }) => {
    //     let headerTitle = 'Inbox';
    //     return { headerTitle }
    // }

    static navigationOptions = {
        title: 'Inbox',
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
                    <View>
                        <TouchableOpacity onPress={() => alert('Sabar ya ka:( lagi proses developing untuk halaman detailnya :(')}>
                            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                                <Image source={require('./drawable/iconDrink1.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                                <View style={{ flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Panas banget ya?</Text>
                                    <Text style={{ fontSize: 12 }}>#MariBerkopiRia</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text></Text>
                                    <Text style={{ fontSize: 10 }}>Hari ini, 12:59 PM</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, borderRadius: 4, alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('./drawable/imageKopi2.png')} style={{ width: 380, height: 170, borderRadius: 4 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>

                    <View>
                        <TouchableOpacity onPress={() => alert('Sabar ya ka:( lagi proses developing untuk halaman detailnya :(')}>
                            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                                <Image source={require('./drawable/iconDrink2.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                                <View style={{ flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Panas banget ya?</Text>
                                    <Text style={{ fontSize: 12 }}>#MariBerkopiRia</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text></Text>
                                    <Text style={{ fontSize: 10 }}>Hari ini, 12:59 PM</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, borderRadius: 4, alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('./drawable/imageKopi3.png')} style={{ width: 380, height: 170, borderRadius: 4 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>

                    <View>
                        <TouchableOpacity onPress={() => alert('Sabar ya ka:( lagi proses developing untuk halaman detailnya :(')}>
                            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                                <Image source={require('./drawable/iconDrink1.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                                <View style={{ flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Panas banget ya?</Text>
                                    <Text style={{ fontSize: 12 }}>#MariBerkopiRia</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text></Text>
                                    <Text style={{ fontSize: 10 }}>Hari ini, 12:59 PM</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, borderRadius: 4, alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('./drawable/imageKopi2.png')} style={{ width: 380, height: 170, borderRadius: 4 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>

                    <View>
                        <TouchableOpacity onPress={() => alert('Sabar ya ka:( lagi proses developing untuk halaman detailnya :(')}>
                            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                                <Image source={require('./drawable/iconDrink2.jpg')} style={{ width: 35, height: 35, borderRadius: 20 }} />
                                <View style={{ flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Panas banget ya?</Text>
                                    <Text style={{ fontSize: 12 }}>#MariBerkopiRia</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text></Text>
                                    <Text style={{ fontSize: 10 }}>Hari ini, 12:59 PM</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, borderRadius: 4, alignItems: 'center', marginTop: 10 }}>
                                <Image source={require('./drawable/imageKopi3.png')} style={{ width: 380, height: 170, borderRadius: 4 }} />
                            </View>
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesanan')}>
                            <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconPesanan.png')} />
                            <Text style={{ fontSize: 10, color: 'grey', marginTop: 4 }}>Pesanan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconInboxActif.png')} />
                        <Text style={{ fontSize: 10, color: '#e67e22', marginTop: 4 }}>Inbox</Text>
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

export default Inbox;
