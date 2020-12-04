import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';

class Akun extends Component {

    static navigationOptions = {
        title: 'Akun',
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
                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconProfile.png')} style={{ width: 50, height: 50, borderRadius: 20 }} />
                        <View style={{ flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Galih Fathul Rohmi</Text>
                            <Text style={{ fontSize: 12 }}>galih_rohmi@bcainsurance.co.id</Text>
                            <Text style={{ fontSize: 10 }}>XXXX XXXX 3334</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text></Text>
                            <TouchableOpacity onPress={() => alert('Sabar ya ka untuk sementara waktu, halaman ini belum bisa di akses :(')}>
                                <Text style={{ fontSize: 10 }}>Ubah</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 15, marginTop: 16 }}></View>

                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconVoucherSaya.png')} style={{ width: 25, height: 25 }} />
                        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Voucher Saya</Text>
                            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconPilihanBahasa.png')} style={{ width: 25, height: 25 }} />
                        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Pilihan Bahasa</Text>
                        </View>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 15, marginTop: 16 }}></View>

                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconBantuan.png')} style={{ width: 25, height: 25 }} />
                        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Bantuan</Text>
                            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconKetentuanLayanan.png')} style={{ width: 25, height: 25 }} />
                        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Ketentuan Layanan</Text>
                            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 16, marginRight: 16, borderRadius: 4 }}>
                        <Image source={require('./drawable/iconBeriKamiRating.png')} style={{ width: 25, height: 25 }} />
                        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Beri Kami Rating</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text></Text>
                            <TouchableOpacity onPress={() => alert('Sabar ya ka untuk sementara waktu, halaman ini belum bisa di akses :(')}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>vBeta 0.1</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 15, marginTop: 16 }}></View>

                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => alert('Yah jangan keluar dong :(')}>
                            <Text style={{ color: 'red' }}>Keluar</Text>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Inbox')}>
                            <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconInbox.png')} />
                            <Text style={{ fontSize: 10, color: 'grey', marginTop: 4 }}>Inbox</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconAcountAktif.png')} />
                        <Text style={{ fontSize: 10, color: '#e67e22', marginTop: 4 }}>Akun</Text>
                    </View>
                </View>
            </View >
        );
    }
}

export default Akun;
