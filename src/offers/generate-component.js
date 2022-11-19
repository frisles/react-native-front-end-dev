import React, { useState, useRef } from 'react';
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
import CountDown from 'react-native-countdown-component';
// import VideoPlayer from 'react-native-video-player';
import Video from "react-native-video";

const GenerateComponent = ({navigation}) => {
    const [Index, setIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    
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
    ];
    
    const speedUp = () => {
        setShowVideo(true)
    }

    const onVideoEnd = (video) => {
        console.log("video", video);
        setShowVideo(false)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/offer-bg-top.png')}
                resizeMode="cover"
                style={styles.topContainer}>
                <View style={styles.topWrapper}>
                    <Pressable onPress={() => navigation.navigate('generateHome')}  style={styles.iconWrapper}>
                        <Image style={styles.arrowIcon} source={require('../assets/images/left-arrow.png')}/>
                    </Pressable>
                    <Text style={styles.headTitle}>Huddle Play</Text>
                    <Pressable onPress={() => navigation.navigate('notifications')}  style={styles.iconWrapper}>
                        <Image style={styles.notifyIcon} source={require('../assets/images/notify-icon.png')}/>
                    </Pressable>
                </View>
                <Text style={styles.title}>Generate Components</Text>
            </ImageBackground>
            <View style={styles.giftContainer}>
                <View style={styles.giftWrapper}>
                    <Pressable style={styles.giftItem}>
                    <ImageBackground
                        source={require('../assets/images/scratch-bg-1.png')}
                        resizeMode="cover"
                        style={styles.giftImage}>
                            <View style={styles.giftTop}>
                                <Text style={styles.giftTitle}>Name</Text>
                            </View>
                            <View style={styles.giftPointsTop}>
                                <Text style={styles.giftPointTitle}>100 <Text style={styles.pointSubText}>pts</Text></Text>
                                <CountDown
                                    size={10}
                                    until={100}
                                    onFinish={() => console.log('Finished')}
                                    digitStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent'}}
                                    digitTxtStyle={{marginHorizontal: -10, color: '#FFF'}}
                                    timeLabelStyle={{marginHorizontal: -10, fontSize: 8, color: '#FFF', fontWeight: 'bold'}}
                                    separatorStyle={{marginHorizontal: -10, color: '#FFF'}}
                                    timeToShow={['H', 'M', 'S']}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                />
                            </View>
                            <View style={styles.giftCount}>
                                <Text style={styles.giftCountText}>0/1000</Text>
                            </View>
                            <Pressable onPress={() => speedUp()}  style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>Speed up</Text>
                            </Pressable>
                    </ImageBackground>
                    </Pressable>
                    <Pressable style={styles.giftItem}>
                    <ImageBackground
                        source={require('../assets/images/add-card.png')}
                        resizeMode="cover"
                        style={styles.giftImage}></ImageBackground>
                        </Pressable>
                </View>
            </View>
                {
                    showVideo &&
                    <View style={styles.videoWrapper}>
                        {/* <VideoPlayer
                            video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                            videoWidth={width}
                            videoHeight={height}
                            autoplay={true}
                            showDuration={true}
                            fullScreenOnLongPress={true}
                            thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                            resizeMode={'cover'}
                        /> */}
                        <Video
                            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4' }}
                            style={{ width: width, height: height }}
                            controls={true}
                            // audioOnly={true}
                            poster="https://i.picsum.photos/id/866/1600/900.jpg"
                            onEnd={onVideoEnd}
                            // ref={(ref) => {
                            // this.player = ref
                            // }} 
                            />
                </View>
                }
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECFF',
        height: height
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
        backgroundColor: '#EBECFF',
        
    },
    giftWrapper:{
        width: '85%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    actionButton:{
        backgroundColor: '#5D6AFF',
        borderRadius: 18,
        width: 83,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 32
    },
    actionButtonText:{
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '400',
        color: '#FFF',
        lineHeight: 15,
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
        paddingVertical: 15,
        alignItems: 'center'
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 'auto',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10
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
        fontSize: 12,
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
    },
    videoWrapper:{
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0
    }
})

export default GenerateComponent;