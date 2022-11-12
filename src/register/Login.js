import React, {useState, useRef, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
    View,
    TextInput,
    Button,
    Alert,
    PermissionsAndroid,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export async function request_READ_PHONE_STATE() {
 
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE);
        console.log('granted', granted, "PermissionsAndroid.RESULTS.GRANTED", PermissionsAndroid.RESULTS.GRANTED)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
   
        Alert.alert("Permission Granted.");
      }
      else {
   
        Alert.alert("Permission Not Granted");
   
      }
    } catch (err) {
      console.warn(err)
    }
  }
const LoginComponent = ({navigation}) => {
    const [confirmLogin, setConfirmLogin] = useState(false);
    const get_IMEI_Number=()=>{
 
        const IMEI = require('react-native-imei');
     
        var IMEI_2 = IMEI.getImei();
        console.log("IMEI", IMEI_2)
     
        
      }
    const phoneNumberValidate = () => {
        // requestPermissions();
        if(PermissionsAndroid.RESULTS.GRANTED){
            console.log("sdsds", PermissionsAndroid.RESULTS.GRANTED);
                
            DeviceInfo.getPhoneNumber().then((phoneNumber) => {
                Alert.alert('My phone munber', phoneNumber)
                console.log("login DeviceInfo phoneNumber", phoneNumber);
                axios.get('http://18.212.184.28:3000/api/login').then((response) => {
                    // console.log("response", response.data);
                    response.data.filter(e => { 
                        if(e.phone === phoneNumber){
                            setConfirmLogin(false);
                            navigation.navigate('home')
                        }
                        else{
                            setConfirmLogin(true)
                        }
                    })
                  });
            });
        }
    }

    const requestPermissions = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)
    }

    useEffect(() => {
        console.log("Login Component");
        (async () => {
            const users = await request_READ_PHONE_STATE();
            console.log("users", users)
          })();
        phoneNumberValidate();
    }, []);

    return (
        <ImageBackground source={require('../assets/images/login.png')} resizeMode="cover" style={styles.imageContainer}>
            {
                confirmLogin && 
                <TouchableOpacity onPress={()=> navigation.navigate('mobileNumber')} style={styles.textWrapper}>
                    <Button
            title="Phone Number Sign In"
            onPress={() => get_IMEI_Number()}
          />
                <Text style={styles.loginText}>Login With Mobile</Text>
                <Image
                    style={styles.arrow}
                    source={require('../assets/images/login-arrow.png')}/>
            </TouchableOpacity>
            }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    textWrapper:{
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 'auto',
        marginLeft: 'auto',
        position: 'relative',
        right: 40,
        bottom: 5
    },
    loginText:{
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        lineHeight: 40,
        
    },
    arrow:{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginComponent;