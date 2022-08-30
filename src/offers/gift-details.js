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
const GiftsDetails = ({navigation}) => {
    const list = [
        {
            'content': 'VIP for 4 hrs'
        },
        {
            'content': 'Send Like in connect'
        },
        {
            'content': 'Send customized message in Connect'
        },
        {
            'content': 'Send 1 message after block'
        },
        {
            'content': 'Highlight your activity for 8 hours'
        },
        {
            'content': 'Highlight your profile for 8 hrs in connect'
        },
        {
            'content': '10% Levelup your team'
        },
        {
            'content': 'Get passport for 8 hours'
        },
        {
            'content': 'Use Advanced filter In Connect for 8 hrs'
        },
        {
            'content': 'Assign 1 task to other Groups'
        },
    ]
    return (
        <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/offer-bg-top.png')}
                resizeMode="cover"
                style={styles.topContainer}>
                <View style={styles.topWrapper}>
                    <Pressable onPress={() => navigation.navigate('giftsHome')}  style={styles.iconWrapper}>
                        <Image style={styles.arrowIcon} source={require('../assets/images/left-arrow.png')}/>
                    </Pressable>
                    <Text style={styles.headTitle}>Huddle Play</Text>
                    <Pressable onPress={() => navigation.navigate('notifications')}  style={styles.iconWrapper}>
                        <Image style={styles.notifyIcon} source={require('../assets/images/notify-icon.png')}/>
                    </Pressable>
                </View>
                <Text style={styles.title}>Gold Chest</Text>
            </ImageBackground>
            <ImageBackground
                source={require('../assets/images/gift-detail-bg.png')}
                resizeMode="cover"
                style={styles.giftContainer}>
                <View style={styles.giftWrapper}>
                    <View style={styles.giftInfoWrapper}>
                        <Text style={styles.giftInfoTitle}>CLICK</Text>
                        <Text style={styles.giftInfoSubTitle}>NOW TO SEE THE GIFTS AVAILABLE</Text>
                        <Pressable onPress={() => navigation.navigate('')}  style={styles.iconAction}>
                            <Text style={styles.infoTitle}>Info</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => navigation.navigate('')}  style={styles.imageAction}>
                        <Image style={styles.image} source={require('../assets/images/offer-box-small-1.png')} />
                    </Pressable>
                </View>
                <View style={styles.scratchWrapper}>
                    {
                        list.length && list.map((e, i) => {
                            return(
                                <Pressable onPress={() => navigation.navigate('giftsHome')} style={styles.scratchContainer} key={i}>
                                <ImageBackground
                                    source={require('../assets/images/scratch-bg.png')}
                                    resizeMode="cover"
                                    style={styles.scratchContainer}>
                                        <Text style={styles.scratchText}>{e.content}</Text>
                                    </ImageBackground>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ImageBackground>
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
        width: width,
        paddingVertical: 20
    },  
    giftWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    giftInfoWrapper:{
        flexDirection: 'column',
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
    scratchWrapper:{
        marginHorizontal: 30,
        marginVertical: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    scratchContainer:{
        width: 163,
        minHeight: 70,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    scratchText:{
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        lineHeight: 24,
        textAlign: 'center'
    }
})

export default GiftsDetails;