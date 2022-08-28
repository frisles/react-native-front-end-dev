import React, {useState, useRef} from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';

const MobileNumber = ({navigation}) => {
    const [phoneNumber,
        setphoneNumber] = useState('');
    const phoneInput = useRef(null);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Mobile Number</Text>
                <Text style={styles.subContent}>Please enter your valid phone number. We will
                    send you 6-digit code to verify account.</Text>
            </View>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                withShadow
                autoFocus
                containerStyle={styles.phoneNumberView}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                setphoneNumber(text);
            }}/>
            <Pressable
                onPress={() => navigation.navigate('verifyAccount')}
                style={styles.buttonContainer}>
                <LinearGradient style={styles.buttonWrapper} colors={['#5E6BFF', '#212FCC']}>
                    <Text style={styles.buttonText}>
                        Send Code
                    </Text>
                </LinearGradient>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingTop: 60
    },
    wrapper: {
        maxWidth: 300
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 32,
        fontWeight: '600',
        color: '#2C2C2C',
        lineHeight: 40,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    subContent: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '400',
        color: '#2C2C2C',
        lineHeight: 24,
        textAlign: 'center'
    },
    phoneNumberView: {
        marginTop: 60,
        width: '80%',
        height: 50,
        backgroundColor: 'white'
    },
    buttonContainer: {
        width: '80%',
        height: 60,
        marginTop: 'auto',
        marginBottom: 40
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

export default MobileNumber;