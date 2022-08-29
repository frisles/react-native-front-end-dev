import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Pressable,
    View,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
const GiftsHome = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/offer-bg-top.png')}
                resizeMode="cover"
                style={styles.topContainer}>
                <View style={styles.topWrapper}>
                    <Pressable onPress={() => navigation.navigate('home')}  style={styles.iconWrapper}>
                        <Image style={styles.arrowIcon} source={require('../assets/images/left-arrow.png')}/>
                    </Pressable>
                    <Text style={styles.headTitle}>Huddle Play</Text>
                    <Pressable onPress={() => navigation.navigate('')}  style={styles.iconWrapper}>
                        <Image style={styles.notifyIcon} source={require('../assets/images/notify-icon.png')}/>
                    </Pressable>
                </View>
                <Text style={styles.title}>Gold Chest</Text>
            </ImageBackground>
            <View style={styles.giftContainer}>
                <ImageBackground
                    source={require('../assets/images/gift-1.png')}
                    resizeMode="cover"
                    style={styles.giftWrapper}>
                        <View style={styles.giftInfoWrapper}>
                            <Text style={styles.giftInfoTitle}>CLICK</Text>
                            <Text style={styles.giftInfoSubTitle}>NOW TO SEE THE GIFTS AVAILABLE</Text>
                            <Pressable onPress={() => navigation.navigate('giftDetails')}  style={styles.iconAction}>
                                <Text style={styles.infoTitle}>Info</Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={() => navigation.navigate('giftDetails')}  style={styles.imageAction}>
                            <Image style={styles.image} source={require('../assets/images/offer-box-1.png')} />
                        </Pressable>
                </ImageBackground>
                <ImageBackground
                    source={require('../assets/images/gift-2.png')}
                    resizeMode="cover"
                    style={styles.giftWrapper}>
                        <View style={styles.giftInfoWrapper}>
                            <Text style={styles.giftInfoTitle}>CLICK</Text>
                            <Text style={styles.giftInfoSubTitle}>NOW TO SEE THE GIFTS AVAILABLE</Text>
                            <Pressable onPress={() => navigation.navigate('giftDetails')}  style={styles.iconAction}>
                                <Text style={styles.infoTitle}>Info</Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={() => navigation.navigate('giftDetails')}  style={styles.imageAction}>
                            <Image style={styles.image} source={require('../assets/images/offer-box-1.png')} />
                        </Pressable>
                </ImageBackground>
                <ImageBackground
                    source={require('../assets/images/gift-3.png')}
                    resizeMode="cover"
                    style={styles.giftWrapper}>
                </ImageBackground>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    topContainer:{
        width: width,
        height: 188,
    },
    topWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50
    },
    iconWrapper:{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowIcon:{
        width: 10,
        height: 18
    },
    headTitle:{
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: '400',
        color: '#2C2C2C',
        lineHeight: 28,
        textAlign: 'center'
    },
    title:{
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '700',
        color: '#2C2C2C',
        lineHeight: 30,
        textAlign: 'left',
        paddingLeft: 50,
        paddingTop: 30
    },
    giftContainer:{
        alignItems: 'center',
        marginVertical: 30
    },
    giftWrapper:{
        height:203,
        width: 338,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    giftInfoWrapper:{
        flexDirection: 'column',
        width: 200,
        paddingHorizontal: 20
    },
    giftInfoTitle:{
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: '400',
        color: '#FFF',
        lineHeight: 35,
        textAlign: 'left'
    },
    giftInfoSubTitle:{
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '400',
        color: '#FFF',
        lineHeight: 14,
        textAlign: 'left'
    },
    iconAction:{
        width: 46,
        height: 31,
        borderRadius: 15,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    infoTitle:{
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '600',
        color: '#000',
        lineHeight: 18,
        textAlign: 'center'
    },
    imageAction:{
        marginRight: 10
    },
    image:{

    }
})

export default GiftsHome;