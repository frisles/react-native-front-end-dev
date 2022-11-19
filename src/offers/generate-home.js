import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { environment } from '../../environment';

const GenerateHome = ({navigation}) => {
    const [Index, setIndex] = useState(0);
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`${environment.API_URL}/produce`).then((response) => {
            const {items} = response.data[0];
            console.log("produce get response >>", items);
            setItem(items)
        });
    }, []);

    const giftList = [
        {
            "name": "Item Name"
        },
        {
            "name": "Item Name"
        },
        {
            "name": "Item Name"
        },
        {
            "name": "Item Name"
        },
        {
            "name": "Item Name"
        },
        {
            "name": "Item Name"
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
                    <Pressable onPress={() => navigation.navigate('home')}  style={styles.iconWrapper}>
                        <Image style={styles.arrowIcon} source={require('../assets/images/left-arrow.png')}/>
                    </Pressable>
                    <Text style={styles.headTitle}>Huddle Play</Text>
                    <Pressable onPress={() => navigation.navigate('notifications')}  style={styles.iconWrapper}>
                        <Image style={styles.notifyIcon} source={require('../assets/images/notify-icon.png')}/>
                    </Pressable>
                </View>
                <Text style={styles.title}>Available for Produce</Text>
            </ImageBackground>
            <View style={styles.giftContainer}>
                <View style={styles.giftWrapper}>
                    {
                        item !== undefined && item.map((e,i) => {
                            return (
                                <Pressable key={i} style={styles.giftItem} onPress={() => setIndex(i)}>
                                <ImageBackground
                                    source={require('../assets/images/scratch-bg-1.png')}
                                    resizeMode="cover"
                                    style={styles.giftImage}>
                                        <View style={styles.giftTop}>
                                            <Text style={styles.giftTitle}>{e.name}</Text>
                                            <Image style={styles.doneIcon} source={Index === i ? require('../assets/images/small-tick.png'): require('../assets/images/icon-done-grey.png')}/>
                                        </View>
                                        <View style={styles.giftPointsTop}>
                                            <Text style={styles.giftPointTitle}>{e?.points} <Text style={styles.pointSubText}>pts</Text></Text>
                                        </View>
                                        <View style={styles.giftCount}>
                                            <Text style={styles.giftCountText}>{e?.default}/{e?.total}</Text>
                                        </View>
                                </ImageBackground>
                                </Pressable>
                            )
                        })
                    }
                </View>
                <Pressable
                    onPress={() => navigation.navigate('generateComponent')}
                    style={styles.buttonContainer}>
                    <LinearGradient style={styles.buttonWrapper} colors={['#5E6BFF', '#212FCC']}>
                        <Text style={styles.buttonText}>
                        Generate Components
                        </Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
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
        paddingVertical: 30,
        backgroundColor: '#EBECFF'
    },
    giftWrapper:{
        width: '85%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    giftItem:{
        width: 164,
        height: 201,
        marginVertical: 10,
    },
    giftImage:{
        width: 164,
        height: 201,
        justifyContent: 'center',
        paddingVertical: 15
    },
    giftTop:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 'auto'
    },
    giftTitle:{
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '700',
        color: '#2C2C2C',
        lineHeight: 30,
        textAlign: 'center'
    },
    doneIcon:{
        width: 22,
        height: 22
    },
    giftPointsTop:{
        backgroundColor: '#F99746',
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 'auto'
    },
    giftPointTitle:{
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
        lineHeight: 20,
        textAlign: 'center'
    },
    pointSubText:{
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        lineHeight: 20,
        textAlign: 'center'
    },
    giftCount:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    giftCountText:{
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '600',
        color: '#2C2C2C',
        lineHeight: 30,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '60%',
        height: 60,
        marginVertical: 30,
    },
    buttonWrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        lineHeight: 20,
        textAlign: 'center'
    }
})

export default GenerateHome;