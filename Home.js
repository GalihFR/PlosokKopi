import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Pesanan from './Pesanan';
import PesananDetail from './PesananDetail';
import RiwayatPesanan from './RiwayatPesanan';
import Inbox from './Inbox';
import Akun from './Akun';

// export default class Home extends Component {
class Home extends Component {
    tambahKeKeranjang() {
        Alert.alert('Yeay, kamu berhasil memasukan ini kekeranjang !')
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
                            <View style={{ position: 'relative', flex: 1 }}>
                                <TextInput placeholder="Ngantuk ? haus juga gk ?" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
                                <Image source={require('./drawable/iconSearch.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
                            </View>
                            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => alert('Kamu lagi gk punya kupon diskon :(')}>
                                    <Image style={{ width: 30, height: 30 }} source={require('./drawable/coupon.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingTop: 8, paddingLeft: 16 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#61A756' }}>Lihat semua</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#1C1C1C' }}></Text>
                            </View>
                            <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                                <View style={{ marginRight: 16 }}>
                                    <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                        <Image source={require('./drawable/esKopiKekinian.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Jaya Abadi</Text>
                                </View>
                                <View style={{ marginRight: 16 }}>
                                    <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                        <Image source={require('./drawable/esKopiSusuAlpukat.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Sukat Rebet</Text>
                                </View>
                                <View style={{ marginRight: 16 }}>
                                    <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                        <Image source={require('./drawable/espreso.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Espreso Jeru</Text>
                                </View>
                                <View style={{ marginRight: 16 }}>
                                    <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                        <Image source={require('./drawable/coffeeLatte.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>Late Sattack</Text>
                                </View>
                            </ScrollView>
                            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
                        </View>

                        <View style={{ flextDirection: 'row', flexWarp: 'wrap', marginTop: 18 }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>
                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/1.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/2.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/3.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/4.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>
                            </View>

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>
                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/5.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/6.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/7.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Kopi Joos</Text>
                                </View>

                                <View style={{ width: '25%', alignItems: 'center' }}>
                                    <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: 45, height: 45 }} source={require('./drawable/loadMore.png')} />
                                    </View>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Lihat Semua</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>

                        {/* ================================testing========================== */}
                        {/* <View style={{ justifyContent: 'space-between', flex: 1, elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Kopi Susu Plosok</Text>
                                    <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                            </View>
                        </View> */}
                        {/* ================================testing========================== */}

                        <View style={{ elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 10, marginBottom: 8, marginTop: 8 }}>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -30 }}>Rp. 50.000</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
                                        {/* <Button onPress={() => alert('Yeay, kamu berhasil menambahkan ke keranjang belanja, tambah lagi yukk :-)')} title="Tambah" /> */}
                                        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#40bfc1', paddingHorizontal: 8, paddingVertical: 8, borderRadius: 4 }} onPress={() => alert('Sabar ya kak, sebentar lagi fitur ini akan bisa di gunakan !')}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tambah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 10, marginBottom: 8, marginTop: 8 }}>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -30 }}>Rp. 50.000</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
                                        {/* <Button onPress={() => alert('Yeay, kamu berhasil menambahkan ke keranjang belanja, tambah lagi yukk :-)')} title="Tambah" /> */}
                                        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#40bfc1', paddingHorizontal: 8, paddingVertical: 8, borderRadius: 4 }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tambah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 10, marginBottom: 8, marginTop: 8 }}>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -30 }}>Rp. 50.000</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
                                        {/* <Button onPress={() => alert('Yeay, kamu berhasil menambahkan ke keranjang belanja, tambah lagi yukk :-)')} title="Tambah" /> */}
                                        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#40bfc1', paddingHorizontal: 8, paddingVertical: 8, borderRadius: 4 }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tambah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 10, marginBottom: 8, marginTop: 8 }}>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -30 }}>Rp. 50.000</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
                                        {/* <Button onPress={() => alert('Yeay, kamu berhasil menambahkan ke keranjang belanja, tambah lagi yukk :-)')} title="Tambah" /> */}
                                        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#40bfc1', paddingHorizontal: 8, paddingVertical: 8, borderRadius: 4 }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tambah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ elevation: 5, flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5, marginRight: 10, marginBottom: 8, marginTop: 8 }}>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconRating.png')} style={{ width: 80, height: 80 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -30 }}>Rp. 50.000</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginBottom: 8 }}>
                                        {/* <Button onPress={() => alert('Yeay, kamu berhasil menambahkan ke keranjang belanja, tambah lagi yukk :-)')} title="Tambah" /> */}
                                        <TouchableOpacity style={{ elevation: 5, backgroundColor: '#40bfc1', paddingHorizontal: 8, paddingVertical: 8, borderRadius: 4 }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tambah</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* <View style={{ flexDirection: 'row', backgroundColor: '#eeeeee', borderRadius: 4, marginLeft: 16, marginRight: 16, marginTop: 18 }}>
                            <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                                <Image source={require('./drawable/imageKopi.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 1, marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>KOPI SUSU PLOSOK</Text>
                                        <Text style={{ fontSize: 12 }}>Racikan khas plosok</Text>
                                    </View>
                                    <View style={{ marginLeft: 20, marginTop: 3 }}>
                                        <Image source={require('./drawable/iconFavorit.png')} style={{ width: 20, height: 20 }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                    <Image source={require('./drawable/iconRating.png')} style={{ width: 100, height: 100, marginBottom: -18 }} />
                                    <View style={{ flexDirection: 'row', marginTop: -20 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rp. 20.000</Text>
                                        <View style={{ marginLeft: 47, marginTop: -12 }}>
                                            <Button onPress={this.tambahKeKeranjang} title="Tambah" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View> */}

                    </View>
                </ScrollView>

                {/* navbar menu */}
                <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}></View>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 54 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 26, height: 26 }} source={require('./drawable/iconHomeAktif.png')} />
                        <Text style={{ fontSize: 10, color: '#e67e22', marginTop: 4 }}>Beranda</Text>
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

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        }
        // ,
        // Pesanan: {
        //     screen: Pesanan,
        // } 
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);

const PesananStack = createStackNavigator(
    {
        Pesanan: {
            screen: Pesanan,
        },
        PesananDetail: {
            screen: PesananDetail,
            navigationOptions: {
                headerTitle: 'Detail Pesanan',
            }
        },
        RiwayatPesanan: {
            screen: RiwayatPesanan,
            navigationOptions: {
                headerTitle: 'Riwayat Pesanan',
            }
        }
    },
    {
        // headerMode: 'none',        
        initialRouteName: 'Pesanan'
    }
);

const InboxStack = createStackNavigator(
    {
        Inbox: {
            screen: Inbox,
        }
    },
    {
        initialRouteName: 'Inbox'
    }
);

const AkunStack = createStackNavigator(
    {
        Akun: {
            screen: Akun,
        }
    },
    {
        initialRouteName: 'Akun'
    }
);

const Router = createSwitchNavigator(
    {
        HomeStack,
        PesananStack,
        InboxStack,
        AkunStack,
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
);

export default createAppContainer(Router);